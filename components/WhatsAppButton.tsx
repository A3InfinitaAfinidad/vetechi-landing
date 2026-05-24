'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
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
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[1000] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      aria-label={isEs ? 'WhatsApp de Emergencia' : 'Emergency WhatsApp'}
      title={isEs ? 'Contactar por WhatsApp' : 'Contact via WhatsApp'}
    >
      <SiWhatsapp size={32} aria-hidden="true" />
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </motion.a>
  );
}
