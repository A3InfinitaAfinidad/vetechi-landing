'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Microscope, HeartPulse, Scan, Activity, Eye, Stethoscope, Zap, ClipboardList } from 'lucide-react';
import { TECHNOLOGY } from '@/utils/constants';
import { containerVariants, itemVariants } from '@/utils/animations';

const iconMap: Record<string, React.ElementType> = {
  Microscope,
  HeartPulse,
  Scan,
  Activity,
  Eye,
  Stethoscope,
  Zap,
  ClipboardList,
};

export default function Technology() {
  const locale = useLocale();
  const isEs = locale === 'es';
  const techs = isEs ? TECHNOLOGY.es : TECHNOLOGY.en;
  const progressValues = [98, 92, 96, 90, 95, 99, 94, 97];

  const title = isEs ? 'Equipamiento de hospital. Resultados clínicos.' : 'Hospital-grade Equipment. Clinical Results.';
  const subtitle = isEs
    ? 'Tecnología que iguala los estándares internacionales — para diagnósticos precisos y cirugías seguras.'
    : 'Technology matching international standards — for precise diagnostics and safe surgeries.';
  const ctaText = isEs ? 'Conocer más' : 'Learn more';

  return (
    <section id="tecnologia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-accent-500"></div>
            <p className="font-subtitle font-bold text-accent-600 uppercase text-sm">
              {isEs ? 'Tecnología y Diagnóstico' : 'Technology & Diagnostics'}
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-dark-900 mb-3">
            {title}
          </h2>
          <p className="text-lg text-text max-w-2xl">
            {subtitle}
          </p>
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techs.map((tech, i) => {
            const IconComponent = iconMap[tech.icon];
            const value = progressValues[i % progressValues.length];
            return (
              <motion.div
                key={tech.title}
                className="bg-primary-50/40 p-6 rounded-2xl hover:shadow-xl transition-all duration-500 border border-primary-100 hover:border-primary-200 group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4 text-primary-600 transition-transform duration-500 group-hover:scale-110">
                  {IconComponent && <IconComponent size={36} strokeWidth={1.5} />}
                </div>
                <h3 className="text-base font-subtitle font-bold text-dark-900 mb-2">
                  {tech.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {tech.description}
                </p>
                {/* Progress Bar - Variable values */}
                <div className="flex justify-between text-xs font-bold text-primary-700 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>{isEs ? 'Precisión' : 'Precision'}</span>
                  <span>{value}%</span>
                </div>
                <div className="w-full h-1.5 bg-primary-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary-600 to-accent-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${value}%` }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}