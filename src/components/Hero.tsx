
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  language: "en" | "es";
}

export const Hero = ({ language }: HeroProps) => {
  const content = {
    en: {
      heading: "Cortes Garden",
      subheading: "Where the Garden Grows Wild & the Fire Cooks Clean",
      cta: "Reserve a Table"
    },
    es: {
      heading: "Cortes Garden",
      subheading: "Donde el Jardín Crece Salvaje y el Fuego Cocina Limpio",
      cta: "Reservar Mesa"
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523349312806-f5dde0a01c32')] bg-cover bg-center"
        style={{ filter: 'brightness(0.8)' }}
      />
      
      {/* Animated Shadow Overlay */}
      <div className="absolute inset-0 bg-[url('/palm-shadow.svg')] bg-center opacity-20 animate-leaf-shadow" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="font-playfair text-5xl md:text-7xl mb-6 text-shadow">
          {content[language].heading}
        </h1>
        <p className="font-playfair text-2xl md:text-4xl mb-8 text-shadow max-w-2xl mx-auto">
          {content[language].subheading}
        </p>
        <Button 
          size="lg" 
          className="bg-white/90 hover:bg-white text-[#2C2C2C] font-medium text-lg"
        >
          {content[language].cta}
        </Button>
      </div>
    </div>
  );
};
