export const locales = ['es', 'en'] as const;
export const defaultLocale = 'es' as const;

export const localeLabels = {
  es: 'Español',
  en: 'English',
};

export type Locale = (typeof locales)[number];