import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Mail } from "lucide-react";
import Map from "@/components/Map";

const Index = () => {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.min-h-screen');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowFloatingCta(heroBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      about: {
        title: "About",
        subtitle: "Rooted in Nature. Designed for Indulgence.",
        description: "A hidden garden in Marbella, where Mediterranean soul meets culinary fire. Nestled among palm trees and water fountains, we offer an elegant yet relaxed dining experience with ample parking for your convenience.",
      },
      cuisine: {
        title: "Food for Every Mood",
        subtitle: "While our full menu is coming soon, here's what you can expect:",
      },
      drinks: {
        title: "Drinks & Ambiance",
        description: "Enjoy craft cocktails, fresh juices, and a curated wine selection at our outdoor bar, perfectly complementing the garden atmosphere.",
      },
      familySection: {
        title: "Family Welcome",
        description: "Our spacious garden provides a safe, open-air environment where children can play while adults savor their dining experience.",
      },
      reserve: "Reserve a Table",
      steaks: "Steaks & Seafood",
      wines: "Fine Wines",
      familyDining: "Family Dining",
      location: "Location",
      locationText: "In the heart of Marbella's Costa del Sol",
      footer: {
        privacy: "Privacy Policy",
        legal: "Legal Warning",
        cookies: "Cookies Policy",
        contact: "Contact Us",
        rights: "All rights reserved."
      }
    },
    es: {
      about: {
        title: "Sobre Nosotros",
        subtitle: "Inspirado por la Naturaleza. Creado para el Placer.",
        description: "Un jardín escondido en Marbella, donde el alma mediterránea se encuentra con el fuego culinario. Rodeado de palmeras y fuentes de agua, ofrecemos una experiencia gastronómica elegante y relajada con amplio estacionamiento para su comodidad.",
      },
      cuisine: {
        title: "Comida para Todos los Gustos",
        subtitle: "Mientras nuestro menú completo está en camino, esto es lo que puede esperar:",
      },
      drinks: {
        title: "Bebidas y Ambiente",
        description: "Disfrute de cócteles artesanales, jugos frescos y una selección de vinos curada en nuestro bar al aire libre, complementando perfectamente la atmósfera del jardín.",
      },
      familySection: {
        title: "Bienvenida Familiar",
        description: "Nuestro espacioso jardín proporciona un ambiente seguro al aire libre donde los niños pueden jugar mientras los adultos saborean su experiencia gastronómica.",
      },
      reserve: "Reservar Mesa",
      steaks: "Carnes y Mariscos",
      wines: "Vinos Selectos",
      familyDining: "Comida Familiar",
      location: "Ubicación",
      locationText: "En el corazón de la Costa del Sol de Marbella",
      footer: {
        privacy: "Política de Privacidad",
        legal: "Aviso Legal",
        cookies: "Política de Cookies",
        contact: "Contáctenos",
        rights: "Todos los derechos reservados."
      }
    }
  };

  return (
    <div className="relative">
      <Hero language={language} />
      
      {/* Floating CTA Button */}
      {showFloatingCta && (
        <Button 
          className="fixed top-4 right-4 z-50 bg-primary text-primary-foreground hover:text-muted-foreground"
          size="lg"
          onClick={() => window.open('https://meet.move2marbella.com/widget/form/Mw1oNoGGlYFKFKNoIEhj?notrack=true', '_blank')}>
          {content[language].reserve}
        </Button>
      )}

      {/* About Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img src="/leaf-2.svg" alt="Decorative leaf" className="w-8 md:w-12 mx-auto my-8" />
          <h2 className="font-myanmar text-4xl mb-6">{content[language].about.title}</h2>
          <h3 className="font-myanmar text-xl mb-6">
            {content[language].about.subtitle}
          </h3>
          <p className="text-md leading-6">
            {content[language].about.description}
          </p>
        </div>
      </section>

      {/* Cuisine Preview */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
        <img src="/leaf-1.svg" alt="Decorative leaf" className="w-8 md:w-12 mx-auto my-12" />
          <h2 className="font-myanmar text-4xl mb-8">{content[language].cuisine.title}</h2>
          <p className="text-md mb-12">{content[language].cuisine.subtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-secondary">
            <div className="p-6 bg-[url('/food.jpg')] bg-cover bg-center shadow-sm flex items-center justify-center h-40">
              <h3 className="font-myanmar text-xl">{content[language].steaks}</h3>
            </div>
            <div className="p-6 bg-[url('/wine.jpg')] bg-cover bg-center shadow-sm flex items-center justify-center h-40">
              <h3 className="font-myanmar text-xl">{content[language].wines}</h3>
            </div>
            <div className="p-6 bg-[url('/family.jpg')] bg-cover bg-center shadow-sm flex items-center justify-center h-40">
              <h3 className="font-myanmar text-xl">{content[language].familyDining}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
        <img src="/leaf-4.svg" alt="Decorative leaf" className="w-8 md:w-12 mx-auto my-8"/>
          <h2 className="font-myanmar text-4xl mb-6">{content[language].location}</h2>
          <p className="text-md mb-8">Urb. La Dama de Noche, Bloque 15. 29660, Marbella</p>
          <Map />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-primary text-secondary">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Top row with language switcher and social icons */}
          <div className="flex justify-between items-center">
            {/* Language switcher */}
            <div className="font-myanmar text-xl space-x-4">
              <button
                onClick={() => setLanguage("en")}
                className={`${language === "en" ? "text-white" : "text-muted-foreground"}`}
              >
                ENG
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`${language === "es" ? "text-white" : "text-muted-foreground"}`}
              >
                ESP
              </button>
            </div>
            
            {/* Social icons */}
            <div className="flex space-x-6">
              <a href="https://www.tiktok.com/@cortesgarden" className="hover:text-muted-foreground">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/cortesgarden" className="hover:text-muted-foreground">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/cortesgarden" className="hover:text-muted-foreground">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-muted-foreground">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Center row with policies */}
          <div className="flex justify-center space-x-8 text-sm">
            <a href="#" className="text-center hover:text-muted-foreground">{content[language].footer.privacy}</a>
            <a href="#" className="text-center hover:text-muted-foreground">{content[language].footer.legal}</a>
            <a href="#" className="text-center hover:text-muted-foreground">{content[language].footer.cookies}</a>
          </div>

          {/* Bottom row with copyright */}
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cortes Garden. {content[language].footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
