import React from 'react';
import { Phone, Mail, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { instituteMockData } from '../data/mock';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <img
              src={instituteMockData.logo.main}
              alt="Instituto Garcia Marques"
              className="h-16 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              O primeiro instituto brasileiro 100% focado em desenvolvimento do potencial humano através da transformação consciente de paradigmas.
            </p>
            <div className="flex gap-4">
              <a
                href={instituteMockData.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#C9A961] transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={instituteMockData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#C9A961] transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-[#C9A961] transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-[#C9A961] transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('programs')}
                  className="text-gray-400 hover:text-[#C9A961] transition-colors"
                >
                  Programas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('corporate')}
                  className="text-gray-400 hover:text-[#C9A961] transition-colors"
                >
                  Corporativo
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-[#C9A961] transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`https://wa.me/${instituteMockData.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#C9A961] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>{instituteMockData.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${instituteMockData.contact.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-[#C9A961] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>{instituteMockData.contact.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Instituto Garcia Marques. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <button className="hover:text-[#C9A961] transition-colors">
              Política de Privacidade
            </button>
            <button className="hover:text-[#C9A961] transition-colors">
              Termos de Uso
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-[#C9A961] rounded-full flex items-center justify-center hover:bg-[#B8935C] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>
    </footer>
  );
};
