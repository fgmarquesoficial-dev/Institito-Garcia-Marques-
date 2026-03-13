import React from 'react';
import { ArrowUp } from 'lucide-react';
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
    <footer className="border-t border-white/10 bg-[#020b2f] text-white relative">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        {/* Brand Column */}
        <div>
          <img
            src="/logo-footer-igm.png"
            alt="Instituto Garcia Marques"
            className="h-16 w-auto object-contain"
          />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
            Desenvolvimento humano, reprogramação mental, educação transformacional
            e formação de pessoas para alta performance com profundidade,
            clareza e estrutura.
          </p>
        </div>

        {/* Navigation Column */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
            Navegação
          </h4>
          <div className="mt-5 space-y-3">
            <button
              onClick={() => scrollToSection('about')}
              className="block text-left text-sm text-white/70 transition hover:text-white"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="block text-left text-sm text-white/70 transition hover:text-white"
            >
              Programas
            </button>
            <button
              onClick={() => scrollToSection('protocols')}
              className="block text-left text-sm text-white/70 transition hover:text-white"
            >
              Protocolos
            </button>
            <button
              onClick={() => scrollToSection('corporate')}
              className="block text-left text-sm text-white/70 transition hover:text-white"
            >
              Corporativo
            </button>
          </div>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
            Contato
          </h4>
          <div className="mt-5 space-y-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="block text-left text-sm text-white/70 transition hover:text-white"
            >
              Fale Conosco
            </button>
            <a
              href={`https://wa.me/${instituteMockData.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-white/70 transition hover:text-white"
            >
              WhatsApp
            </a>
            <a
              href={instituteMockData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-white/70 transition hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={instituteMockData.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-white/70 transition hover:text-white"
            >
              Instagram
            </a>
            <a
              href={instituteMockData.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-white/70 transition hover:text-white"
            >
              Facebook
            </a>
            <a
              href={instituteMockData.contact.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-white/70 transition hover:text-white"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center md:flex-row md:text-left">
          <p className="text-xs tracking-wide text-white/55">
            © {currentYear} Instituto Garcia Marques. Todos os direitos reservados.
          </p>
          <p className="text-sm italic text-white/90">Sim, você pode.</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>
    </footer>
  );
};
