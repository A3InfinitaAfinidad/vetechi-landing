'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';


import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';
import { BUSINESS_DATA } from '@/utils/constants';

export default function Footer() {
  const locale = useLocale();
  const year = new Date().getFullYear();

  const isEs = locale === 'es';

  return (
    <footer className="bg-dark-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-14 h-14">
                <Image 
                  src="/images/logo/logo.png" 
                  alt="Vetechi Logo" 
                  fill
                  className="object-contain brightness-0 invert"
                />

              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white tracking-tight">VETECHI</h3>
                <p className="text-[10px] text-accent-500 font-bold uppercase tracking-widest leading-none">
                  {isEs ? 'Hospital Veterinario' : 'Veterinary Hospital'}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-300 mb-6 italic font-subtitle">
              {isEs ? '¡Tu mejor amigo merece lo mejor!' : 'Your best friend deserves the best!'}
            </p>
            <p className="text-xs text-gray-400 mb-4">
              {isEs
                ? 'Hospital Veterinario en David, Chiriquí - Panamá.'
                : 'Veterinary Hospital in David, Chiriquí - Panama.'}
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/vetechi.pa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent-800 hover:bg-accent-700 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <FaInstagram size={20} className="text-white" />
              </a>
              <a
                href="https://facebook.com/vetechipa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent-800 hover:bg-accent-700 flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <FaFacebook size={20} className="text-white" />
              </a>
              <a
                href={BUSINESS_DATA.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent-800 hover:bg-accent-700 flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <SiWhatsapp size={20} className="text-white" />
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-subtitle font-bold text-accent-500 uppercase text-sm mb-6">
              {isEs ? 'Contacto' : 'Contact'}
            </h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <Phone size={18} className="flex-shrink-0 text-primary-400 mt-0.5" />
                <a href={`tel:${BUSINESS_DATA.phone}`} className="hover:text-accent-500 transition-colors">
                  {BUSINESS_DATA.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 text-primary-400 mt-0.5" />
                <div>
                  <p>{isEs ? 'Antigua Vía a Boquete' : 'Old Boquete Road'}</p>
                  <p className="text-xs text-gray-400">David, Chiriquí, Panamá</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-subtitle font-bold text-accent-500 uppercase text-sm mb-6">
              {isEs ? 'Abierto' : 'Hours'}
            </h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <Clock size={18} className="flex-shrink-0 text-primary-400 mt-0.5" />
                <div>
                  <p>{isEs ? BUSINESS_DATA.hours.es : BUSINESS_DATA.hours.en}</p>
                </div>
              </li>
              <li>
                <p className="text-primary-400 font-bold text-xs">
                  🚨 {isEs ? 'EMERGENCIAS 24/7/365' : 'EMERGENCIES 24/7/365'}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {isEs ? BUSINESS_DATA.emergencies.es : BUSINESS_DATA.emergencies.en}
                </p>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-8"></div>

        {/* Copyright */}
        <motion.div
          className="text-center text-xs text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            © {year} VETECHI {isEs ? 'Hospital Veterinario Chiriquí' : 'Veterinary Hospital Chiriquí'}
            . {isEs ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}