
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('/lovable-uploads/549da24e-b507-4665-9f70-9ca9ae4c2bf0.png')] bg-cover bg-center"
        style={{ filter: 'brightness(0.8)' }}
      />
      
      {/* Animated Shadow Overlay */}
      <div className="absolute inset-0 bg-[url('/palm-shadow.svg')] bg-center opacity-20 animate-leaf-shadow" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="font-playfair text-5xl md:text-7xl mb-6 text-shadow">
          Cortes Garden
        </h1>
        <p className="font-playfair text-2xl md:text-4xl mb-8 text-shadow max-w-2xl mx-auto">
          Where the Garden Grows Wild & the Fire Cooks Clean
        </p>
        <Button 
          size="lg" 
          className="bg-white/90 hover:bg-white text-[#2C2C2C] font-medium text-lg"
          onClick={() => window.open('https://reservations.cortesgardens.com', '_blank')}
        >
          Reserve a Table
        </Button>
      </div>
    </div>
  );
};
