import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n.config';

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  return children;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}