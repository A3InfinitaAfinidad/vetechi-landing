'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Stethoscope, Bell, Activity, FlaskConical, Heart, Bird, ArrowRight } from 'lucide-react';
import { containerVariants, itemVariants } from '@/utils/animations';
import { COLORS, BUSINESS_DATA } from '@/utils/constants';

const SERVICES_CONFIG = [
  { id: 'consulta', icon: Stethoscope },
  { id: 'emergencia', icon: Bell },
  { id: 'cirugia', icon: Activity },
  { id: 'laboratorio', icon: FlaskConical },
  { id: 'cardiologia', icon: Heart },
  { id: 'exoticos', icon: Bird },
];

export default function Services() {
  const t = useTranslations('services');
  const locale = useLocale();
  const isEs = locale === 'es';

  return (
    <section id="servicios" className="py-32 bg-dark-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-block px-4 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-600">
              {isEs ? 'Especialidades Médicas' : 'Medical Specialties'}
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold mb-6 leading-tight text-dark-900 tracking-tight">
            {isEs ? 'Excelencia en cada' : 'Excellence in every'}<br />
            <span className="text-primary-700 italic font-serif serif-italic">{isEs ? 'detalle clínico' : 'clinical detail'}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SERVICES_CONFIG.map((service, index) => {
            const Icon = service.icon;
            const isEmergency = service.id === 'emergencia';
            
            return (
              <motion.div
                key={service.id}
                className={`group relative p-8 rounded-[2rem] transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl ${
                  isEmergency
                    ? 'bg-dark-900 border border-white/10'
                    : 'bg-white border border-gray-100 hover:border-accent-500/30'
                }`}
                variants={itemVariants}
                whileHover={{ y: -12 }}
              >
                {/* Icon Container */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${
                    isEmergency 
                      ? 'bg-accent-500/20 text-accent-500 group-hover:bg-accent-500 group-hover:text-white' 
                      : 'bg-accent-500/10 text-accent-500 group-hover:bg-accent-500 group-hover:text-white'
                  }`}
                >
                  <Icon size={32} strokeWidth={1.5} className="transition-transform duration-500 group-hover:scale-110" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className={`text-2xl font-display font-bold leading-tight ${
                    isEmergency ? 'text-white' : 'text-dark-900'
                  }`}>
                    {isEs 
                      ? t(`items.${service.id}`).split(' ')[0] + ' ' + (t(`items.${service.id}`).split(' ')[1] || '')
                      : t(`items.${service.id}`).split(' ')[0] + ' ' + (t(`items.${service.id}`).split(' ')[1] || '')
                    }
                    {/* Note: I'm just making the title look more prominent by using the translation directly or a simplified version */}
                    {isEs && service.id === 'emergencia' ? 'Emergencias 24/7' : ''}
                    {isEs && service.id === 'consulta' ? 'Consulta Médica' : ''}
                  </h3>
                  
                  {/* I'll use the translation for the full text but style it */}
                  <p className={`text-base leading-relaxed font-light ${
                    isEmergency ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {t(`items.${service.id}`)}
                  </p>
                  
                  {/* Learn More link */}
                  <a 
                    href={`${BUSINESS_DATA.whatsapp}?text=${encodeURIComponent(isEs ? `Hola Vetechi, me gustaría recibir más información sobre el servicio de ${t(`items.${service.id}`)}` : `Hello Vetechi, I'd like more information about the service: ${t(`items.${service.id}`)}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 pt-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:opacity-80 ${
                      isEmergency ? 'text-accent-500' : 'text-primary-700'
                    }`}
                  >
                    <span>{isEs ? 'Saber más' : 'Learn more'}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </a>

                </div>

                {/* Emergency Tag */}
                {isEmergency && (
                  <div className="absolute top-8 right-8 flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest tracking-widest">24/7</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
