'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, Trophy, Clock, Microscope, Handshake, Sprout, CheckCircle2 } from 'lucide-react';
import { ABOUT_COPY } from '@/utils/constants';
import { containerVariants, itemVariants } from '@/utils/animations';

const ValueIconMap = {
  '❤️': Heart,
  '🏆': Trophy,
  '🕐': Clock,
  '🔬': Microscope,
  '🤝': Handshake,
  '🌱': Sprout,
};

export default function About() {
  const t = useTranslations('about');
  const locale = useLocale();
  const isEs = locale === 'es';
  const content = isEs ? ABOUT_COPY.es : ABOUT_COPY.en;

  return (
    <section id="nosotros" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-700">
                  {t('badge')}
                </span>
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-dark-900 leading-tight tracking-tight">
                {isEs ? 'Más que una clínica,' : 'More than a clinic,'}<br />
                <span className="text-accent-500 italic font-serif">tu aliado de confianza.</span>
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              {content.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {content.values.slice(0, 4).map((value, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-500/20 flex items-center justify-center">
                    <CheckCircle2 size={12} className="text-accent-600" />
                  </div>
                  <span className="text-sm font-bold text-dark-900 uppercase tracking-wider">{value.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Grid — Interactive Cards with Brand Overlay */}
          <div className="grid grid-cols-2 gap-6 relative">
            {/* Main large image — landscape team photo */}
            <motion.div
              className="col-span-2 rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl relative aspect-[16/9] group cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <Image 
                src="/images/about/about-1.jpg" 
                alt="Equipo Vetechi" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-110" 
              />
              {/* Permanent Partial Green Overlay (Bottom 65%) */}
              <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#1B3B2F]/95 via-[#1B3B2F]/50 to-transparent z-10 pointer-events-none" />
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B2F]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[11] pointer-events-none" />
            </motion.div>

            {/* Secondary Card — ultrasound photo */}
            <motion.div
              className="rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl relative aspect-square group cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              initial={{ opacity: 0, x: -30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <Image 
                src="/images/about/about-2.jpg" 
                alt="Excelencia Clínica" 
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-110" 
              />
              {/* Permanent Partial Green Overlay (Bottom 65%) */}
              <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#1B3B2F]/95 via-[#1B3B2F]/50 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B2F]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[11] pointer-events-none" />
            </motion.div>

            {/* Tertiary Card — procedure photo */}
            <motion.div
              className="rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl relative aspect-square group cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              initial={{ opacity: 0, x: 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <Image 
                src="/images/about/about-3.jpg" 
                alt="Tecnología Moderna" 
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-110" 
              />
              {/* Permanent Partial Green Overlay (Bottom 65%) */}
              <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#1B3B2F]/95 via-[#1B3B2F]/50 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B2F]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[11] pointer-events-none" />
            </motion.div>

            {/* Decorative background glow */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
          </div>



        </div>

        {/* Extended Values Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-display font-bold text-dark-900 uppercase tracking-widest">{isEs ? 'Nuestros Pilares' : 'Our Pillars'}</h3>
            <div className="w-12 h-1 bg-accent-500 mx-auto mt-4 rounded-full" />
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {content.values.map((value) => {
              const Icon = ValueIconMap[value.icon as keyof typeof ValueIconMap] || Heart;
              return (
                <motion.div
                  key={value.title}
                  className="group p-8 rounded-3xl bg-dark-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-accent-500/20 transition-all duration-500"
                  variants={itemVariants}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-accent-500 group-hover:text-white transition-all duration-500">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-bold text-dark-900 mb-2 uppercase tracking-wider">{value.title}</h4>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{value.subtitle}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}