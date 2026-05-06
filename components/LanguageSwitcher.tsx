'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLanguage = (newLocale: string) => {
    startTransition(() => {
      let newPathname = pathname;
      
      if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
        newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
      } else {
        newPathname = `/${newLocale}${pathname === '/' ? '' : pathname}`;
      }
      
      if (newLocale === 'es') {
        newPathname = newPathname.replace(/^\/en/, '') || '/';
      }
      
      router.push(newPathname);
    });
  };

  return (
    <div className="flex gap-2 items-center bg-white/10 backdrop-blur p-1 rounded-lg">
      <button
        onClick={() => switchLanguage('es')}
        className={`px-3 py-1.5 rounded-md font-subtitle text-xs font-semibold transition-all ${
          locale === 'es'
            ? 'bg-primary-800 text-white'
            : 'bg-transparent text-white/70 hover:text-white'
        }`}
        disabled={isPending}
        aria-label="Cambiar a Español"
      >
        🇵🇦 ES
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1.5 rounded-md font-subtitle text-xs font-semibold transition-all ${
          locale === 'en'
            ? 'bg-primary-800 text-white'
            : 'bg-transparent text-white/70 hover:text-white'
        }`}
        disabled={isPending}
        aria-label="Switch to English"
      >
        🇺🇸 EN
      </button>
    </div>
  );
}