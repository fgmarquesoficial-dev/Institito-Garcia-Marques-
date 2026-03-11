import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { instituteMockData } from '../data/mock';
import { toast } from 'sonner';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[#C9A961] text-sm font-semibold tracking-widest uppercase">
            Entre em Contato
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {instituteMockData.cta.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {instituteMockData.cta.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Fale Conosco
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Estamos prontos para ajudá-lo a iniciar sua jornada de transformação. Entre em contato e descubra como podemos desenvolver seu potencial ilimitado.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <a
                href={`https://wa.me/${instituteMockData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-[#C9A961]/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#C9A961]/10 rounded-lg flex items-center justify-center group-hover:bg-[#C9A961] transition-all duration-300">
                  <Phone className="w-6 h-6 text-[#C9A961] group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">WhatsApp</div>
                  <div className="font-semibold text-gray-900">{instituteMockData.contact.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${instituteMockData.contact.email}`}
                className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-[#C9A961]/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#C9A961]/10 rounded-lg flex items-center justify-center group-hover:bg-[#C9A961] transition-all duration-300">
                  <Mail className="w-6 h-6 text-[#C9A961] group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">E-mail</div>
                  <div className="font-semibold text-gray-900">{instituteMockData.contact.email}</div>
                </div>
              </a>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href={instituteMockData.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-[#C9A961] transition-all duration-300"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a
                  href={instituteMockData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-[#C9A961] transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envie sua Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Nome Completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  E-mail *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Telefone / WhatsApp
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Como podemos ajudá-lo?"
                  rows={5}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#C9A961] hover:bg-[#B8935C] text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
