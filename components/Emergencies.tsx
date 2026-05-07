'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, AlertCircle, CheckCircle2 } from 'lucide-react';
import { BUSINESS_DATA, EMERGENCIES_COPY } from '@/utils/constants';
import { fadeUpVariants, containerVariants, itemVariants } from '@/utils/animations';

export default function Emergencies() {
  const t = useTranslations('emergencies');
  const locale = useLocale();
  const isEs = locale === 'es';
  const copy = isEs ? EMERGENCIES_COPY.es : EMERGENCIES_COPY.en;

  return (
    <section
      id="emergencias"
      className="relative py-32 bg-dark-900 overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-900/20 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[120px] -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            className="text-left space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20"
              variants={fadeUpVariants}
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </div>
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
                {t('online')}
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-6xl font-display font-extrabold text-white leading-tight"
              variants={fadeUpVariants}
            >
              {isEs ? (
                <>
                  ¿Una emergencia?<br />
                  <span className="text-accent-500 italic font-serif">Actúa ahora.</span>
                </>
              ) : (
                <>
                  An emergency?<br />
                  <span className="text-accent-500 italic font-serif">Act now.</span>
                </>
              )}
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 max-w-xl leading-relaxed font-light"
              variants={fadeUpVariants}
            >
              {t('description')}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={fadeUpVariants}
            >
              <a
                href={`tel:${BUSINESS_DATA.phone.replace(/\s+/g, '')}`}
                className="group flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-red-600 text-white font-bold text-lg hover:bg-red-700 transition-all hover:shadow-[0_15px_30px_rgba(220,38,38,0.3)] hover:-translate-y-1"
              >
                <Phone size={22} className="group-hover:rotate-12 transition-transform" />
                <span>{isEs ? 'Llamar Urgente' : 'Emergency Call'}</span>
              </a>
              <a
                href={`${BUSINESS_DATA.whatsapp}?text=${encodeURIComponent(isEs ? BUSINESS_DATA.whatsappMessages.emergency.es : BUSINESS_DATA.whatsappMessages.emergency.en)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all hover:-translate-y-1"
              >
                <MessageCircle size={22} className="text-green-500" />
                <span>WhatsApp</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Cases Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {copy.cases.map((emergencyCase) => (
              <motion.div
                key={emergencyCase}
                className="group p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/[0.08] transition-all"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle2 size={18} className="text-accent-500 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors leading-tight">
                    {emergencyCase}
                  </span>
                </div>
              </motion.div>
            ))}
            
            {/* Call to Action Card */}
            <motion.div
              className="sm:col-span-2 p-6 rounded-2xl bg-accent-500/10 border border-accent-500/20 mt-4 flex items-center gap-6"
              variants={itemVariants}
            >
              <div className="w-12 h-12 rounded-xl bg-accent-500 flex items-center justify-center text-dark-900">
                <AlertCircle size={24} />
              </div>
              <div>
                <p className="text-accent-500 font-bold uppercase tracking-widest text-[10px] mb-1">{isEs ? 'Prioridad Absoluta' : 'Absolute Priority'}</p>
                <p className="text-white font-medium text-sm leading-snug">
                  {isEs 
                    ? 'Atención inmediata garantizada. Contamos con quirófano y laboratorio 24/7.' 
                    : 'Immediate care guaranteed. We have operating rooms and labs available 24/7.'}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}