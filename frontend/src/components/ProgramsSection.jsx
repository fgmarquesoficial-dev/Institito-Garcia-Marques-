import React from 'react';
import { Check, Phone, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { instituteMockData } from '../data/mock';

export const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[#C9A961] text-sm font-semibold tracking-widest uppercase">
            Programas e Mentorias
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforme sua Vida
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Programas estruturados e mentorias personalizadas para despertar seu máximo potencial
          </p>
        </div>

        {/* Programs Grid */}
        <div className="space-y-12">
          {instituteMockData.programs.map((program, index) => (
            <div
              key={program.id}
              className={`relative bg-gradient-to-br ${
                program.featured 
                  ? 'from-[#C9A961]/5 to-white border-2 border-[#C9A961]' 
                  : 'from-gray-50 to-white border border-gray-200'
              } rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              {/* Featured Badge */}
              {program.featured && (
                <div className="absolute top-6 right-6 z-10">
                  <Badge className="bg-[#C9A961] text-white px-4 py-2 text-sm font-semibold">
                    Programa Principal
                  </Badge>
                </div>
              )}

              <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image */}
                <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    {program.name}
                  </h3>
                  <p className="text-lg text-[#C9A961] font-semibold mb-6">
                    {program.subtitle}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Extended Description for QPFA */}
                  {program.extendedDescription && (
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#C9A961]">
                        <h4 className="font-bold text-gray-900 mb-2">Para Indivíduos:</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {program.extendedDescription.individual}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#C9A961]">
                        <h4 className="font-bold text-gray-900 mb-2">Para Famílias:</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {program.extendedDescription.family}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#C9A961]">
                        <h4 className="font-bold text-gray-900 mb-2">Para Organizações:</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {program.extendedDescription.organization}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Program Details */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="bg-white px-4 py-2 rounded-lg border border-gray-200">
                      <span className="text-sm text-gray-600">Duração: </span>
                      <span className="font-semibold text-gray-900">{program.duration}</span>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-lg border border-gray-200">
                      <span className="text-sm text-gray-600">Formato: </span>
                      <span className="font-semibold text-gray-900">{program.format}</span>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4">O que você vai conquistar:</h4>
                    <ul className="space-y-3">
                      {program.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 bg-[#C9A961] rounded-full flex items-center justify-center mt-1">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-gray-200">
                    <div>
                      <div className="text-3xl font-bold text-gray-900">
                        {program.price}
                      </div>
                      {program.priceNote && (
                        <p className="text-sm text-gray-600 mt-1">{program.priceNote}</p>
                      )}
                      {program.individualPrice && (
                        <p className="text-sm text-gray-600 mt-1">
                          Individual: {program.individualPrice}
                        </p>
                      )}
                    </div>
                    {program.externalLink ? (
                      <a
                        href={program.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-[#C9A961] hover:bg-[#B8935C] text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                          <ArrowRight className="w-4 h-4 mr-2" />
                          Acessar Agora
                        </Button>
                      </a>
                    ) : (
                      <a
                        href={`https://wa.me/${instituteMockData.contact.whatsapp}?text=Olá! Tenho interesse no programa ${program.name}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-[#C9A961] hover:bg-[#B8935C] text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                          <Phone className="w-4 h-4 mr-2" />
                          Fale com um Especialista
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
