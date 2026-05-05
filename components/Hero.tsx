'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, Stethoscope, Star, Clock, PawPrint, MapPin, ShieldCheck } from 'lucide-react';
import { fadeUpVariants, containerVariants, itemVariants } from '@/utils/animations';
import { BUSINESS_DATA, STATS, COLORS } from '@/utils/constants';

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
        <div 
          className="absolute inset-0 bg-gradient-to-r from-dark-900/80 via-dark-900/40 to-transparent" 
          style={{ backgroundImage: `radial-gradient(circle at 30% 50%, rgba(27, 59, 47, 0.4) 0%, rgba(27, 59, 47, 0.6) 50%, rgba(27, 59, 47, 0.8) 100%)` }}
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
              {/* Top Badge */}
              <motion.div 
                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md"
                variants={fadeUpVariants}
              >
                <MapPin size={14} className="text-accent-500" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                  {isEs ? 'Hospital Veterinario · David, Chiriquí' : 'Veterinary Hospital · David, Chiriquí'}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="text-5xl sm:text-8xl font-display font-extrabold leading-tight text-white tracking-tight"
                variants={fadeUpVariants}
              >
                {isEs ? (
                  <>
                    Tu mascota merece<br />
                    atención veterinaria<br />
                    <span className="text-accent-500 italic font-serif">de excelencia</span>
                  </>
                ) : (
                  <>
                    Your pet deserves<br />
                    world-class<br />
                    <span className="text-accent-500 italic font-serif">veterinary care</span>
                  </>
                )}
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                className="text-xl text-gray-100 max-w-xl leading-relaxed font-light"
                variants={fadeUpVariants}
              >
                {t('subheadline')}
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                variants={fadeUpVariants}
              >
                <button className="btn-primary px-10 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-primary-500/20 transition-all">
                  {t('cta1')}
                </button>
                <a
                  href={BUSINESS_DATA.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
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
            <div className="glassmorphism p-6 sm:p-8 rounded-[2.5rem] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 shadow-2xl relative overflow-hidden group/stats">
              {/* Animated background glow that follows mouse or just pulses */}
              <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover/stats:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {stats.map((stat, i) => {
                const Icon = IconMap[stat.icon as keyof typeof IconMap];
                return (
                  <motion.div
                    key={stat.label}
                    className="flex flex-col items-center text-center group relative z-10"
                    variants={itemVariants}
                  >
                    <div className="relative">
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-primary-500/40 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-accent-500 group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-400 transition-all duration-500 shadow-inner relative z-10">
                        {Icon && <Icon size={24} strokeWidth={2} />}
                      </div>
                    </div>
                    <div className="text-2xl font-display font-black text-white mb-1 tracking-tight group-hover:text-primary-400 transition-colors">{stat.value}</div>
                    <div className="text-[9px] uppercase tracking-[0.2em] text-gray-300 font-bold leading-tight max-w-[120px]">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Status indicator floating below card */}
            <motion.div 
              className="mt-6 flex items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center gap-3">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-500"></span>
                </div>
                <p className="text-xs font-black text-accent-500 uppercase tracking-[0.25em] font-sans">
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

