import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { instituteMockData } from '../data/mock';

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50 z-10" />
        <img
          src={instituteMockData.hero.image}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#C9A961]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#C9A961]/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          {/* Tagline */}
          <div className="mb-6 inline-block">
            <span className="text-[#C9A961] text-sm font-semibold tracking-widest uppercase border-l-4 border-[#C9A961] pl-4">
              {instituteMockData.hero.tagline}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {instituteMockData.hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-100 mb-10 leading-relaxed max-w-3xl">
            {instituteMockData.hero.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${instituteMockData.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#C9A961] hover:bg-[#B8935C] text-white px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-[#C9A961]/50 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                {instituteMockData.hero.cta}
              </Button>
            </a>
            <Button
              size="lg"
              onClick={scrollToContact}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg font-semibold transition-all duration-300"
            >
              Saiba Mais
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {instituteMockData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#C9A961] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-white font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
