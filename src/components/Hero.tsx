import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  language: "en" | "es";
}

export const Hero = ({ language }: HeroProps) => {
  const content = {
    en: {
      subheading: "OPENING SOON",
      cta: "Reserve a Table"
    },
    es: {
      subheading: "ABRIEMOS PRONTO",
      cta: "Reservar Mesa"
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('/hero-l.jpg')] bg-cover bg-center"
        style={{ filter: 'brightness(0.4)' }}
      />
      
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center z-10 gap-10 text-center px-4">
        <object className="w-72 mb-6" type="image/svg+xml" data="/logo.svg">Cortes Garden</object>
        <p className="font-myanmar text-3xl text-primary-foreground md:text-4xl mb-8 max-w-2xl mx-auto">
          {content[language].subheading}
        </p>
        <Button 
          size="lg" 
          className="bg-secondary text-secondary-foreground hover:text-muted-foreground font-medium text-md"
        >
          {content[language].cta}
        </Button>
      </div>
    </div>
  );
};
