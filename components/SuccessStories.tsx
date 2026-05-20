'use client';

import { containerVariants, fadeUpVariants } from '@/utils/animations';
import { COLORS, SUCCESS_STORIES_DATA } from '@/utils/constants';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

export default function SuccessStories() {
  const t = useTranslations('successStories');
  const locale = useLocale();
  const isEs = locale === 'es';

  return (
    <section id="exito" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4"
            style={{ color: COLORS.dark }}
            variants={fadeUpVariants}
          >
            {t('title')}
          </motion.h2>
          <motion.div
            className="w-20 h-1 mx-auto mb-6 rounded-full"
            style={{ backgroundColor: COLORS.accent }}
            variants={fadeUpVariants}
          />
          <motion.p
            className="text-lg text-text max-w-2xl mx-auto"
            variants={fadeUpVariants}
          >
            {t('subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SUCCESS_STORIES_DATA.map((story, index) => (
            <motion.div
              key={story.id}
              className="card-glassmorphism group overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              custom={index}
            >
              {/* Image Container */}
              <div className="image-overlay-premium h-64 relative">
                <Image
                  src={story.image}
                  alt={`Caso de éxito - Paciente feliz atendido en VETECHI Hospital - ${t(`${story.id}.title`)}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Tag */}
                <div 
                  className="absolute top-4 left-4 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg"
                  style={{ backgroundColor: COLORS.accent }}
                >
                  {isEs ? story.tagEs : story.tagEn}
                </div>
              </div>

              {/* Content */}
              <div className="info-container-gradient p-8 m-4">
                <h3 
                  className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors"
                  style={{ color: COLORS.dark }}
                >
                  {t(`${story.id}.title`)}
                </h3>
                <p className="text-text text-sm leading-relaxed mb-6 opacity-80">
                  {t(`${story.id}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
