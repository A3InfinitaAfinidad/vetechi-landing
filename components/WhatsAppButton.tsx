'use client';

import { useLocale } from 'next-intl';
import { SiWhatsapp } from 'react-icons/si';
import { BUSINESS_DATA } from '@/utils/constants';
import { isValidWhatsAppUrl, sanitizeWhatsAppText } from '@/utils/validation';

export default function WhatsAppButton() {
  const locale = useLocale();
  const isEs = locale === 'es';

  const whatsappUrl = BUSINESS_DATA.whatsapp;
  
  // Validate WhatsApp URL
  if (!isValidWhatsAppUrl(whatsappUrl)) {
    console.error('[WhatsAppButton] Invalid WhatsApp URL detected:', whatsappUrl);
    return null;
  }

  const message = isEs ? BUSINESS_DATA.whatsappMessages.info.es : BUSINESS_DATA.whatsappMessages.info.en;
  const sanitizedMessage = sanitizeWhatsAppText(message);
  const href = `${whatsappUrl}?text=${encodeURIComponent(sanitizedMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[1000] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
      aria-label={isEs ? 'WhatsApp para consultas e información general' : 'WhatsApp for general questions and information'}
      title={isEs ? 'Consultas e información general por WhatsApp' : 'General questions and information via WhatsApp'}
    >
      <SiWhatsapp size={32} aria-hidden="true" />
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </a>
  );
}
