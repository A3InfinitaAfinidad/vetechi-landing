'use client';

import { containerVariants, fadeUpVariants, itemVariants } from '@/utils/animations';
import { BUSINESS_DATA, STATS } from '@/utils/constants';
import { motion } from 'framer-motion';
import { Clock, MapPin, PawPrint, Phone, Star, Stethoscope } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import AnimatedCounter from './AnimatedCounter';

const IconMap = {
  Stethoscope,
  Star,
  Clock,
  PawPrint,
};

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const isEs = locale === 'es';
  const stats = isEs ? STATS.es : STATS.en;

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-dark-900">
      {/* Background with Horizontal Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="VETECHI Hospital Exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/85 via-dark-900/50 to-dark-900/20" />
        <div 
          className="absolute inset-0 opacity-60 pointer-events-none" 
          style={{ background: `radial-gradient(circle at 30% 50%, rgba(27, 59, 47, 0.4) 0%, transparent 70%)` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col gap-16">
          {/* Main Content Area */}
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Content Side */}
            <motion.div
              className="flex-1 space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Top Badge — Latido Institucional */}
              <motion.div 
                className="latido inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#C5A77A]/40 bg-[#C5A77A]/10 backdrop-blur-md shadow-[0_0_15px_rgba(197,167,122,0.15)]"
                variants={fadeUpVariants}
                custom={0}
              >
                <MapPin size={14} className="text-[#C5A77A]" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">
                  {isEs ? 'Único hospital veterinario 24h en Chiriquí' : 'Only 24h veterinary hospital in Chiriquí'}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-tight text-white tracking-tight"
                variants={fadeUpVariants}
                custom={1}
              >
                {isEs ? (
                  <>
                    Hospital Veterinario<br />
                    <span className="text-accent-500 italic font-serif">VETECHI</span><br />
                    <span className="text-3xl sm:text-5xl font-semibold">24 horas en Chiriquí</span>
                  </>
                ) : (
                  <>
                    Veterinary Hospital<br />
                    <span className="text-accent-500 italic font-serif">VETECHI</span><br />
                    <span className="text-3xl sm:text-5xl font-semibold">24 hours in Chiriquí</span>
                  </>
                )}
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                className="text-xl text-gray-100 max-w-xl leading-relaxed font-light"
                variants={fadeUpVariants}
                custom={2}
              >
                {isEs 
                  ? 'Atención continua, tecnología moderna y un equipo apasionado por la vida animal.' 
                  : 'Continuous care, modern technology, and a team passionate about animal life.'}
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                variants={fadeUpVariants}
                custom={3}
              >
                <a
                  href={`${BUSINESS_DATA.whatsapp}?text=${encodeURIComponent(isEs ? 'Hola VETECHI, me gustaría agendar una cita para mi mascota.' : 'Hello VETECHI, I would like to book an appointment for my pet.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-10 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-primary-500/20 transition-all text-center"
                >
                  {t('cta1')}
                </a>
                <a
                  href="tel:+50763303291"
                  aria-label={isEs ? 'Llamar a VETECHI - Emergencia 24/7' : 'Call VETECHI - Emergency 24/7'}
                  className="btn-emergency px-10 py-4 text-lg font-bold rounded-xl flex items-center justify-center gap-3 shadow-lg"
                >
                  <Phone size={20} />
                  <span>{t('cta2')}</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Decorative spacer for desktop to balance with the wide stats below */}
            <div className="hidden lg:block lg:w-32" />
          </div>

          {/* Stats Row - Wide Horizontal Block */}
          <motion.div
            className="w-full"
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="glassmorphism p-4 sm:p-6 rounded-[2rem] w-full flex flex-col sm:flex-row items-center justify-around gap-6 shadow-2xl relative overflow-hidden group/stats">
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover/stats:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {stats.map((stat, i) => {
                const Icon = IconMap[stat.icon as keyof typeof IconMap];
                return (
                  <motion.div
                    key={stat.label}
                    className="flex flex-row sm:flex-col items-center gap-4 sm:gap-1 text-center group relative z-10"
                    variants={itemVariants}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500 shadow-inner">
                      {Icon && <Icon size={20} strokeWidth={2.5} />}
                    </div>
                    <div className="text-left sm:text-center">
                      <div className="text-xl font-display font-black text-white leading-tight group-hover:text-primary-400 transition-colors">
                        <AnimatedCounter value={stat.value} />
                      </div>
                      <div className="text-[8px] uppercase tracking-[0.15em] text-gray-300 font-bold leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Status indicator floating below card */}
            <motion.div 
              className="mt-6 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="px-6 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center gap-3 shadow-lg group hover:bg-white/20 transition-all duration-300">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-500"></span>
                </div>
                <p className="text-[11px] font-black text-white uppercase tracking-[0.25em] font-sans">
                  {isEs ? 'Personal médico activo 24/7' : 'Medical staff active 24/7'}
                </p>
              </div>
            </motion.div>


          </motion.div>
        </div>
      </div>


    </section>
  );
}


