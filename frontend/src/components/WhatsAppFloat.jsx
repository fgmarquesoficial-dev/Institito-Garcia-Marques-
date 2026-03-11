import React from 'react';
import { Phone } from 'lucide-react';
import { instituteMockData } from '../data/mock';

export const WhatsAppFloat = () => {
  return (
    <a
      href={`https://wa.me/${instituteMockData.contact.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all duration-300 transform hover:scale-110 animate-pulse"
      aria-label="Fale conosco no WhatsApp"
    >
      <Phone className="w-8 h-8 text-white" />
    </a>
  );
};
