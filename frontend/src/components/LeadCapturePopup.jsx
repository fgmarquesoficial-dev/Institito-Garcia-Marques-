import React, { useState, useEffect } from 'react';
import { X, Download, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const LeadCapturePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: ''
  });

  useEffect(() => {
    // Verifica se o popup já foi exibido nesta sessão
    const popupShown = sessionStorage.getItem('leadPopupShown');
    const popupClosed = localStorage.getItem('leadPopupClosed');
    
    // Se não foi exibido E não foi fechado recentemente (últimas 24h)
    if (!popupShown && !popupClosed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('leadPopupShown', 'true');
      }, 5000); // 5 segundos

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Marca como fechado no localStorage (não reaparece por 24h)
    const tomorrow = new Date().getTime() + (24 * 60 * 60 * 1000);
    localStorage.setItem('leadPopupClosed', tomorrow.toString());
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const formatTelefone = (value) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    // Formata (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
  };

  const handleTelefoneChange = (e) => {
    const formatted = formatTelefone(e.target.value);
    setFormData({
      ...formData,
      telefone: formatted
    });
  };

  const validateForm = () => {
    if (!formData.nome || formData.nome.length < 3) {
      toast.error('Por favor, insira seu nome completo');
      return false;
    }
    
    const phoneNumbers = formData.telefone.replace(/\D/g, '');
    if (phoneNumbers.length < 10) {
      toast.error('Por favor, insira um telefone válido');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Por favor, insira um e-mail válido');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await axios.post(`${BACKEND_URL}/api/leads`, formData);
      
      if (response.data.pdf_url) {
        setPdfUrl(`${BACKEND_URL}${response.data.pdf_url}`);
        setIsSuccess(true);
        
        // Inicia o download automaticamente
        const link = document.createElement('a');
        link.href = `${BACKEND_URL}${response.data.pdf_url}`;
        link.download = '8-Perguntas-que-Merecem-Sua-Atencao.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        toast.success(response.data.message || 'Download iniciado!');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast.error('Erro ao processar sua solicitação. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gradient-to-br from-[#0a2342] via-[#0d2a4a] to-[#0a2342] rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-[#C9A961]/30 animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
          aria-label="Fechar"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="p-8 md:p-12">
          {!isSuccess ? (
            <>
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-[#C9A961]/10 rounded-full flex items-center justify-center border-2 border-[#C9A961]">
                  <Download className="w-10 h-10 text-[#C9A961]" />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 font-serif">
                As 8 Perguntas que Merecem a Sua Atenção
              </h2>

              {/* Subtitle */}
              <p className="text-lg text-gray-300 text-center mb-6 leading-relaxed">
                Antes de continuar no automático, pare por alguns minutos e reflita sobre perguntas que podem mudar sua clareza, sua direção e a forma como você conduz a própria vida.
              </p>

              {/* Support Text */}
              <p className="text-sm text-gray-400 text-center mb-8">
                Preencha seus dados abaixo para baixar gratuitamente o material em PDF.
              </p>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-[#C9A961]/30" />
                <div className="w-2 h-2 bg-[#C9A961] rounded-full" />
                <div className="h-px flex-1 bg-[#C9A961]/30" />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-white mb-2">
                    Seu nome completo *
                  </label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    placeholder="Digite seu nome completo"
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#C9A961] focus:ring-[#C9A961]"
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-semibold text-white mb-2">
                    Seu telefone *
                  </label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={handleTelefoneChange}
                    required
                    placeholder="(00) 00000-0000"
                    maxLength={15}
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#C9A961] focus:ring-[#C9A961]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Seu melhor e-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#C9A961] focus:ring-[#C9A961]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C9A961] hover:bg-[#B8935C] text-white py-6 text-lg font-bold shadow-2xl hover:shadow-[#C9A961]/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processando...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Download className="w-5 h-5" />
                      Baixar Material Gratuito
                    </span>
                  )}
                </Button>

                <p className="text-xs text-gray-400 text-center mt-4">
                  Seus dados estão seguros. Não compartilhamos com terceiros.
                </p>
              </form>
            </>
          ) : (
            <>
              {/* Success State */}
              <div className="text-center py-8">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center border-2 border-green-500 animate-in zoom-in duration-500">
                    <CheckCircle className="w-12 h-12 text-green-500" />
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
                  Pronto!
                </h2>

                <p className="text-xl text-gray-300 mb-8">
                  Seu PDF já está disponível para download e foi iniciado automaticamente.
                </p>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                  <p className="text-sm text-gray-300 mb-4">
                    Caso o download não tenha iniciado, clique no botão abaixo:
                  </p>
                  <a
                    href={pdfUrl}
                    download="8-Perguntas-que-Merecem-Sua-Atencao.pdf"
                    className="inline-block"
                  >
                    <Button className="bg-[#C9A961] hover:bg-[#B8935C] text-white px-8 py-3">
                      <Download className="w-5 h-5 mr-2" />
                      Baixar PDF Novamente
                    </Button>
                  </a>
                </div>

                <Button
                  onClick={handleClose}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Fechar
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
