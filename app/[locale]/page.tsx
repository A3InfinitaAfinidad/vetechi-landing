import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import SuccessStories from '@/components/SuccessStories';
import Emergencies from '@/components/Emergencies';
import Testimonials from '@/components/Testimonials';
import Team from '@/components/Team';
import Technology from '@/components/Technology';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import { setRequestLocale } from 'next-intl/server';

const belowFoldSectionClass = '[content-visibility:auto] [contain-intrinsic-size:0_2500px]';

export const metadata = {
  title: 'VETECHI | Hospital Veterinario Chiriquí - David, Panamá',
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <div className={belowFoldSectionClass}><About /></div>
      <div className={belowFoldSectionClass}><Services /></div>
      <div className={belowFoldSectionClass}><SuccessStories /></div>
      <div className={belowFoldSectionClass}><Emergencies /></div>
      <div className={belowFoldSectionClass}><Testimonials /></div>
      {/* Team renderizado después para no bloquear LCP */}
      <div className={belowFoldSectionClass}><Team /></div>
      <div className={belowFoldSectionClass}><Technology /></div>
      <Contact />
      <Footer />
    </main>
  );
}
