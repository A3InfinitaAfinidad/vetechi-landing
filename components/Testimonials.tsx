'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { TESTIMONIALS } from '@/utils/constants';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const locale = useLocale();
  const isEs = locale === 'es';
  const [current, setCurrent] = useState(0);

  const testimonial = TESTIMONIALS[current];
  const text = isEs ? testimonial.es : testimonial.en;

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-6 bg-accent-500"></div>
            <p className="font-subtitle font-bold text-accent-600 uppercase text-sm">
              {isEs ? 'Lo que dicen nuestras familias' : 'What Our Families Say'}
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-dark-900 mb-2">
            4.8 ⭐ en Google • 42 reseñas verificadas
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          key={current}
          className="bg-gray-50 p-8 sm:p-12 rounded-lg border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} size={24} className="fill-accent-500 text-accent-500" />
            ))}
          </div>

          {/* Text */}
          <p className="text-lg text-text italic mb-8 leading-relaxed">
            "{text}"
          </p>

          {/* Author */}
          <div className="border-t border-gray-300 pt-6">
            <p className="font-subtitle font-bold text-dark-900">{testimonial.author}</p>
            <p className="text-sm text-text">{testimonial.location}</p>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <button
            onClick={prevTestimonial}
            className="bg-gray-200 text-dark-900 w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary-400 hover:text-white transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === current ? 'bg-primary-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Testimonio ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="bg-gray-200 text-dark-900 w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary-400 hover:text-white transition-all"
            aria-label="Siguiente"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}