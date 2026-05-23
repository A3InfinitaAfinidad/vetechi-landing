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

export const metadata = {
  title: 'VETECHI | Hospital Veterinario Chiriquí - David, Panamá',
};

import { setRequestLocale } from 'next-intl/server';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <SuccessStories />
      <Emergencies />
      <Testimonials />
      <Team />
      <Technology />
      <Contact />
      <Footer />
    </main>
  );
}