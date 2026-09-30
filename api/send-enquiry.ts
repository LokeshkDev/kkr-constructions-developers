import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { generateAdminEmailHtml, generateCustomerEmailHtml, EnquiryData } from './emailTemplates';

// Load environment variables from .env if present
dotenv.config();

/**
 * Core email sender service
 */
export async function sendEnquiryEmails(data: EnquiryData): Promise<{
  success: boolean;
  adminSent: boolean;
  customerSent: boolean;
  message: string;
  error?: string;
}> {
  // Always refresh environment variables from .env if updated
  dotenv.config({ override: true });

  const smtpUser = process.env.SMTP_USER || 'kkrconstructiondevelopers@gmail.com';
  const rawPass = process.env.SMTP_PASS || '';
  const smtpPass = rawPass.replace(/\s+/g, ''); // Strip any accidental spaces from 16-char app password
  const adminEmail = process.env.ADMIN_EMAIL || smtpUser;
  const companyName = process.env.COMPANY_NAME || 'KKR Construction & Developers';

  if (!smtpPass || smtpPass === 'your_16_character_app_password_here') {
    const errorMsg = 'SMTP_PASS is not configured in .env. Please provide your 16-character Google App Password.';
    console.error(`[EmailService Error]: ${errorMsg}`);
    return {
      success: false,
      adminSent: false,
      customerSent: false,
      message: errorMsg,
      error: 'MISSING_SMTP_PASS',
    };
  }

  // Create Nodemailer Transporter
  const port = Number(process.env.SMTP_PORT) || 465;
  const isSecure = process.env.SMTP_SECURE !== 'false' && port === 465;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: port,
    secure: isSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    // Reasonable timeouts
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });

  const service = data.serviceType || data.projectType || 'General Consultation';

  // 1. Send Admin Notification Email
  const adminMailOptions = {
    from: `"${companyName} Leads" <${smtpUser}>`,
    to: adminEmail,
    replyTo: data.email ? `"${data.name}" <${data.email}>` : undefined,
    subject: `🔔 New Lead [${data.formSource}]: ${data.name} (${data.phone}) - ${service}`,
    html: generateAdminEmailHtml(data),
    text: `New Lead Received:\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email || 'N/A'}\nService: ${service}\nArea: ${data.area || 'N/A'}\nLocation: ${data.location || 'N/A'}\nDate/Slot: ${data.preferredDate || 'N/A'} ${data.preferredSlot || ''}\nMessage: ${data.message || 'N/A'}\nSource: ${data.formSource}`,
  };

  try {
    await transporter.sendMail(adminMailOptions);
    console.log(`[EmailService] Admin notification sent successfully to ${adminEmail}`);
  } catch (err: any) {
    console.error('[EmailService Error sending to Admin]:', err);
    let errorMessage = err.message || 'Failed to send admin notification email.';
    if (err.code === 'EAUTH') {
      errorMessage = 'Gmail authentication failed. Please verify your Gmail address and 16-character Google App Password.';
    }
    return {
      success: false,
      adminSent: false,
      customerSent: false,
      message: errorMessage,
      error: err.code || 'SMTP_ERROR',
    };
  }

  // 2. Send Customer Confirmation Email (if customer provided an email address)
  let customerSent = false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (data.email && emailRegex.test(data.email.trim())) {
    try {
      const customerMailOptions = {
        from: `"${companyName}" <${smtpUser}>`,
        to: data.email.trim(),
        subject: `Enquiry Acknowledged - ${companyName}`,
        html: generateCustomerEmailHtml(data),
        text: `Dear ${data.name},\n\nThank you for contacting ${companyName}. We have received your request regarding ${service}.\n\nOur engineering team and Founder Mr. Mohan Ram are reviewing your requirements. We will contact you at ${data.phone} within 24–48 hours.\n\nFor urgent enquiries, call us at +91 80721 83386 or +91 75503 31045.\n\nOffice: Plot No:37, Sai Garden, Thiruvallur, Tamil Nadu 631203\nWebsite: https://kkrconstruction.com`,
      };

      await transporter.sendMail(customerMailOptions);
      customerSent = true;
      console.log(`[EmailService] Confirmation email sent successfully to customer: ${data.email}`);
    } catch (custErr) {
      console.warn('[EmailService Warning] Failed to send customer confirmation email (admin was already notified):', custErr);
      // We don't fail the entire submission if customer email fails, because the business lead was successfully delivered to admin!
    }
  }

  return {
    success: true,
    adminSent: true,
    customerSent,
    message: customerSent 
      ? 'Enquiry submitted successfully! Notifications sent to business owner and customer.'
      : 'Enquiry submitted successfully! Notification sent to business owner.',
  };
}

/**
 * Standard Vercel Serverless Function & Node Handler
 */
export default async function handler(req: any, res: any) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method Not Allowed. Please use POST.' });
    return;
  }

  try {
    // Parse body if needed (Vercel parses automatically, some runtimes may provide string)
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        res.status(400).json({ success: false, message: 'Invalid JSON payload' });
        return;
      }
    }

    const { name, phone, email, serviceType, projectType, area, location, preferredDate, preferredSlot, message, formSource } = body || {};

    if (!name || typeof name !== 'string' || !name.trim()) {
      res.status(400).json({ success: false, message: 'Customer name is required' });
      return;
    }

    if (!phone || typeof phone !== 'string' || !phone.trim()) {
      res.status(400).json({ success: false, message: 'Customer phone number is required' });
      return;
    }

    const payload: EnquiryData = {
      name: name.trim(),
      phone: phone.trim(),
      email: email && typeof email === 'string' ? email.trim() : undefined,
      serviceType: serviceType || projectType || 'General Enquiry',
      projectType: projectType || serviceType,
      area: area ? String(area).trim() : undefined,
      location: location ? String(location).trim() : undefined,
      preferredDate: preferredDate ? String(preferredDate).trim() : undefined,
      preferredSlot: preferredSlot ? String(preferredSlot).trim() : undefined,
      message: message ? String(message).trim() : undefined,
      formSource: formSource || 'Website Form',
      submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'short' }),
    };

    const result = await sendEnquiryEmails(payload);

    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(500).json(result);
    }
  } catch (error: any) {
    console.error('[API Handler Error]:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Internal server error while processing enquiry.',
    });
  }
}
