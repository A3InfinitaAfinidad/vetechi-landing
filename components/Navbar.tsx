'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { BUSINESS_DATA } from '@/utils/constants';
import { Menu, MessageCircle, Phone, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isEs = locale === 'es';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: isEs ? 'Inicio' : 'Home' },
    { href: '#servicios', label: isEs ? 'Servicios' : 'Services' },
    { href: '#exito', label: isEs ? 'Casos de Éxito' : 'Success Stories' },
    { href: '#equipo', label: isEs ? 'Equipo' : 'Team' },
    { href: '#emergencias', label: isEs ? 'Urgencias' : 'Emergencies' },
    { href: '#contacto', label: isEs ? 'Contacto' : 'Contact' },
  ];


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link href={`/${locale}/`} className="flex items-center gap-3">
            <div
              className="relative w-14 h-14"
            >
              <Image 
                src="/images/optimized/logo/logo-nav.webp" 
                alt="VETECHI Hospital Veterinario Logo" 
                fill
                className="object-contain brightness-0 invert"
                priority
              />

            </div>
            <div>
              <div className="text-xl font-display font-bold text-white tracking-tight">VETECHI</div>
              <div className="text-[10px] font-subtitle text-accent-500 font-bold leading-none tracking-widest uppercase">
                {isEs ? 'Hospital Veterinario' : 'Veterinary Hospital'}
              </div>
            </div>
          </Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-subtitle text-sm font-semibold text-white hover:text-primary-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side controls */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href={`${BUSINESS_DATA.whatsapp}?text=${encodeURIComponent(isEs ? BUSINESS_DATA.whatsappMessages.info.es : BUSINESS_DATA.whatsappMessages.info.en)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 text-sm"
              aria-label={isEs ? 'WhatsApp para consultas e información general' : 'WhatsApp for general questions and information'}
            >
              <MessageCircle size={18} />
              {isEs ? 'Contactar por WhatsApp' : 'Contact us on WhatsApp'}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white text-2xl p-2 m-1"
            aria-label={isEs ? 'Menú' : 'Menu'}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden bg-dark-800 pb-4 space-y-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-white hover:bg-primary-800 hover:text-accent-500 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 py-2 border-t border-dark-700">
              <LanguageSwitcher />
            </div>
            <div className="px-4 pt-2">
              <a
                href={BUSINESS_DATA.phoneHref}
                aria-label={isEs ? 'Llamar por urgencia fuera del horario presencial' : 'Call for an emergency outside in-person hours'}
                className="btn-primary w-full flex flex-col items-center justify-center gap-1 text-sm"
              >
                <span className="flex items-center gap-2"><Phone size={18} />{BUSINESS_DATA.phone}</span>
                <span className="text-xs">{isEs ? 'Urgencias fuera de horario' : 'After-hours emergencies'}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
