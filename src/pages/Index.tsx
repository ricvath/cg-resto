import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { MapPin, Utensils, Wine, Users, Facebook, Instagram, Mail } from "lucide-react";
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
        subtitle: "Arraigado en la Naturaleza. Diseñado para el Placer.",
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
          className="fixed top-8 right-8 z-50 bg-[#2C2C2C] text-white hover:bg-[#1a1a1a]"
          size="lg"
        >
          {content[language].reserve}
        </Button>
      )}

      {/* About Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-myanmar text-4xl mb-6">{content[language].about.title}</h2>
          <h3 className="font-myanmar text-2xl mb-6">
            {content[language].about.subtitle}
          </h3>
          <p className="text-lg leading-relaxed">
            {content[language].about.description}
          </p>
        </div>
      </section>

      {/* Cuisine Preview */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-myanmar text-4xl mb-8">{content[language].cuisine.title}</h2>
          <p className="text-lg mb-12">{content[language].cuisine.subtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Utensils className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-myanmar text-xl mb-2">{content[language].steaks}</h3>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Wine className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-myanmar text-xl mb-2">{content[language].wines}</h3>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Users className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-myanmar text-xl mb-2">{content[language].familyDining}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <MapPin className="w-8 h-8 mx-auto mb-4" />
          <h2 className="font-myanmar text-4xl mb-6">{content[language].location}</h2>
          <p className="text-lg mb-8">Urb. La Dama de Noche, Bloque 15. 29660, Marbella</p>
          <Map />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-2">
              <a href="#" className="block hover:text-gray-300">{content[language].footer.privacy}</a>
              <a href="#" className="block hover:text-gray-300">{content[language].footer.legal}</a>
              <a href="#" className="block hover:text-gray-300">{content[language].footer.cookies}</a>
            </div>
            <div className="space-x-4 flex justify-center items-center">
              <button
                onClick={() => setLanguage("en")}
                className={`${language === "en" ? "text-white" : "text-gray-400"}`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`${language === "es" ? "text-white" : "text-gray-400"}`}
              >
                Español
              </button>
            </div>
            <div className="flex justify-center md:justify-end space-x-6">
              <a href="#" className="hover:text-gray-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Cortes Garden. {content[language].footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
