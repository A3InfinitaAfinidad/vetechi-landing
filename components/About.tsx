'use client';

import { ABOUT_COPY } from '@/utils/constants';
import { CheckCircle2, Clock, Handshake, Heart, Microscope, Sprout, Trophy } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Parallax3DImage from './Parallax3DImage';

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
          <div
            className="space-y-8"
          >
            <div className="space-y-4">
              <div 
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-900">
                  {t('badge')}
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-dark-900 leading-tight tracking-tight">
                {isEs ? 'Más que una clínica,' : 'More than a clinic,'}<br />
                <span className="text-accent-800 italic font-serif">tu aliado de confianza.</span>
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
          </div>

          {/* Visual Grid — Interactive Cards with Brand Overlay */}
          <div className="grid grid-cols-2 gap-6 relative">
            {/* Main large image — landscape team photo */}
            <div className="col-span-2 card-glassmorphism group">
              <div
                className="relative h-full w-full"
              >
                <Parallax3DImage intensity={15} scale={1.05}>
                  <div className="image-overlay-premium relative h-full aspect-[16/9]">
                    <Image
                      src="/images/optimized/about/about-1-card.webp"
                      alt="Equipo médico veterinario de VETECHI - Profesionales especializados"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-115"
                    />
                  </div>
                </Parallax3DImage>
              </div>
            </div>

            {/* Secondary Card — ultrasound photo */}
            <div className="card-glassmorphism group">
              <div
                className="relative h-full w-full"
              >
                <Parallax3DImage intensity={15} scale={1.05}>
                  <div className="image-overlay-premium relative h-full aspect-square">
                    <Image
                      src="/images/optimized/about/about-2-card.webp"
                      alt="Procedimiento médico - Ecografía veterinaria en VETECHI"
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-115"
                    />
                  </div>
                </Parallax3DImage>
              </div>
            </div>

            {/* Tertiary Card — procedure photo */}
            <div className="card-glassmorphism group">
              <div
                className="relative h-full w-full"
              >
                <Parallax3DImage intensity={15} scale={1.05}>
                  <div className="image-overlay-premium relative h-full aspect-square">
                    <Image
                      src="/images/optimized/about/about-3-card.webp"
                      alt="Tecnología moderna - Equipamiento especializado de VETECHI Hospital"
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-115"
                    />
                  </div>
                </Parallax3DImage>
              </div>
            </div>

            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
          </div>

        </div>

        {/* Extended Values Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-display font-bold text-dark-900 uppercase tracking-widest">{isEs ? 'Nuestros Pilares' : 'Our Pillars'}</h3>
            <div className="w-12 h-1 bg-accent-500 mx-auto mt-4 rounded-full" />
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {content.values.map((value) => {
              const Icon = ValueIconMap[value.icon as keyof typeof ValueIconMap] || Heart;
              return (
                <div
                  key={value.title}
                  className="info-container-gradient group p-8 hover:bg-white hover:shadow-2xl"
                >
                  <div className="icon-container-premium mb-6 group-hover:bg-accent-500 group-hover:text-white">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-bold text-dark-900 mb-2 uppercase tracking-wider">{value.title}</h4>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{value.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
