
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { MapPin, Utensils, Wine, Family } from "lucide-react";

const Index = () => {
  const [language, setLanguage] = useState<"en" | "es">("en");

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
      family: {
        title: "Family Welcome",
        description: "Our spacious garden provides a safe, open-air environment where children can play while adults savor their dining experience.",
      },
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
      family: {
        title: "Bienvenida Familiar",
        description: "Nuestro espacioso jardín proporciona un ambiente seguro al aire libre donde los niños pueden jugar mientras los adultos saborean su experiencia gastronómica.",
      },
    },
  };

  return (
    <div className="relative">
      <Hero />
      
      {/* Sticky Reservation Button */}
      <Button
        className="fixed bottom-8 right-8 z-50 bg-[#2C2C2C] text-white hover:bg-[#1a1a1a]"
        size="lg"
      >
        Reserve a Table
      </Button>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl mb-6">{content[language].about.title}</h2>
          <h3 className="font-playfair text-2xl mb-6 text-[#4A4A4A]">
            {content[language].about.subtitle}
          </h3>
          <p className="text-lg leading-relaxed">
            {content[language].about.description}
          </p>
        </div>
      </section>

      {/* Cuisine Preview */}
      <section className="py-20 px-4 bg-[#F8F7F4]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl mb-8">{content[language].cuisine.title}</h2>
          <p className="text-lg mb-12">{content[language].cuisine.subtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Utensils className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-playfair text-xl mb-2">Steaks & Seafood</h3>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Wine className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-playfair text-xl mb-2">Fine Wines</h3>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Family className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-playfair text-xl mb-2">Family Dining</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <MapPin className="w-12 h-12 mx-auto mb-4" />
          <h2 className="font-playfair text-4xl mb-6">Location</h2>
          <p className="text-lg mb-8">In the heart of Marbella's Costa del Sol</p>
          <div className="h-[400px] bg-[#F8F7F4] rounded-lg"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#2C2C2C] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="space-x-4">
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
          </div>
          <div className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Cortes Garden. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
