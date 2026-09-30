export interface EnquiryPayload {
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
}

export interface EnquiryResponse {
  success: boolean;
  message: string;
  adminSent?: boolean;
  customerSent?: boolean;
}

/**
 * Submit enquiry data to the /api/send-enquiry backend endpoint
 */
export async function submitEnquiry(payload: EnquiryPayload): Promise<EnquiryResponse> {
  try {
    const res = await fetch('/api/send-enquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    let data: any = {};
    try {
      data = await res.json();
    } catch {
      // Non-JSON response
    }

    if (!res.ok) {
      return {
        success: false,
        message: data.message || `Failed to submit enquiry (Error ${res.status}). Please try calling us directly.`,
      };
    }

    return {
      success: true,
      message: data.message || 'Your enquiry has been submitted successfully! We will contact you shortly.',
      adminSent: data.adminSent,
      customerSent: data.customerSent,
    };
  } catch (error: any) {
    console.error('[submitEnquiry Error]:', error);
    return {
      success: false,
      message: 'Unable to reach the server. Please check your internet connection or call our office directly.',
    };
  }
}

