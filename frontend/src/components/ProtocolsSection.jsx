import React from 'react';
import { HelpCircle, Brain, Target, BookOpen, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { instituteMockData } from '../data/mock';

const iconMap = {
  HelpCircle,
  Brain,
  Target,
  BookOpen
};

export const ProtocolsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0a2342] via-[#0d2a4a] to-[#0a2342] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#C9A961]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C9A961]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[#C9A961] text-sm font-semibold tracking-widest uppercase">
            Ferramentas de Autoestudo
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold mb-6">
            {instituteMockData.protocols.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-6 leading-relaxed">
            {instituteMockData.protocols.subtitle}
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {instituteMockData.protocols.description}
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-16 justify-center">
          <div className="h-px w-20 bg-[#C9A961]" />
          <div className="w-2 h-2 bg-[#C9A961] rounded-full" />
          <div className="h-px w-20 bg-[#C9A961]" />
        </div>

        {/* Protocols Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {instituteMockData.protocols.items.map((protocol) => {
            const Icon = iconMap[protocol.icon];
            return (
              <div
                key={protocol.id}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#C9A961]/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C9A961]/20"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={protocol.image}
                    alt={protocol.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2342] via-[#0a2342]/50 to-transparent" />
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-[#C9A961] rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-[#C9A961] transition-colors">
                    {protocol.name}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    {protocol.description}
                  </p>

                  {/* Button */}
                  <a
                    href={protocol.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-[#C9A961] hover:bg-[#B8935C] text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                      Acessar Protocolo
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://go.hotmart.com/B104259524W"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-white text-[#0a2342] hover:bg-[#C9A961] hover:text-white px-8 py-6 text-lg font-bold shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Explorar todos os Protocolos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
