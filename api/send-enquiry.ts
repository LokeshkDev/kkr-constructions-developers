import nodemailer from 'nodemailer';
import 'dotenv/config';

export interface EnquiryData {
  name: string;
  phone: string;
  email?: string;
  serviceType?: string;
  projectType?: string;
  area?: string;
  location?: string;
  preferredDate?: string;
  preferredSlot?: string;
  message?: string;
  formSource: string;
  submittedAt?: string;
}

const BRAND = {
  navy: '#05213e',
  green: '#008A3C',
  darkGreen: '#006C2E',
  gold: '#F3A200',
  lightGreen: '#E8F6ED',
  charcoal: '#05213e',
  offWhite: '#F6F9F7',
  grayBorder: '#E1E9E4',
  textGray: '#4A5568',
};

/**
 * Generate Admin Notification Email HTML
 * Sent to the business owner/admin when a customer submits any form.
 */
export function generateAdminEmailHtml(data: EnquiryData): string {
  const service = data.serviceType || data.projectType || 'General Enquiry';
  const cleanPhone = data.phone.replace(/[^0-9+]/g, '');
  const waNumber = cleanPhone.startsWith('+') ? cleanPhone.replace('+', '') : `91${cleanPhone.replace(/^0+/, '')}`;
  const timestamp = data.submittedAt || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'short' });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Lead Notification</title>
</head>
<body style="margin:0;padding:0;background-color:#F0F4F8;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1A202C;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#F0F4F8;padding:24px 12px;">
    <tr>
      <td align="center">
        <!-- Main Card -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px;background-color:#FFFFFF;border-radius:8px;overflow:hidden;box-shadow:0 4px 16px rgba(5,33,62,0.08);border:1px solid #D9E2EC;">
          
          <!-- Top Header Strip -->
          <tr>
            <td style="background-color:${BRAND.navy};padding:24px 28px;text-align:left;border-bottom:4px solid ${BRAND.green};">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <div style="font-size:11px;font-weight:800;color:${BRAND.gold};text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px;">
                      ✦ NEW WEBSITE LEAD ALERT
                    </div>
                    <h1 style="margin:0;font-size:22px;font-weight:800;color:#FFFFFF;line-height:1.3;">
                      KKR Construction & Developers
                    </h1>
                    <div style="font-size:13px;color:#CBD5E1;margin-top:4px;">
                      Source: <strong style="color:#FFFFFF;">${data.formSource}</strong>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- High-Priority Contact Banner -->
          <tr>
            <td style="background-color:${BRAND.lightGreen};padding:18px 28px;border-bottom:1px solid #C6E7D2;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <span style="font-size:11px;font-weight:800;text-transform:uppercase;color:${BRAND.darkGreen};letter-spacing:1px;display:block;margin-bottom:4px;">Customer Name</span>
                    <strong style="font-size:20px;color:${BRAND.navy};line-height:1.2;">${data.name}</strong>
                  </td>
                  <td align="right">
                    <span style="font-size:11px;font-weight:800;text-transform:uppercase;color:${BRAND.darkGreen};letter-spacing:1px;display:block;margin-bottom:4px;">Service Requested</span>
                    <span style="font-size:13px;font-weight:700;color:#FFFFFF;background-color:${BRAND.green};padding:4px 10px;border-radius:4px;display:inline-block;">
                      ${service}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Quick Action Buttons -->
          <tr>
            <td style="padding:20px 28px;background-color:#F8FAFC;border-bottom:1px solid #E2E8F0;">
              <div style="font-size:12px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:12px;">Instant Follow-up Actions</div>
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="padding-right:8px;padding-bottom:8px;">
                    <a href="tel:${cleanPhone}" style="display:inline-block;background-color:${BRAND.green};color:#FFFFFF;font-size:13px;font-weight:700;text-decoration:none;padding:10px 18px;border-radius:5px;box-shadow:0 2px 4px rgba(0,138,60,0.2);">
                      📞 Call Customer
                    </a>
                  </td>
                  ${data.email ? `
                  <td style="padding-right:8px;padding-bottom:8px;">
                    <a href="mailto:${data.email}" style="display:inline-block;background-color:${BRAND.navy};color:#FFFFFF;font-size:13px;font-weight:700;text-decoration:none;padding:10px 18px;border-radius:5px;">
                      ✉️ Reply Email
                    </a>
                  </td>` : ''}
                  <td style="padding-bottom:8px;">
                    <a href="https://wa.me/${waNumber}?text=Hello%20${encodeURIComponent(data.name)}%2C%20thank%20you%20for%20contacting%20KKR%20Construction%20%26%20Developers%20regarding%20${encodeURIComponent(service)}." style="display:inline-block;background-color:#25D366;color:#FFFFFF;font-size:13px;font-weight:700;text-decoration:none;padding:10px 18px;border-radius:5px;">
                      💬 WhatsApp
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Details Table -->
          <tr>
            <td style="padding:28px;">
              <h3 style="margin:0 0 16px 0;font-size:15px;font-weight:800;color:${BRAND.navy};text-transform:uppercase;letter-spacing:0.8px;border-bottom:2px solid #E2E8F0;padding-bottom:8px;">
                Complete Lead Details
              </h3>
              
              <table role="presentation" width="100%" cellspacing="0" cellpadding="8" border="0" style="font-size:14px;border-collapse:collapse;">
                <tr style="background-color:#F8FAFC;">
                  <td width="35%" style="font-weight:700;color:#64748B;border-bottom:1px solid #E2E8F0;padding:10px 12px;">Full Name:</td>
                  <td width="65%" style="color:#0F172A;font-weight:700;border-bottom:1px solid #E2E8F0;padding:10px 12px;">${data.name}</td>
                </tr>
                <tr>
                  <td style="font-weight:700;color:#64748B;border-bottom:1px solid #E2E8F0;padding:10px 12px;">Phone Number:</td>
                  <td style="border-bottom:1px solid #E2E8F0;padding:10px 12px;">
                    <a href="tel:${cleanPhone}" style="color:${BRAND.green};font-weight:700;text-decoration:none;font-family:monospace;font-size:15px;">${data.phone}</a>
                  </td>
                </tr>
                <tr style="background-color:#F8FAFC;">
                  <td style="font-weight:700;color:#64748B;border-bottom:1px solid #E2E8F0;padding:10px 12px;">Email Address:</td>
                  <td style="border-bottom:1px solid #E2E8F0;padding:10px 12px;">
                    ${data.email ? `<a href="mailto:${data.email}" style="color:${BRAND.navy};font-weight:600;text-decoration:none;">${data.email}</a>` : '<em style="color:#94A3B8;">Not provided by customer</em>'}
                  </td>
                </tr>
                <tr>
                  <td style="font-weight:700;color:#64748B;border-bottom:1px solid #E2E8F0;padding:10px 12px;">Service / Project:</td>
                  <td style="color:#0F172A;font-weight:700;border-bottom:1px solid #E2E8F0;padding:10px 12px;">${service}</td>
                </tr>
                ${data.area ? `
                <tr style="background-color:#F8FAFC;">
                  <td style="font-weight:700;color:#64748B;border-bottom:1px solid #E2E8F0;padding:10px 12px;">Estimated Area:</td>
                  <td style="color:#0F172A;font-weight:600;border-bottom:1px solid #E2E8F0;padding:10px 12px;">${data.area} Sq.Ft</td>
                </tr>` : ''}
                ${data.location ? `
                <tr>
                  <td style="font-weight:700;color:#64748B;border-bottom:1px solid #E2E8F0;padding:10px 12px;">Site Location / City:</td>
                  <td style="color:#0F172A;font-weight:600;border-bottom:1px solid #E2E8F0;padding:10px 12px;">${data.location}</td>
                </tr>` : ''}
                ${data.preferredDate ? `
                <tr style="background-color:#F8FAFC;">
                  <td style="font-weight:700;color:#64748B;border-bottom:1px solid #E2E8F0;padding:10px 12px;">Preferred Visit Date:</td>
                  <td style="color:#0F172A;font-weight:700;border-bottom:1px solid #E2E8F0;padding:10px 12px;">${data.preferredDate}</td>
                </tr>` : ''}
                ${data.preferredSlot ? `
                <tr>
                  <td style="font-weight:700;color:#64748B;border-bottom:1px solid #E2E8F0;padding:10px 12px;">Preferred Time Slot:</td>
                  <td style="color:#0F172A;font-weight:600;border-bottom:1px solid #E2E8F0;padding:10px 12px;">${data.preferredSlot}</td>
                </tr>` : ''}
                <tr style="background-color:#F8FAFC;">
                  <td style="font-weight:700;color:#64748B;border-bottom:1px solid #E2E8F0;padding:10px 12px;">Submission Time:</td>
                  <td style="color:#64748B;border-bottom:1px solid #E2E8F0;padding:10px 12px;font-size:12px;">${timestamp}</td>
                </tr>
              </table>

              <!-- Customer Message Box -->
              ${data.message ? `
              <div style="margin-top:20px;">
                <div style="font-size:12px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:8px;">Customer Requirements / Message:</div>
                <div style="background-color:#F8FAFC;border-left:4px solid ${BRAND.green};padding:14px 16px;border-radius:4px;color:#1E293B;font-size:14px;line-height:1.6;white-space:pre-wrap;">${data.message}</div>
              </div>` : ''}

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#F1F5F9;padding:18px 28px;text-align:center;border-top:1px solid #E2E8F0;font-size:12px;color:#64748B;">
              <div>This lead notification was automatically generated by the <strong>KKR Construction & Developers</strong> website.</div>
              <div style="margin-top:4px;color:#94A3B8;">Registered Office: Plot No:37, Sai Garden, Thiruvallur, Tamil Nadu 631203</div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Generate Customer Acknowledgment Email HTML
 * Sent directly to the customer confirming their enquiry was received.
 */
export function generateCustomerEmailHtml(data: EnquiryData): string {
  const service = data.serviceType || data.projectType || 'General Construction Consultation';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enquiry Acknowledged - KKR Construction & Developers</title>
</head>
<body style="margin:0;padding:0;background-color:#F4F7FA;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1A202C;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#F4F7FA;padding:24px 12px;">
    <tr>
      <td align="center">
        <!-- Main Card -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px;background-color:#FFFFFF;border-radius:8px;overflow:hidden;box-shadow:0 4px 20px rgba(5,33,62,0.09);border:1px solid #DCE5ED;">
          
          <!-- Brand Header Strip -->
          <tr>
            <td style="background-color:${BRAND.navy};padding:28px;text-align:center;border-bottom:4px solid ${BRAND.green};">
              <div style="display:inline-block;padding:4px 12px;background-color:rgba(243,162,0,0.15);border:1px solid rgba(243,162,0,0.4);border-radius:20px;font-size:10px;font-weight:800;color:${BRAND.gold};text-transform:uppercase;letter-spacing:1.5px;margin-bottom:10px;">
                ENGINEERING • CONSTRUCTION • MIVAN SOLUTIONS
              </div>
              <h1 style="margin:0;font-size:24px;font-weight:800;color:#FFFFFF;letter-spacing:0.5px;line-height:1.2;">
                KKR Construction &amp; Developers
              </h1>
              <p style="margin:6px 0 0 0;font-size:13px;color:#CBD5E1;font-weight:500;">
                Engineering Excellence. Construction You Can Trust.
              </p>
            </td>
          </tr>

          <!-- Hero Greeting -->
          <tr>
            <td style="padding:32px 32px 20px 32px;background:linear-gradient(180deg, #FAFCFA 0%, #FFFFFF 100%);">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <div style="width:48px;height:48px;border-radius:50%;background-color:${BRAND.lightGreen};color:${BRAND.green};text-align:center;line-height:48px;font-size:24px;margin-bottom:16px;">
                      ✓
                    </div>
                    <h2 style="margin:0 0 8px 0;font-size:20px;font-weight:800;color:${BRAND.navy};line-height:1.3;">
                      Thank You, ${data.name}!
                    </h2>
                    <p style="margin:0;font-size:15px;color:#475569;line-height:1.6;">
                      We have received your request regarding <strong style="color:${BRAND.navy};">${service}</strong>. Our civil engineering team and founder <strong style="color:${BRAND.navy};">Mr. Mohan Ram</strong> are currently reviewing your project details.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Next Steps Alert Box -->
          <tr>
            <td style="padding:0 32px 20px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:${BRAND.lightGreen};border:1px solid #B8E4C9;border-radius:6px;padding:18px 20px;">
                <tr>
                  <td>
                    <div style="font-size:12px;font-weight:800;color:${BRAND.darkGreen};text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">
                      ⏱️ What Happens Next?
                    </div>
                    <p style="margin:0;font-size:13px;color:#1E3A2F;line-height:1.5;">
                      A dedicated civil engineering professional will contact you at <strong style="color:${BRAND.navy};font-family:monospace;font-size:14px;">${data.phone}</strong> within <strong>24–48 hours</strong> to discuss site feasibility, structural planning, and cost estimates.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Request Summary Box -->
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <div style="font-size:12px;font-weight:800;color:#64748B;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">
                Summary of Your Request
              </div>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="10" border="0" style="background-color:#F8FAFC;border:1px solid #E2E8F0;border-radius:6px;font-size:13px;">
                <tr>
                  <td width="35%" style="color:#64748B;font-weight:700;border-bottom:1px solid #E2E8F0;">Service:</td>
                  <td width="65%" style="color:${BRAND.navy};font-weight:700;border-bottom:1px solid #E2E8F0;">${service}</td>
                </tr>
                ${data.area ? `
                <tr>
                  <td style="color:#64748B;font-weight:700;border-bottom:1px solid #E2E8F0;">Approx Area:</td>
                  <td style="color:#0F172A;font-weight:600;border-bottom:1px solid #E2E8F0;">${data.area} Sq.Ft</td>
                </tr>` : ''}
                ${data.location ? `
                <tr>
                  <td style="color:#64748B;font-weight:700;border-bottom:1px solid #E2E8F0;">Location:</td>
                  <td style="color:#0F172A;font-weight:600;border-bottom:1px solid #E2E8F0;">${data.location}</td>
                </tr>` : ''}
                ${data.preferredDate ? `
                <tr>
                  <td style="color:#64748B;font-weight:700;border-bottom:1px solid #E2E8F0;">Preferred Date:</td>
                  <td style="color:#0F172A;font-weight:600;border-bottom:1px solid #E2E8F0;">${data.preferredDate} (${data.preferredSlot || 'Standard Slot'})</td>
                </tr>` : ''}
                ${data.message ? `
                <tr>
                  <td style="color:#64748B;font-weight:700;vertical-align:top;">Your Message:</td>
                  <td style="color:#334155;line-height:1.5;">${data.message}</td>
                </tr>` : ''}
              </table>
            </td>
          </tr>

          <!-- Why KKR Construction - Value Props -->
          <tr>
            <td style="padding:0 32px 28px 32px;">
              <div style="font-size:12px;font-weight:800;color:#64748B;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px;">
                Why Choose KKR Construction?
              </div>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td width="50%" style="padding-right:8px;padding-bottom:12px;vertical-align:top;">
                    <div style="background-color:#F8FAFC;border:1px solid #E2E8F0;border-radius:6px;padding:12px;">
                      <div style="font-size:12px;font-weight:800;color:${BRAND.green};margin-bottom:4px;">⚡ 7–10 Day Cycle</div>
                      <div style="font-size:11px;color:#475569;line-height:1.4;">Rapid monolithic Mivan floor casting with zero timber waste.</div>
                    </div>
                  </td>
                  <td width="50%" style="padding-left:8px;padding-bottom:12px;vertical-align:top;">
                    <div style="background-color:#F8FAFC;border:1px solid #E2E8F0;border-radius:6px;padding:12px;">
                      <div style="font-size:12px;font-weight:800;color:${BRAND.green};margin-bottom:4px;">🛡️ Crack-Resistant</div>
                      <div style="font-size:11px;color:#475569;line-height:1.4;">Seepage-free monolithic shear walls & seismic resilience.</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td width="50%" style="padding-right:8px;vertical-align:top;">
                    <div style="background-color:#F8FAFC;border:1px solid #E2E8F0;border-radius:6px;padding:12px;">
                      <div style="font-size:12px;font-weight:800;color:${BRAND.green};margin-bottom:4px;">📐 13+ Yrs Leadership</div>
                      <div style="font-size:11px;color:#475569;line-height:1.4;">Guided by qualified civil engineers and site execution masters.</div>
                    </div>
                  </td>
                  <td width="50%" style="padding-left:8px;vertical-align:top;">
                    <div style="background-color:#F8FAFC;border:1px solid #E2E8F0;border-radius:6px;padding:12px;">
                      <div style="font-size:12px;font-weight:800;color:${BRAND.green};margin-bottom:4px;">🤝 Transparent Costing</div>
                      <div style="font-size:11px;color:#475569;line-height:1.4;">Detailed BOQ estimates with milestone-based payment schedules.</div>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Direct Support / Urgent Call Strip -->
          <tr>
            <td style="background-color:#F1F5F9;padding:24px 32px;border-top:1px solid #E2E8F0;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <div style="font-size:11px;font-weight:800;color:${BRAND.navy};text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">
                      Have an Urgent Question?
                    </div>
                    <div style="font-size:13px;color:#475569;margin-bottom:12px;">
                      Speak directly with our managing partners and civil engineers:
                    </div>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="padding-right:10px;padding-bottom:6px;">
                          <a href="tel:+918072183386" style="display:inline-block;background-color:${BRAND.green};color:#FFFFFF;font-size:12px;font-weight:700;text-decoration:none;padding:8px 14px;border-radius:4px;">
                            📞 +91 80721 83386
                          </a>
                        </td>
                        <td style="padding-right:10px;padding-bottom:6px;">
                          <a href="tel:+917550331045" style="display:inline-block;background-color:${BRAND.navy};color:#FFFFFF;font-size:12px;font-weight:700;text-decoration:none;padding:8px 14px;border-radius:4px;">
                            📞 +91 75503 31045
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:${BRAND.navy};padding:24px 32px;text-align:center;font-size:11px;color:#94A3B8;line-height:1.5;">
              <div style="font-weight:700;color:#FFFFFF;font-size:13px;margin-bottom:4px;">KKR Construction &amp; Developers</div>
              <div>Plot No:37, Sai Garden, Thiruvallur, Tamil Nadu 631203</div>
              <div style="margin-top:6px;">
                Email: <a href="mailto:kkrconstructiondevelopers@gmail.com" style="color:${BRAND.gold};text-decoration:none;">kkrconstructiondevelopers@gmail.com</a>
              </div>
              <div style="margin-top:12px;color:#64748B;font-size:10px;">
                © ${new Date().getFullYear()} KKR Construction & Developers. All rights reserved.
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

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
  const smtpUser = process.env.SMTP_USER || 'kkrconstructiondevelopers@gmail.com';
  const rawPass = process.env.SMTP_PASS || '';
  const smtpPass = rawPass.replace(/\s+/g, ''); // Strip any accidental spaces from 16-char app password
  const adminEmail = process.env.ADMIN_EMAIL || smtpUser;
  const companyName = process.env.COMPANY_NAME || 'KKR Construction & Developers';

  if (!smtpPass || smtpPass === 'your_16_character_app_password_here') {
    const errorMsg = 'SMTP_PASS is not configured in Vercel Environment Variables. Please set SMTP_PASS in Vercel Project Settings > Environment Variables.';
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
      message: error?.message || 'Internal server error while processing enquiry.',
      error: String(error),
    });
  }
}
