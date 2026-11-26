import { BUSINESS_DATA, HOURS_ROWS } from '@/utils/constants';
import { Clock, MapPin, Phone } from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';
import { preload } from 'react-dom';
import { SiWhatsapp } from 'react-icons/si';

export default async function Hero() {
  preload('/images/optimized/hero/hero-bg-mobile-lcp.avif', { as: 'image', fetchPriority: 'high', media: '(max-width: 768px)' });
  preload('/images/optimized/hero/hero-bg-lcp.avif', { as: 'image', fetchPriority: 'high', media: '(min-width: 769px)' });

  const t = await getTranslations('hero');
  const locale = await getLocale();
  const isEs = locale === 'es';
  const hoursRows = isEs ? HOURS_ROWS.es : HOURS_ROWS.en;
  const trustItems = [
    t('trustSpecialists'),
    t('trustSmall'),
    t('trustLarge'),
    t('trustExotic'),
    t('trustBilingual'),
  ];

  return (
    <section id="inicio" className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-dark-900 pb-8 pt-24 sm:pt-28 lg:pt-32">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <picture>
          <source media="(max-width: 768px)" srcSet="/images/optimized/hero/hero-bg-mobile-lcp.avif" type="image/avif" />
          <source media="(min-width: 769px)" srcSet="/images/optimized/hero/hero-bg-lcp.avif" type="image/avif" />
          <img
            src="/images/optimized/hero/hero-bg.webp"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
            sizes="100vw"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/85 to-dark-900/75" />
        <div
          className="absolute inset-0 opacity-60"
          style={{ background: 'radial-gradient(circle at 30% 50%, rgba(27, 59, 47, 0.4) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-7 lg:gap-8">
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-center lg:gap-12">
            <div className="min-w-0 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A77A]/40 bg-[#C5A77A]/10 px-4 py-2 backdrop-blur-md">
                <MapPin size={15} className="shrink-0 text-accent-500" aria-hidden="true" />
                <span className="text-xs font-bold tracking-wide text-white sm:text-sm">
                  {isEs ? 'David, Chiriquí · Panamá' : 'David, Chiriquí · Panama'}
                </span>
              </div>

              <div>
                <h1 className="max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {isEs ? (
                    <>
                      {t('title')} <span className="text-accent-400">{t('brand')}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-accent-400">{t('brand')}</span> {t('title')}
                    </>
                  )}
                </h1>
              </div>

              <p className="max-w-2xl text-base leading-relaxed text-gray-100 sm:text-lg">
                {t('subheadline')}
              </p>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
                <a
                  href={`${BUSINESS_DATA.whatsapp}?text=${encodeURIComponent(isEs ? BUSINESS_DATA.whatsappMessages.info.es : BUSINESS_DATA.whatsappMessages.info.en)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-primary-700 px-6 py-3 text-center text-base font-bold text-white transition-colors hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-lg"
                >
                  <SiWhatsapp size={20} aria-hidden="true" />
                  <span>{t('cta1')}</span>
                </a>
                <a
                  href={BUSINESS_DATA.phoneHref}
                  aria-label={t('phoneCtaAria')}
                  className="flex min-h-[52px] items-center justify-center gap-3 rounded-xl border border-white/50 bg-white/5 px-6 py-3 text-center text-base font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-lg"
                >
                  <Phone size={19} aria-hidden="true" />
                  <span>{t('cta2')}</span>
                </a>
              </div>
            </div>

            <aside
              id="horario"
              aria-label={t('hoursHeading')}
              className="w-full rounded-2xl border border-white/20 bg-dark-900/75 p-5 text-white shadow-xl backdrop-blur-xl sm:p-6 lg:w-[400px] lg:shrink-0"
            >
              <h2 className="mb-3 flex items-center gap-3 text-base font-bold text-accent-400 sm:text-lg">
                <Clock size={20} aria-hidden="true" />
                <span>{t('hoursHeading')}</span>
              </h2>
              <dl className="divide-y divide-white/15 text-sm sm:text-base">
                {hoursRows.map((row) => (
                  <div key={row.day} className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-gray-100">{row.day}</dt>
                    <dd className="whitespace-nowrap text-right font-semibold tabular-nums text-white">{row.time}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-3 border-t border-white/15 pt-4">
                <h3 className="text-sm font-bold text-white">{t('afterHoursLabel')}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-100">
                  {t('afterHoursMessage')}
                </p>
                <a
                  href={BUSINESS_DATA.phoneHref}
                  aria-label={`${t('phoneCtaAria')}: ${BUSINESS_DATA.phone}`}
                  className="mt-2 inline-flex min-h-[44px] items-center gap-2 font-semibold text-accent-400 underline-offset-4 hover:underline"
                >
                  <Phone size={16} aria-hidden="true" />
                  <span className="tabular-nums">{BUSINESS_DATA.phone}</span>
                </a>
              </div>
            </aside>
          </div>

          <div
            aria-label={t('trustHeading')}
            className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-white/20 pt-5 text-sm font-medium text-white sm:grid-cols-5 sm:gap-4"
          >
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
