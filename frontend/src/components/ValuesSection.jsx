import React from 'react';
import { 
  Lightbulb, Heart, BookOpen, Target, TrendingUp, Zap, 
  Award, Briefcase, Shield, MessageCircle, Users 
} from 'lucide-react';
import { instituteMockData } from '../data/mock';

const iconMap = {
  Lightbulb, Heart, BookOpen, Target, TrendingUp, Zap,
  Award, Briefcase, Shield, MessageCircle, Users
};

export const ValuesSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[#C9A961] text-sm font-semibold tracking-widest uppercase">
            Nossos Valores
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Os Princípios que nos Guiam
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Valores essenciais que fundamentam nossa missão de transformação e desenvolvimento humano
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instituteMockData.values.map((value, index) => {
            const Icon = iconMap[value.icon];
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#C9A961]/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#C9A961]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
