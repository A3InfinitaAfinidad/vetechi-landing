import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Poppins, Montserrat, Open_Sans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n.config';
import '../globals.css';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import { BUSINESS_DATA, TEAM } from '@/utils/constants';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const openSans = Open_Sans({
  variable: '--font-opensans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'VETECHI | Hospital Veterinario 24/7 - Chiriquí',
  description: 'Hospital Veterinario premium en David, Chiriquí. Emergencias 24/7, cirugía especializada y atención integral para todas las especies.',
  icons: {
    icon: '/images/logo/favicon.svg',
  },
  keywords: 'veterinaria, clínica veterinaria, David, Chiriquí, Panamá, emergencias 24/7, especialistas, cirugía veterinaria',
  metadataBase: new URL('https://vetechi.pa'),
  openGraph: {
    type: 'website',
    locale: 'es_PA',
    url: 'https://vetechi.pa',
    title: 'VETECHI | Hospital Veterinario Chiriquí',
    description: 'La mejor clínica veterinaria premium en Chiriquí. Emergencias 24/7, especialistas apasionados.',
    siteName: 'VETECHI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VETECHI | Hospital Veterinario Chiriquí',
    description: 'Emergencias 24/7. Tu mascota merece lo mejor.',
  },
  alternates: {
    canonical: 'https://vetechi.pa',
    languages: {
      es: 'https://vetechi.pa/es',
      en: 'https://vetechi.pa/en',
    },
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["VeterinaryCare", "LocalBusiness"],
        "@id": "https://vetechi.pa",
        "name": BUSINESS_DATA.fullName,
        "url": "https://vetechi.pa",
        "telephone": BUSINESS_DATA.phone,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Antigua Vía a Boquete, diagonal a Farmacia Liz, antes de llegar a Game Park",
          "addressLocality": "David",
          "addressRegion": "Chiriquí",
          "addressCountry": "PA"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      ...TEAM.map(member => ({
        "@type": "Person",
        "name": member.name,
        "jobTitle": "Veterinarian",
        "worksFor": {
          "@id": "https://vetechi.pa"
        }
      }))
    ]
  };

  return (
    <html lang={locale} suppressHydrationWarning translate="no">
      <head>
        <meta name="theme-color" content="#2E7D32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/images/logo/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
          suppressHydrationWarning
        />
      </head>
      <body
        className={`${poppins.variable} ${montserrat.variable} ${openSans.variable} bg-white text-text antialiased`}
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