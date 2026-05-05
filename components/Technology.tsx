'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { TECHNOLOGY } from '@/utils/constants';
import { containerVariants, itemVariants } from '@/utils/animations';

export default function Technology() {
  const locale = useLocale();
  const isEs = locale === 'es';
  const techs = isEs ? TECHNOLOGY.es : TECHNOLOGY.en;

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
          {techs.map((tech, i) => (
            <motion.div
              key={tech.title}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all border border-gray-200"
              variants={itemVariants}
              whileHover={{ y: -3 }}
            >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="text-base font-subtitle font-bold text-dark-900 mb-2">
                {tech.title}
              </h3>
              <p className="text-sm text-text leading-relaxed mb-4">
                {tech.description}
              </p>
              {/* Progress Bar - Green to Accent */}
              <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-600 to-accent-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className="btn-primary px-8 py-3">
            {ctaText}
          </button>
        </motion.div>
      </div>
    </section>
  );
}