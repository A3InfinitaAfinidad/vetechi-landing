'use client';

import { BUSINESS_DATA } from '@/utils/constants';
import { Activity, ArrowRight, Bed, Bell, Bird, Eye, FlaskConical, Heart, Stethoscope, Syringe } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import PremiumServiceContainer from './PremiumServiceContainer';

const SERVICES_CONFIG = [
  { id: 'consulta', icon: Stethoscope },
  { id: 'emergencia', icon: Bell },
  { id: 'cirugia', icon: Activity },
  { id: 'hospitalizacion', icon: Bed },
  { id: 'laboratorio', icon: FlaskConical },
  { id: 'vacunacion', icon: Syringe },
  { id: 'cardiologia', icon: Heart },
  { id: 'exoticos', icon: Bird },
  { id: 'endoscopia', icon: Eye },
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
        <div
          className="text-center mb-24"
        >
          <div 
            className="inline-block px-4 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 mb-6"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-900">
              {isEs ? 'Especialidades Médicas' : 'Medical Specialties'}
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold mb-6 leading-tight text-dark-900 tracking-tight">
            {isEs ? 'Excelencia en cada' : 'Excellence in every'}<br />
            <span className="text-primary-700 italic font-serif serif-italic">{isEs ? 'detalle clínico' : 'clinical detail'}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {SERVICES_CONFIG.map((service) => {
            const Icon = service.icon;
            const isEmergency = service.id === 'emergencia';
            
            return (
              <div
                key={service.id}
              >
                <PremiumServiceContainer isEmergency={isEmergency} className="p-8 h-full">
                  {/* Icon Container */}
                  <div className="icon-container-premium mb-8 group-hover:bg-accent-500">
                    <Icon size={32} strokeWidth={1.5} className="transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className={`text-2xl font-display font-bold leading-tight ${
                      isEmergency ? 'text-white' : 'text-dark-900'
                    }`}>
                      {t(`items.${service.id}`).split(' ')[0]}
                    </h3>
                    
                    <p className={`text-base leading-relaxed font-light ${
                      isEmergency ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {t(`items.${service.id}`)}
                    </p>
                    
                    {/* Learn More link with Shine */}
                    <a 
                      href={`${BUSINESS_DATA.whatsapp}?text=${encodeURIComponent(isEs ? `Hola Vetechi, me gustaría recibir más información sobre el servicio de ${t(`items.${service.id}`)}` : `Hello Vetechi, I'd like more information about the service: ${t(`items.${service.id}`)}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn-shine inline-flex items-center gap-2 mt-6 px-6 py-3 min-h-[48px] rounded-lg font-bold uppercase tracking-wider text-sm ${
                        isEmergency ? 'text-accent-500 border border-accent-500' : 'text-white'
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
                      <span className="text-[10px] font-bold text-red-200 uppercase tracking-widest">24/7</span>
                    </div>
                  )}
                </PremiumServiceContainer>
              </div>
            );
          })}
        </div>

        {/* View All Services CTA */}
        <div
          className="mt-16 flex justify-center"
        >
          <a
            href={`${BUSINESS_DATA.whatsapp}?text=${encodeURIComponent(isEs ? 'Hola VETECHI, me gustaría conocer todos sus servicios.' : 'Hello VETECHI, I would like to know all your services.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-8 py-4 flex items-center gap-3 text-lg group"
          >
            <span>{isEs ? 'Ver todos los servicios' : 'View all services'}</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

