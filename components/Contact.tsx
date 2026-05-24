'use client';

import { BUSINESS_DATA, CONTACT_COPY } from '@/utils/constants';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import { validateContactForm, isValidWhatsAppUrl, sanitizeWhatsAppText } from '@/utils/validation';

export default function Contact() {
  const locale = useLocale();
  const isEs = locale === 'es';
  const contactCopy = isEs ? CONTACT_COPY.es : CONTACT_COPY.en;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    petName: '',
    species: '',
    date: '',
    time: '',
    reason: '',
    language: locale,
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formErrors, setFormErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
      return;
    }
    
    setFormStatus('sending');
    setFormErrors([]);
    
    // Validate WhatsApp URL
    if (!isValidWhatsAppUrl(BUSINESS_DATA.whatsapp)) {
      console.error('[Contact] Invalid WhatsApp URL');
      setFormErrors([isEs ? 'Error de configuración' : 'Configuration error']);
      setFormStatus('error');
      return;
    }
    
    // Build WhatsApp Message
    const text = isEs 
      ? `Hola VETECHI. Soy ${sanitizeWhatsAppText(formData.name)} y escribo por mi mascota ${sanitizeWhatsAppText(formData.petName || 'mi compañero')} (${sanitizeWhatsAppText(formData.species || 'No especificado')}).\n\n🗓️ Preferencia: ${formData.date || 'Lo antes posible'} a las ${formData.time || 'N/A'}\n\nMotivo: ${sanitizeWhatsAppText(formData.reason || 'Consulta general')}`
      : `Hello VETECHI. I am ${sanitizeWhatsAppText(formData.name)} and I am writing about my pet ${sanitizeWhatsAppText(formData.petName || 'my companion')} (${sanitizeWhatsAppText(formData.species || 'Not specified')}).\n\n🗓️ Preference: ${formData.date || 'As soon as possible'} at ${formData.time || 'N/A'}\n\nReason: ${sanitizeWhatsAppText(formData.reason || 'General inquiry')}`;
      
    const whatsappUrl = `${BUSINESS_DATA.whatsapp}?text=${encodeURIComponent(text)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setFormStatus('success');
      setFormData({ name: '', phone: '', petName: '', species: '', date: '', time: '', reason: '', language: locale });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 800);
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-accent-500"></div>
            <p className="font-subtitle font-bold text-accent-900 uppercase text-sm">
              {isEs ? 'Contacto' : 'Contact'}
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-dark-900 mb-3">
            {isEs ? '¿Listo para cuidar a tu mascota?' : 'Ready to Care for Your Pet?'}
          </h2>
          <p className="text-lg text-text">
            {contactCopy.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div
            className="space-y-6"
          >
            {/* Address */}
            <div
              className="flex gap-4"
            >
              <div className="text-primary-800 flex-shrink-0 mt-1">
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
                  className="text-primary-800 font-subtitle hover:underline text-sm mt-2 inline-block"
                >
                  {isEs ? 'Ver en Google Maps' : 'View on Google Maps'} →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div
              className="flex gap-4"
            >
              <div className="text-primary-800 flex-shrink-0 mt-1">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-subtitle font-bold text-dark-900 mb-2">
                  {isEs ? 'Teléfono' : 'Phone'}
                </h3>
                <a
                  href={`tel:${BUSINESS_DATA.phone.replace(/\s+/g, '')}`}
                  className="text-text hover:text-primary-800 transition-colors font-semibold"
                >
                  {BUSINESS_DATA.phone}
                </a>
                <p className="text-xs text-gray-500 mt-1">WhatsApp</p>
              </div>
            </div>

            {/* Hours */}
            <div
              className="flex gap-4"
            >
              <div className="text-primary-800 flex-shrink-0 mt-1">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-subtitle font-bold text-dark-900 mb-2">
                  {isEs ? 'Horario' : 'Hours'}
                </h3>
                <p className="text-text">{isEs ? BUSINESS_DATA.hours.es : BUSINESS_DATA.hours.en}</p>
                <p className="text-xs text-primary-800 font-bold mt-1">
                  {isEs ? BUSINESS_DATA.emergencies.es : BUSINESS_DATA.emergencies.en}
                </p>
              </div>
            </div>

            {/* Email */}
            <div
              className="flex gap-4"
            >
              <div className="text-primary-800 flex-shrink-0 mt-1">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-subtitle font-bold text-dark-900 mb-2">
                  {isEs ? 'Email' : 'Email'}
                </h3>
                <a
                  href={`mailto:${BUSINESS_DATA.email}`}
                  className="text-text hover:text-primary-800 transition-colors"
                >
                  {BUSINESS_DATA.email}
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {formStatus === 'success' ? (
            <div
              className="bg-green-50 p-8 rounded-lg border border-green-200 flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-green-800">
                {isEs ? '¡Mensaje Enviado!' : 'Message Sent!'}
              </h3>
              <p className="text-green-700">
                {isEs ? 'Gracias por contactarnos, pronto nos comunicaremos contigo.' : 'Thank you for contacting us, we will get back to you shortly.'}
              </p>
              <button
                onClick={() => {
                  setFormStatus('idle');
                  setFormData({ ...formData, name: '', phone: '', petName: '', species: '', date: '', time: '', reason: '' });
                }}
                className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                {isEs ? 'Enviar otro mensaje' : 'Send another message'}
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 p-8 rounded-lg border border-gray-200 space-y-4"
            >
              {/* Error Messages */}
              {formStatus === 'error' && formErrors.length > 0 && (
                <div
                  className="bg-red-50 p-4 rounded-lg border border-red-200 space-y-2"
                >
                  {formErrors.map((error, idx) => (
                    <p key={idx} className="text-red-700 text-sm font-semibold">
                      • {error}
                    </p>
                  ))}
                </div>
              )}
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-sm font-subtitle font-bold text-dark-900 mb-2">
                  {contactCopy.form.name} *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  className="w-full px-4 py-3 min-h-[48px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={formStatus === 'sending'}
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-subtitle font-bold text-dark-900 mb-2">
                  {contactCopy.form.phone} *
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  className="w-full px-4 py-3 min-h-[48px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  disabled={formStatus === 'sending'}
                />
              </div>

              {/* Pet Name */}
              <div>
                <label htmlFor="contact-petName" className="block text-sm font-subtitle font-bold text-dark-900 mb-2">
                  {contactCopy.form.petName}
                </label>
                <input
                  id="contact-petName"
                  type="text"
                  className="w-full px-4 py-3 min-h-[48px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  value={formData.petName}
                  onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                  disabled={formStatus === 'sending'}
                />
              </div>

              {/* Species */}
              <div>
                <label htmlFor="contact-species" className="block text-sm font-subtitle font-bold text-dark-900 mb-2">
                  {contactCopy.form.species}
                </label>
                <select
                  id="contact-species"
                  className="w-full px-4 py-3 min-h-[48px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  value={formData.species}
                  onChange={(e) => setFormData({ ...formData, species: e.target.value })}
                  disabled={formStatus === 'sending'}
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

              {/* Date & Time Preferences */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-date" className="block text-sm font-subtitle font-bold text-dark-900 mb-2">
                    {isEs ? 'Fecha Deseada' : 'Preferred Date'}
                  </label>
                  <input
                    id="contact-date"
                    type="date"
                    className="w-full px-4 py-3 min-h-[48px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    disabled={formStatus === 'sending'}
                  />
                </div>
                <div>
                  <label htmlFor="contact-time" className="block text-sm font-subtitle font-bold text-dark-900 mb-2">
                    {isEs ? 'Hora (Aprox)' : 'Time (Approx)'}
                  </label>
                  <input
                    id="contact-time"
                    type="time"
                    className="w-full px-4 py-3 min-h-[48px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    disabled={formStatus === 'sending'}
                  />
                </div>
              </div>

              {/* Reason */}
              <div>
                <label htmlFor="contact-reason" className="block text-sm font-subtitle font-bold text-dark-900 mb-2">
                  {contactCopy.form.reason}
                </label>
                <textarea
                  id="contact-reason"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent h-24 resize-none"
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  disabled={formStatus === 'sending'}
                />
              </div>

              {/* Language */}
              <div>
                <label htmlFor="contact-language" className="block text-sm font-subtitle font-bold text-dark-900 mb-2">
                  {contactCopy.form.language}
                </label>
                <select
                  id="contact-language"
                  className="w-full px-4 py-3 min-h-[48px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  value={formData.language}
                  onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                  disabled={formStatus === 'sending'}
                >
                  <option value="es">{isEs ? 'Español' : 'Spanish'}</option>
                  <option value="en">{isEs ? 'Inglés' : 'English'}</option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary w-full py-3 font-bold text-lg mt-6 disabled:opacity-70 flex justify-center items-center"
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? (
                  <svg aria-hidden="true" className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                {contactCopy.form.submit}
              </button>

              {/* Social Proof */}
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-600 font-medium">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} aria-hidden="true" className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span>{isEs ? 'Únete a más de 500 clientes satisfechos' : 'Join over 500 happy clients'}</span>
              </div>
            </form>
          )}
        </div>

        {/* Interactive Google Maps Embed */}
        <div
          className="relative overflow-hidden rounded-[24px] transition-all duration-700 ease-in-out group shadow-xl bg-[#E8EDE9] h-[450px]"
        >
          {/* Fondo vectorial minimalista con líneas blancas finas */}
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/optimized/map-bg.webp" 
            alt="Ubicación aproximada en el mapa" 
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out"
          />

          {/* Overlay con gradiente institucional */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B3B2F] to-[#C5A77A] opacity-35 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center z-10 pointer-events-none">
            {/* Pin Dorado con Latido */}
            <div className="latido group-hover:[animation-duration:1s] text-[#C5A77A] bg-white rounded-full p-4 shadow-[0_0_20px_rgba(197,167,122,0.5)] flex items-center justify-center mb-8 pointer-events-auto">
              <MapPin size={48} strokeWidth={2.5} />
            </div>
            
            {/* Glass Button */}
            <a
              href={BUSINESS_DATA.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto bg-white/20 backdrop-blur-md border border-white/40 text-[#1B3B2F] font-bold tracking-wide text-center py-4 px-10 rounded-2xl w-[85%] max-w-sm transition-all duration-300 hover:bg-white/40 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(27,59,47,0.2)] shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
            >
              {isEs ? 'ABRIR EN GOOGLE MAPS' : 'OPEN IN GOOGLE MAPS'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
