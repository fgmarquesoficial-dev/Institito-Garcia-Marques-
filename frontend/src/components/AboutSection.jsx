import React from 'react';
import { Brain, Sparkles, Users } from 'lucide-react';
import { instituteMockData } from '../data/mock';

const iconMap = {
  Brain: Brain,
  Sparkles: Sparkles,
  Users: Users
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[#C9A961] text-sm font-semibold tracking-widest uppercase">
            Sobre Nós
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {instituteMockData.about.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {instituteMockData.about.subtitle}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#C9A961]/20 rounded-2xl transform rotate-3" />
            <img
              src={instituteMockData.about.image}
              alt="Instituto Garcia Marques"
              className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {instituteMockData.about.description}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {instituteMockData.about.founder}
              </p>
            </div>

            {/* Experience Badge */}
            <div className="inline-flex items-center bg-[#C9A961]/10 px-6 py-4 rounded-xl">
              <div className="w-2 h-2 bg-[#C9A961] rounded-full mr-3 animate-pulse" />
              <span className="text-gray-900 font-semibold">
                {instituteMockData.about.experience}
              </span>
            </div>
          </div>
        </div>

        {/* Differentiators */}
        <div className="grid md:grid-cols-3 gap-8">
          {instituteMockData.differentiators.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-[#C9A961]/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[#C9A961]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
