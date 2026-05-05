'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { BUSINESS_DATA, CONTACT_COPY } from '@/utils/constants';
import { containerVariants, itemVariants } from '@/utils/animations';

export default function Contact() {
  const locale = useLocale();
  const isEs = locale === 'es';
  const contactCopy = isEs ? CONTACT_COPY.es : CONTACT_COPY.en;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    petName: '',
    species: '',
    reason: '',
    language: locale,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contacto" className="py-20 bg-white">
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
              {isEs ? 'Contacto' : 'Contact'}
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-dark-900 mb-3">
            {isEs ? '¿Listo para cuidar a tu mascota?' : 'Ready to Care for Your Pet?'}
          </h2>
          <p className="text-lg text-text">
            {contactCopy.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Address */}
            <motion.div
              className="flex gap-4"
              variants={itemVariants}
            >
              <div className="text-primary-600 flex-shrink-0 mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-subtitle font-bold text-dark-900 mb-2">
                  {isEs ? 'Ubicación' : 'Location'}
                </h3>
                <p className="text-text">
                  {isEs ? BUSINESS_DATA.address.es : BUSINESS_DATA.address.en}
                </p>
                <a
                  href={BUSINESS_DATA.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 font-subtitle hover:underline text-sm mt-2 inline-block"
                >
                  {isEs ? 'Ver en Google Maps' : 'View on Google Maps'} →
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="flex gap-4"
              variants={itemVariants}
            >
              <div className="text-primary-600 flex-shrink-0 mt-1">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-subtitle font-bold text-dark-900 mb-2">
                  {isEs ? 'Teléfono' : 'Phone'}
                </h3>
                <a
                  href={`tel:${BUSINESS_DATA.phone}`}
                  className="text-text hover:text-primary-600 transition-colors font-semibold"
                >
                  {BUSINESS_DATA.phone}
                </a>
                <p className="text-xs text-gray-500 mt-1">WhatsApp</p>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              className="flex gap-4"
              variants={itemVariants}
            >
              <div className="text-primary-600 flex-shrink-0 mt-1">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-subtitle font-bold text-dark-900 mb-2">
                  {isEs ? 'Horario' : 'Hours'}
                </h3>
                <p className="text-text">{isEs ? BUSINESS_DATA.hours.es : BUSINESS_DATA.hours.en}</p>
                <p className="text-xs text-primary-600 font-bold mt-1">
                  {isEs ? BUSINESS_DATA.emergencies.es : BUSINESS_DATA.emergencies.en}
                </p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              className="flex gap-4"
              variants={itemVariants}
            >
              <div className="text-primary-600 flex-shrink-0 mt-1">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-subtitle font-bold text-dark-900 mb-2">
                  {isEs ? 'Email' : 'Email'}
                </h3>
                <a
                  href={`mailto:${BUSINESS_DATA.email}`}
                  className="text-text hover:text-primary-600 transition-colors"
                >
                  {BUSINESS_DATA.email}
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-lg border border-gray-200 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-subtitle font-bold text-dark-900 mb-2">
                {contactCopy.form.name} *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-subtitle font-bold text-dark-900 mb-2">
                {contactCopy.form.phone} *
              </label>
              <input
                type="tel"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            {/* Pet Name */}
            <div>
              <label className="block text-sm font-subtitle font-bold text-dark-900 mb-2">
                {contactCopy.form.petName}
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                value={formData.petName}
                onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
              />
            </div>

            {/* Species */}
            <div>
              <label className="block text-sm font-subtitle font-bold text-dark-900 mb-2">
                {contactCopy.form.species}
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                value={formData.species}
                onChange={(e) => setFormData({ ...formData, species: e.target.value })}
              >
                <option value="">-- {isEs ? 'Selecciona' : 'Select'} --</option>
                <option value="Perro">{isEs ? 'Perro' : 'Dog'}</option>
                <option value="Gato">{isEs ? 'Gato' : 'Cat'}</option>
                <option value="Conejo">{isEs ? 'Conejo' : 'Rabbit'}</option>
                <option value="Pájaro">{isEs ? 'Pájaro' : 'Bird'}</option>
                <option value="Reptil">{isEs ? 'Reptil' : 'Reptile'}</option>
                <option value="Otro">{isEs ? 'Otro' : 'Other'}</option>
              </select>
            </div>

            {/* Reason */}
            <div>
              <label className="block text-sm font-subtitle font-bold text-dark-900 mb-2">
                {contactCopy.form.reason}
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent h-24 resize-none"
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              />
            </div>

            {/* Language */}
            <div>
              <label className="block text-sm font-subtitle font-bold text-dark-900 mb-2">
                {contactCopy.form.language}
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                value={formData.language}
                onChange={(e) => setFormData({ ...formData, language: e.target.value })}
              >
                <option value="es">{isEs ? 'Español' : 'Spanish'}</option>
                <option value="en">{isEs ? 'Inglés' : 'English'}</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-primary w-full py-3 font-bold text-lg mt-6"
            >
              {contactCopy.form.submit}
            </button>
          </motion.form>
        </div>

        {/* Google Maps Embed */}
        <motion.div
          className="rounded-lg overflow-hidden shadow-md border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.0548563946326!2d-82.4433!3d8.7532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s${encodeURIComponent(BUSINESS_DATA.address.en)}!2sVETECHI!5e0!3m2!1ses!2spa!4v1234567890`}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}