'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Phone, Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { BUSINESS_DATA } from '@/utils/constants';

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
    <motion.nav
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-900 shadow-lg' : 'bg-dark-900/90 backdrop-blur'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              className="relative w-14 h-14"
              whileHover={{ scale: 1.05 }}
            >
              <Image 
                src="/images/logo/logo.png" 
                alt="Vetechi Logo" 
                fill
                className="object-contain brightness-0 invert"
                priority
              />

            </motion.div>
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
              <motion.a
                key={link.href}
                href={link.href}
                className="font-subtitle text-sm font-semibold text-white hover:text-primary-300 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Right side controls */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href={BUSINESS_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 text-sm"
              aria-label="WhatsApp de Emergencia"
            >
              <Phone size={18} />
              {isEs ? 'Emergencia 24/7' : 'Emergency 24/7'}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white text-2xl"
            aria-label={isEs ? 'Menú' : 'Menu'}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-dark-800 pb-4 space-y-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
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
                href={`tel:${BUSINESS_DATA.phone}`}
                className="btn-primary w-full flex items-center justify-center gap-2 text-sm"
              >
                <Phone size={18} />
                {BUSINESS_DATA.phone}
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}