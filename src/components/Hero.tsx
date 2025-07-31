import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  language: "en" | "es";
}

export const Hero = ({ language }: HeroProps) => {
  const [currentMenu, setCurrentMenu] = useState<'morning' | 'evening'>('morning');

  const content = {
    en: {
      subheading: "WHERE NATURE MEETS TASTE",
      cta: "RESERVE A TABLE",
      menu: "MENU"
    },
    es: {
      subheading: "ESTAMOS ABIERTOS",
      cta: "RESERVAR MESA",
      menu: "MENÚ"
    }
  };

  // Determine which menu to show based on Spain local time
  useEffect(() => {
    const updateMenu = () => {
      const now = new Date();
      const spainTime = new Date(now.toLocaleString("en-US", {timeZone: "Europe/Madrid"}));
      const hour = spainTime.getHours();
      
      // Morning menu: 6:00 - 17:00, Evening menu: 17:00 - 6:00
      if (hour >= 6 && hour < 17) {
        setCurrentMenu('morning');
      } else {
        setCurrentMenu('evening');
      }
    };

    updateMenu();
    // Update every minute to ensure accuracy
    const interval = setInterval(updateMenu, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const handleMenuClick = () => {
    const menuFile = currentMenu === 'morning' 
      ? '/C.G.morning-menu.2025.07.31.pdf'
      : '/C.G.evening-menu.2025.07.31.pdf';
    window.open(menuFile, '_blank');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('/hero-l.jpg')] bg-cover bg-center"
        style={{ filter: 'brightness(0.4)' }}
      />
      
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center z-10 gap-4 md:gap-10 text-center p-4">
        <object className="w-48 md:w-72 md:mb-6 mb-2" type="image/svg+xml" data="/logo.svg">Cortes Garden</object>
        <p className="font-myanmar text-3xl text-secondary md:text-4xl mb-4 max-w-2xl mx-auto">
          {content[language].subheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Button 
            size="lg" 
            variant="outline"
            className="bg-primary border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-medium text-md"
            onClick={handleMenuClick}
          >
            {content[language].menu}
          </Button>
          <Button 
            size="lg" 
            className="bg-secondary text-secondary-foreground hover:text-muted-foreground font-medium text-md"
            onClick={() => window.open('https://meet.move2marbella.com/widget/form/Mw1oNoGGlYFKFKNoIEhj?notrack=true', '_blank')}
          >
            {content[language].cta}
          </Button>
        </div>
      </div>
    </div>
  );
};
