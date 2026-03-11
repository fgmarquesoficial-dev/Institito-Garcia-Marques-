import React from 'react';
import { Quote } from 'lucide-react';
import { instituteMockData } from '../data/mock';

export const PhilosophySection = () => {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={instituteMockData.philosophy.image}
          alt="Philosophy"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A961]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A961]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Quote Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-[#C9A961]/20 rounded-full flex items-center justify-center">
            <Quote className="w-10 h-10 text-[#C9A961]" />
          </div>
        </div>

        {/* Main Quote */}
        <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 leading-tight">
          "{instituteMockData.philosophy.quote}"
        </blockquote>

        {/* Description */}
        <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
          {instituteMockData.philosophy.description}
        </p>

        {/* Decorative Line */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="h-px w-20 bg-[#C9A961]" />
          <div className="w-2 h-2 bg-[#C9A961] rounded-full" />
          <div className="h-px w-20 bg-[#C9A961]" />
        </div>
      </div>
    </section>
  );
};
