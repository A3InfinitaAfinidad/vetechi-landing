'use client';

import { motion } from 'framer-motion';
import { SiWhatsapp } from 'react-icons/si';
import { BUSINESS_DATA } from '@/utils/constants';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={BUSINESS_DATA.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[1000] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      aria-label="WhatsApp de Emergencia"
    >
      <SiWhatsapp size={32} />
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </motion.a>
  );
}
