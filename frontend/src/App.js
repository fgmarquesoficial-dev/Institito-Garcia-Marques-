import React from "react";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { PhilosophySection } from "./components/PhilosophySection";
import { ValuesSection } from "./components/ValuesSection";
import { ProgramsSection } from "./components/ProgramsSection";
import { CorporateSection } from "./components/CorporateSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <ValuesSection />
        <ProgramsSection />
        <CorporateSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Toaster />
    </div>
  );
}

export default App;
