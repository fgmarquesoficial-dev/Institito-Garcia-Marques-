import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre', id: 'about' },
    { label: 'Programas', id: 'programs' },
    { label: 'Protocolos', id: 'protocols' },
    { label: 'Corporativo', id: 'corporate' },
    { label: 'Contato', id: 'contact' }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020b2f]/95 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="group flex min-w-0 items-center gap-4"
          aria-label="Instituto Garcia Marques"
        >
          <img
            src="/logo-header-igm.png"
            alt="Instituto Garcia Marques"
            className="h-14 w-auto shrink-0 object-contain"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-white/85 transition hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="https://wa.me/554891761593"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="inline-flex rounded-xl border border-white/10 bg-white/5 p-2 text-white lg:hidden"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#031240] lg:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col px-6 py-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="border-b border-white/5 py-3 text-left text-sm font-medium text-white/90 last:border-b-0"
              >
                {item.label}
              </button>
            ))}

            <a
              href="https://wa.me/554891761593"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
            >
              Agendar Consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
