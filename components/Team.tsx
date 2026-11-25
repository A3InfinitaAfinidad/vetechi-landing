'use client';

import { TEAM, VISITING_SPECIALISTS } from '@/utils/constants';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import Image from 'next/image';

export default function Team() {
  const locale = useLocale();
  const isEs = locale === 'es';

  // Mapeo de nombres a archivos de imagen
  const teamImageMap: { [key: string]: string } = {
    'Dr. Harmodio Arcia': '/images/optimized/team/harmodio-arcia.webp',
    'Dra. Kate Hernández': '/images/optimized/team/kate-hernandez.webp',
    'Dra. Arantxa Santamaría': '/images/optimized/team/arantxa-santamaria.webp',
    'Dr. Juan José Gallardo': '/images/optimized/team/juan-jose-gallardo.webp',
  };

  return (
    <section id="equipo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-accent-500"></div>
            <p className="font-subtitle font-bold text-accent-900 uppercase text-sm">
              {isEs ? 'Nuestro Equipo' : 'Our Team'}
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-dark-900 mb-3">
            {isEs ? 'Nuestro Equipo Médico' : 'Our Medical Team'}
          </h2>
          <p className="text-lg text-text">
            {isEs ? 'Especialistas apasionados por tu mascota' : 'Specialists passionate about your pet'}
          </p>
        </div>
        
        {/* Main Team - Flip Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {TEAM.map((member) => (
            <TeamMemberCard 
              key={member.name}
              member={member} 
              teamImageMap={teamImageMap} 
              isEs={isEs} 
            />
          ))}
        </div>

        {/* Visiting Specialists */}
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-subtitle font-bold text-dark-900 mb-8 text-center">
            {isEs ? 'Especialistas Visitantes' : 'Visiting Specialists'}
          </h3>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {VISITING_SPECIALISTS.map((specialist) => (
              <div
                key={specialist.name}
                className="bg-white p-6 rounded-lg text-center border border-gray-100"
              >
                <p className="font-subtitle font-bold text-dark-900">{specialist.name}</p>
                <p className="text-sm text-primary-800 mt-1">
                  {isEs ? specialist.specialtyEs : specialist.specialtyEn}
                </p>
                <p className="text-xs text-gray-500 mt-3">
                  {isEs ? 'Jornadas programadas' : 'By appointment'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({ member, teamImageMap, isEs }: { member: typeof TEAM[number], teamImageMap: Record<string, string>, isEs: boolean }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="card-glassmorphism"
    >
      <div 
        className={`flip-card aspect-[3/4] cursor-pointer ${isFlipped ? 'flipped' : ''}`}
        tabIndex={0}
        onClick={() => setIsFlipped(!isFlipped)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsFlipped(!isFlipped);
          }
        }}
      >
        <div className="flip-card-inner">
          {/* ===== FRONT ===== */}
          <div className="flip-card-front rounded-[2rem] overflow-hidden shadow-xl border border-gray-100">
            {teamImageMap[member.name] ? (
              <Image
                src={teamImageMap[member.name]}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
                style={{ objectPosition: 'center 10%' }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-5xl">
                👨‍⚕️
              </div>
            )}

            {/* Permanent Partial Green Overlay (Bottom 65%) */}
            <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#1B3B2F]/95 via-[#1B3B2F]/40 to-transparent z-10 pointer-events-none" />

            {/* Front Text */}
            <div className="absolute inset-x-0 bottom-0 p-6 z-20">
              <h3 className="text-xl font-display font-bold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-accent-500 font-bold uppercase tracking-[0.2em]">
                {isEs ? member.specialtyEs : member.specialtyEn}
              </p>
            </div>
          </div>

          {/* ===== BACK ===== */}
          <div className="flip-card-back rounded-[2rem] overflow-hidden shadow-2xl border-2 border-accent-500/30 bg-[#1B3B2F] p-8 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
                <span className="text-[9px] font-bold text-accent-100 uppercase tracking-[0.3em]">
                  {isEs ? 'Ficha Profesional' : 'Professional Profile'}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-white leading-tight">
                  {member.name}
                </h3>
                <p className="text-sm text-accent-100 font-bold uppercase tracking-wider mt-2">
                  {isEs ? member.specialtyEs : member.specialtyEn}
                </p>
              </div>

              <div className="pt-4 border-t border-white/15">
                <p className="text-white/80 italic text-sm leading-relaxed">
                  &ldquo;{member.quote}&rdquo;
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <div className="w-2 h-2 rounded-full bg-[#C5A77A]" />
              <p className="text-[11px] text-white/70 uppercase tracking-widest font-bold">
                {member.experience} {isEs ? 'DE TRAYECTORIA' : 'EXPERIENCE'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
