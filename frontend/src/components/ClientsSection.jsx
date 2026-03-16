import React from 'react';
import { instituteMockData } from '../data/mock';

const clientLogos = [
  { id: 1, name: "Politécnica", image: "/clients/politecnica.png" },
  { id: 2, name: "Faculdade São Luís", image: "/clients/sao-luis.png" },
  { id: 3, name: "Eurocentro", image: "/clients/eurocentro.webp" },
  { id: 4, name: "Forward Academy", image: "/clients/forward.jpg" },
  { id: 5, name: "FASUL", image: "/clients/fasul.png" },
  { id: 6, name: "Móveis Casa Verde", image: "/clients/casa-verde.png" },
  { id: 7, name: "Mary Kay", image: "/clients/mary-kay.png" },
  { id: 8, name: "Infoprise", image: "/clients/infoprise.jpg" },
  { id: 9, name: "PMS Traduções", image: "/clients/pms-traducoes.jpg" },
  { id: 10, name: "Universidade Cruzeiro do Sul", image: "/clients/cruzeiro-do-sul.png" }
];

export const ClientsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {instituteMockData.clients.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {instituteMockData.clients.subtitle}
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {clientLogos.map((client) => (
            <div
              key={client.id}
              className="group flex items-center justify-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#C9A961] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={client.image}
                alt={client.name}
                className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-[#C9A961]/10 px-6 py-3 rounded-full border border-[#C9A961]/30">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#C9A961] flex items-center justify-center text-white text-xs font-bold">
                10+
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700">
              Organizações transformadas com nossa metodologia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
