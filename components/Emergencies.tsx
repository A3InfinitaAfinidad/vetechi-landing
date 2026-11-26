'use client';

import { BUSINESS_DATA, EMERGENCIES_COPY } from '@/utils/constants';
import { AlertCircle, CheckCircle2, Phone } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

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
          <div
            className="text-left space-y-8"
          >
            <div
              className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20"
            >
              <AlertCircle size={16} className="text-red-300" aria-hidden="true" />
              <span className="text-xs font-bold text-red-200 uppercase tracking-widest">
                {t('afterHoursLabel')}
              </span>
            </div>

            <h2
              className="text-4xl sm:text-6xl font-display font-extrabold text-white leading-tight"
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
            </h2>

            <p
              className="text-lg text-gray-300 max-w-xl leading-relaxed font-light"
            >
              {t('description')}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href={BUSINESS_DATA.phoneHref}
                aria-label={`${t('cta')}: ${BUSINESS_DATA.phone}`}
                className="group flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-red-600 text-white font-bold text-lg hover:bg-red-700 transition-all hover:shadow-[0_15px_30px_rgba(220,38,38,0.3)] hover:-translate-y-1"
              >
                <Phone size={22} className="group-hover:rotate-12 transition-transform" />
                <span>{t('cta')} · {BUSINESS_DATA.phone}</span>
              </a>
            </div>
          </div>

          {/* Cases Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {copy.cases.map((emergencyCase) => (
              <div
                key={emergencyCase}
                className="group p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/[0.08] transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle2 size={18} className="text-accent-500 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors leading-tight">
                    {emergencyCase}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Call to Action Card */}
            <div
              className="sm:col-span-2 p-6 rounded-2xl bg-accent-500/30 border border-accent-500/30 mt-4 flex items-center gap-6"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-500 flex items-center justify-center text-dark-900">
                <AlertCircle size={24} />
              </div>
              <div>
                <p className="text-white font-bold uppercase tracking-widest text-[10px] mb-2">{isEs ? 'Horario presencial' : 'In-person hours'}</p>
                <div className="space-y-1 text-white font-medium text-sm leading-snug">
                  {(isEs ? BUSINESS_DATA.hours.es : BUSINESS_DATA.hours.en).map((hours) => (
                    <p key={hours}>{hours}</p>
                  ))}
                  <p className="pt-2 text-gray-100">
                    {isEs ? BUSINESS_DATA.afterHoursEmergency.es : BUSINESS_DATA.afterHoursEmergency.en}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
