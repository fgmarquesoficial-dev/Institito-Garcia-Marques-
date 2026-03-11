import React from 'react';
import { UserCheck, Users, Lightbulb, Target } from 'lucide-react';
import { Button } from './ui/button';
import { instituteMockData } from '../data/mock';

const iconMap = {
  UserCheck,
  Users,
  Lightbulb,
  Target
};

export const CorporateSection = () => {
  return (
    <section id="corporate" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={instituteMockData.corporate.image}
          alt="Corporate Education"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-900" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#C9A961]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C9A961]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[#C9A961] text-sm font-semibold tracking-widest uppercase">
            Para Empresas
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold mb-6">
            {instituteMockData.corporate.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {instituteMockData.corporate.subtitle}
          </p>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-300 leading-relaxed">
            {instituteMockData.corporate.description}
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {instituteMockData.corporate.solutions.map((solution, index) => {
            const Icon = iconMap[solution.icon];
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-[#C9A961]/50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-[#C9A961]/20 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[#C9A961]" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={`https://wa.me/${instituteMockData.contact.whatsapp}?text=Olá! Tenho interesse em soluções corporativas.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-[#C9A961] hover:bg-[#B8935C] text-white px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-[#C9A961]/50 transition-all duration-300"
            >
              Solicite uma Proposta Corporativa
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
