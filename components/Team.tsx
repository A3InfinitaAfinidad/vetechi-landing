'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TEAM, VISITING_SPECIALISTS } from '@/utils/constants';
import { containerVariants, itemVariants } from '@/utils/animations';

export default function Team() {
  const locale = useLocale();
  const isEs = locale === 'es';

  // Mapeo de nombres a archivos de imagen
  const teamImageMap: { [key: string]: string } = {
    'Dr. Harmodio Arcia': '/images/team/harmodio-arcia.jpg',
    'Dra. Kate Hernández': '/images/team/kate-hernandez.jpg',
    'Dra. Arantxa Santamaría': '/images/team/arantxa-santamaria.jpg',
    'Dr. Juan José Gallardo': '/images/team/juan-jose-gallardo.jpg',
  };

  return (
    <section id="equipo" className="py-20 bg-white">
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
              {isEs ? 'Nuestro Equipo' : 'Our Team'}
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-dark-900 mb-3">
            {isEs ? 'Nuestro Equipo Médico' : 'Our Medical Team'}
          </h2>
          <p className="text-lg text-text">
            {isEs ? 'Especialistas apasionados por tu mascota' : 'Specialists passionate about your pet'}
          </p>
        </motion.div>

        {/* Main Team */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {TEAM.map((member) => (
            <motion.div
              key={member.name}
              className="text-center group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Avatar */}
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-all border-4 border-primary-100">
                {teamImageMap[member.name] ? (
                  <Image
                    src={teamImageMap[member.name]}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-5xl">
                    👨‍⚕️
                  </div>
                )}
              </div>

              {/* Info */}
              <h3 className="text-lg font-subtitle font-bold text-dark-900 mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-subtitle text-primary-600 mb-2">
                {isEs ? member.specialtyEs : member.specialtyEn}
              </p>
              <p className="text-xs text-gray-500 mb-3">{member.experience}</p>
              <p className="text-sm italic text-gray-600 border-t border-gray-200 pt-3">
                "{member.quote}"
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Visiting Specialists */}
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-subtitle font-bold text-dark-900 mb-8 text-center">
            {isEs ? 'Especialistas Visitantes' : 'Visiting Specialists'}
          </h3>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {VISITING_SPECIALISTS.map((specialist) => (
              <motion.div
                key={specialist.name}
                className="bg-white p-6 rounded-lg text-center border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -3 }}
              >
                <p className="font-subtitle font-bold text-dark-900">{specialist.name}</p>
                <p className="text-sm text-primary-600 mt-1">
                  {isEs ? specialist.specialtyEs : specialist.specialtyEn}
                </p>
                <p className="text-xs text-gray-500 mt-3">
                  {isEs ? 'Jornadas programadas' : 'By appointment'}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
