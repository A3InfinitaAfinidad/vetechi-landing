'use client';

import { Clock, MapPin, Phone } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';


import { BUSINESS_DATA } from '@/utils/constants';
import { FaInstagram } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  const isEs = locale === 'es';

  return (
    <footer className="bg-dark-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Social */}
          <div
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-14 h-14">
                <Image 
                  src="/images/optimized/logo/logo-nav.webp" 
                  alt="VETECHI Hospital Veterinario" 
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
              {t('slogan')}
            </p>
            <p className="text-xs text-gray-300 mb-4">
              {isEs
                ? 'Hospital Veterinario en David, Chiriquí - Panamá.'
                : 'Veterinary Hospital in David, Chiriquí - Panama.'}
            </p>
            <div className="flex gap-4">
              <a
                href={BUSINESS_DATA.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-accent-800 hover:bg-accent-700 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <FaInstagram size={20} className="text-white" aria-hidden="true" />
              </a>
              <a
                href={`${BUSINESS_DATA.whatsapp}?text=${encodeURIComponent(isEs ? BUSINESS_DATA.whatsappMessages.info.es : BUSINESS_DATA.whatsappMessages.info.en)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-accent-800 hover:bg-accent-700 flex items-center justify-center transition-all"
                aria-label={isEs ? 'WhatsApp para consultas e información general' : 'WhatsApp for general questions and information'}
              >
                <SiWhatsapp size={20} className="text-white" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div
          >
            <h4 className="font-subtitle font-bold text-accent-500 uppercase text-sm mb-6">
              {isEs ? 'Contacto' : 'Contact'}
            </h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <Phone size={18} className="flex-shrink-0 text-primary-400 mt-0.5" />
                <a href={BUSINESS_DATA.phoneHref} className="hover:text-accent-500 transition-colors">
                  {BUSINESS_DATA.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 text-primary-400 mt-0.5" />
                <div>
                  <p>{isEs ? 'Antigua Vía a Boquete' : 'Old Boquete Road'}</p>
                  <p className="text-xs text-gray-300">David, Chiriquí, Panamá</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div
          >
            <h4 className="font-subtitle font-bold text-accent-500 uppercase text-sm mb-6">
              {isEs ? 'Horario presencial' : 'In-person hours'}
            </h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <Clock size={18} className="flex-shrink-0 text-primary-400 mt-0.5" />
                <div>
                  {(isEs ? BUSINESS_DATA.hours.es : BUSINESS_DATA.hours.en).map((hours) => (
                    <p key={hours}>{hours}</p>
                  ))}
                </div>
              </li>
              <li>
                <p className="text-xs text-gray-300 mt-1">
                  {isEs ? BUSINESS_DATA.afterHoursEmergency.es : BUSINESS_DATA.afterHoursEmergency.en}
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Institutional Banner */}
        <div className="border-t border-gray-700 pt-8 pb-4">
          <div className="text-center space-y-2">
            <p className="text-lg font-display font-bold text-white tracking-tight">
              {isEs ? 'Atención veterinaria extendida en David, Chiriquí.' : 'Extended veterinary care in David, Chiriquí.'}
            </p>
            <p className="text-sm text-accent-500 italic font-subtitle">
              {t('slogan')}
            </p>
            <p className="text-xs text-gray-400 max-w-2xl mx-auto leading-relaxed pt-2">
              {isEs
                ? 'Atención presencial de lunes a sábado de 8:00 a.m. a 10:00 p.m. y los domingos de 10:00 a.m. a 3:00 p.m. Fuera de horario, llama al +507 6330-3291 por una urgencia.'
                : 'In-person care is available Monday to Saturday from 8:00 AM to 10:00 PM and Sunday from 10:00 AM to 3:00 PM. After in-person hours, call +507 6330-3291 for emergencies.'}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="text-center text-xs text-gray-400 pt-6 border-t border-gray-800 space-y-1"
        >
          <p>© {year} VETECHI {isEs ? 'Hospital Veterinario Chiriquí.' : 'Veterinary Hospital Chiriquí.'}</p>
          <p>{t('rights')}.</p>
          <p>{t('developedBy')}</p>
        </div>
      </div>
    </footer>
  );
}
