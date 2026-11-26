import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n.config';
import '../globals.css';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import { BUSINESS_DATA, SHOW_GOOGLE_RATING, SITE_URL, TEAM } from '@/utils/constants';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  const title = isEs
    ? 'VETECHI | Atención veterinaria extendida en David, Chiriquí'
    : 'VETECHI | Extended veterinary care in David, Chiriquí';
  const description = isEs
    ? 'Atención presencial: lunes a sábado, 8:00 a.m.–10:00 p.m.; domingos, 10:00 a.m.–3:00 p.m. Fuera del horario presencial, llama al +507 6330-3291 por una urgencia.'
    : 'In-person hours: Monday to Saturday, 8:00 AM–10:00 PM; Sunday, 10:00 AM–3:00 PM. After in-person hours, call +507 6330-3291 for emergencies.';
  const pageUrl = `${SITE_URL}/${locale}/`;

  return {
    title,
    description,
    icons: {
      icon: '/images/logo/favicon.svg',
    },
    keywords: isEs
      ? 'veterinaria, atención veterinaria, David, Chiriquí, Panamá, horario extendido, urgencias telefónicas'
      : 'veterinary care, David, Chiriquí, Panama, extended hours, after-hours emergencies by phone',
    metadataBase: new URL(SITE_URL),
    openGraph: {
      type: 'website',
      locale: isEs ? 'es_PA' : 'en_PA',
      url: pageUrl,
      title,
      description,
      siteName: 'VETECHI',
      images: [
        {
          url: '/images/optimized/hero/hero-bg.webp',
          width: 1200,
          height: 630,
          alt: 'VETECHI Hospital Veterinario',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/optimized/hero/hero-bg.webp'],
    },
    alternates: {
      canonical: pageUrl,
      languages: {
        es: `${SITE_URL}/es/`,
        en: `${SITE_URL}/en/`,
        'x-default': `${SITE_URL}/es/`,
      },
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["VeterinaryCare", "LocalBusiness"],
        "@id": SITE_URL,
        "name": BUSINESS_DATA.fullName,
        "url": SITE_URL,
        "telephone": BUSINESS_DATA.phone,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Antigua Vía a Boquete, diagonal a Farmacia Liz, antes de llegar a Game Park",
          "addressLocality": "David",
          "addressRegion": "Chiriquí",
          "addressCountry": "PA"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "22:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "10:00",
            "closes": "15:00"
          }
        ],
        ...(SHOW_GOOGLE_RATING ? {
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "42"
          }
        } : {})
      },
      ...TEAM.map(member => ({
        "@type": "Person",
        "name": member.name,
        "jobTitle": "Veterinarian",
        "worksFor": {
          "@id": SITE_URL
        }
      }))
    ]
  };

  return (
    <html lang={locale} suppressHydrationWarning translate="no">
      <head>
        <meta name="theme-color" content="#2E7D32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/logo/favicon.svg" />
        <link rel="apple-touch-icon" href="/images/logo/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-VETECHI2026`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VETECHI2026');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
          suppressHydrationWarning
        />
      </head>
      <body
        className="bg-white text-text antialiased"
        suppressHydrationWarning
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
