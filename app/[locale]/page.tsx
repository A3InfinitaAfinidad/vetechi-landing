import Hero from '@/components/Hero';
import dynamic from 'next/dynamic';

const About = dynamic(() => import('@/components/About'));
const Services = dynamic(() => import('@/components/Services'));
const SuccessStories = dynamic(() => import('@/components/SuccessStories'));
const Emergencies = dynamic(() => import('@/components/Emergencies'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const Team = dynamic(() => import('@/components/Team'));
const Technology = dynamic(() => import('@/components/Technology'));
const Contact = dynamic(() => import('@/components/Contact'));
const Footer = dynamic(() => import('@/components/Footer'));

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