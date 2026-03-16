import React, { useState } from "react";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ClientsSection } from "./components/ClientsSection";
import { PhilosophySection } from "./components/PhilosophySection";
import { ValuesSection } from "./components/ValuesSection";
import { ProgramsSection } from "./components/ProgramsSection";
import { ProtocolsSection } from "./components/ProtocolsSection";
import { CorporateSection } from "./components/CorporateSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { LeadCapturePopup } from "./components/LeadCapturePopup";

function App() {
  const [isLeadPopupOpen, setIsLeadPopupOpen] = useState(false);

  const handleOpenLeadPopup = () => {
    setIsLeadPopupOpen(true);
  };

  const handleCloseLeadPopup = () => {
    setIsLeadPopupOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ClientsSection />
        <PhilosophySection />
        <ValuesSection />
        <ProgramsSection />
        <ProtocolsSection onOpenLeadPopup={handleOpenLeadPopup} />
        <CorporateSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <LeadCapturePopup isManualOpen={isLeadPopupOpen} onClose={handleCloseLeadPopup} />
      <Toaster />
    </div>
  );
}

export default App;
