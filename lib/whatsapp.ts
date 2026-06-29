import { BUSINESS_PHONE } from "./constants";

export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  description?: string;
}

export function buildWhatsAppURL(data: EnquiryFormData): string {
  const message = `*New Enquiry — Synergy Projects Website*

*Name:* ${data.name}
*Email:* ${data.email}
*Phone:* ${data.phone}
*Service:* ${data.service}
*Description:* ${data.description || "N/A"}`.trim();

  return `https://wa.me/${BUSINESS_PHONE}?text=${encodeURIComponent(message)}`;
}
