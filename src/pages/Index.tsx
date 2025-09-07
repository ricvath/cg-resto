import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram } from "lucide-react";
import Map from "@/components/Map";

const Index = () => {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const [currentMenu, setCurrentMenu] = useState<"morning" | "evening">(
    "morning"
  );

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".min-h-screen");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowFloatingCta(heroBottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine which menu to show based on Spain local time
  useEffect(() => {
    const updateMenu = () => {
      const now = new Date();
      const spainTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Europe/Madrid" })
      );
      const hour = spainTime.getHours();

      // Morning menu: 6:00 - 17:00, Evening menu: 17:00 - 6:00
      if (hour >= 6 && hour < 17) {
        setCurrentMenu("morning");
      } else {
        setCurrentMenu("evening");
      }
    };

    updateMenu();
    // Update every minute to ensure accuracy
    const interval = setInterval(updateMenu, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleMenuClick = () => {
    const menuFile =
      currentMenu === "morning"
        ? "/C.G.morning-menu.2025.07.31.pdf"
        : "/C.G.evening-menu.2025.07.31.pdf";
    window.open(menuFile, "_blank");
  };

  const content = {
    en: {
      about: {
        title: "About",
        subtitle: "Rooted in Nature. Designed for Indulgence.",
        description:
          "A hidden garden in Marbella, where Mediterranean soul meets culinary fire. Nestled among palm trees and water fountains, we offer an elegant yet relaxed dining experience with ample parking for your convenience.",
      },
      cuisine: {
        title: "Food for Every Mood",
        subtitle:
          "From fresh breakfast delights to sophisticated evening dining, our menu celebrates Mediterranean flavors with international influences:",
        menuButton: "MENU",
      },
      drinks: {
        title: "Drinks & Ambiance",
        description:
          "Enjoy craft cocktails, fresh juices, and a curated wine selection at our outdoor bar, perfectly complementing the garden atmosphere.",
      },
      familySection: {
        title: "Family Welcome",
        description:
          "Our spacious garden provides a safe, open-air environment where children can play while adults savor their dining experience.",
      },
      reserve: "RESERVE",
      steaks: "Global Fusion",
      wines: "Wines & Cocktails",
      familyDining: "Fun Dining",
      location: "Location",
      locationText: "In the heart of Marbella's Costa del Sol",
      footer: {
        privacy: "Privacy Policy",
        legal: "Legal Warning",
        cookies: "Cookies Policy",
        contact: "Contact Us",
        rights: "All rights reserved.",
      },
    },
    es: {
      about: {
        title: "Sobre Nosotros",
        subtitle: "Inspirado por la Naturaleza. Creado para el Placer.",
        description:
          "Un jardín escondido en Marbella, donde el alma mediterránea se encuentra con el fuego culinario. Rodeado de palmeras y fuentes de agua, ofrecemos una experiencia gastronómica elegante y relajada con amplio estacionamiento para su comodidad.",
      },
      cuisine: {
        title: "Comida para Todos los Gustos",
        subtitle:
          "Desde deliciosos desayunos frescos hasta cenas sofisticadas, nuestro menú celebra los sabores mediterráneos con influencias internacionales:",
        menuButton: "MENÚ",
      },
      drinks: {
        title: "Bebidas y Ambiente",
        description:
          "Disfrute de cócteles artesanales, jugos frescos y una selección de vinos curada en nuestro bar al aire libre, complementando perfectamente la atmósfera del jardín.",
      },
      familySection: {
        title: "Bienvenida Familiar",
        description:
          "Nuestro espacioso jardín proporciona un ambiente seguro al aire libre donde los niños pueden jugar mientras los adultos saborean su experiencia gastronómica.",
      },
      reserve: "RESERVAR",
      steaks: "Fusión Global",
      wines: "Vinos & Cócteles",
      familyDining: "Comida Divertida",
      location: "Ubicación",
      locationText: "En el corazón de la Costa del Sol de Marbella",
      footer: {
        privacy: "Política de Privacidad",
        legal: "Aviso Legal",
        cookies: "Política de Cookies",
        contact: "Contáctenos",
        rights: "Todos los derechos reservados.",
      },
    },
  };

  return (
    <div className="relative">
      <Hero language={language} />

      {/* Floating CTA Button */}
      {showFloatingCta && (
        <Button
          className="fixed top-4 right-4 z-50 bg-primary text-primary-foreground hover:text-muted-foreground"
          size="lg"
          onClick={() =>
            window.open(
              "https://www.opentable.es/r/cortes-garden-marbella-reservations-marbella?restref=443829&lang=en-GB&ot_source=Restaurant%20website",
              "_blank"
            )
          }
        >
          {content[language].reserve}
        </Button>
      )}

      {/* About Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src="/leaf-2.svg"
            alt="Decorative leaf"
            className="w-8 md:w-12 mx-auto my-8"
          />
          <h2 className="font-myanmar text-4xl mb-6">
            {content[language].about.title}
          </h2>
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
          <img
            src="/leaf-1.svg"
            alt="Decorative leaf"
            className="w-8 md:w-12 mx-auto my-12"
          />
          <h2 className="font-myanmar text-4xl mb-8">
            {content[language].cuisine.title}
          </h2>
          <p className="text-md mb-12">{content[language].cuisine.subtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-secondary mb-12">
            <div className="p-6 bg-[url('/food.jpg')] bg-cover bg-center shadow-sm flex items-center justify-center h-40">
              <h3 className="font-myanmar text-xl">
                {content[language].steaks}
              </h3>
            </div>
            <div className="p-6 bg-[url('/wine.jpg')] bg-cover bg-center shadow-sm flex items-center justify-center h-40">
              <h3 className="font-myanmar text-xl">
                {content[language].wines}
              </h3>
            </div>
            <div className="p-6 bg-[url('/family.jpg')] bg-cover bg-center shadow-sm flex items-center justify-center h-40">
              <h3 className="font-myanmar text-xl">
                {content[language].familyDining}
              </h3>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:text-muted-foreground"
            onClick={handleMenuClick}
          >
            {content[language].cuisine.menuButton}
          </Button>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src="/leaf-4.svg"
            alt="Decorative leaf"
            className="w-8 md:w-12 mx-auto my-8"
          />
          <h2 className="font-myanmar text-4xl mb-6">
            {content[language].location}
          </h2>
          <p className="text-md mb-8">
            Urb. La Dama de Noche, Bloque 15. 29660, Marbella
          </p>
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
                className={`${
                  language === "en" ? "text-white" : "text-muted-foreground"
                }`}
              >
                ENG
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`${
                  language === "es" ? "text-white" : "text-muted-foreground"
                }`}
              >
                ESP
              </button>
            </div>

            {/* Social icons */}
            <div className="flex space-x-6">
              <a
                href="https://www.tiktok.com/@cortesgarden" target="_blank"
                className="hover:text-muted-foreground"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/cortesgarden" target="_blank"
                className="hover:text-muted-foreground"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/cortesgarden" target="_blank"
                className="hover:text-muted-foreground"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/34622829980" target="_blank"
                className="hover:text-muted-foreground"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.6025 14.412C17.3613 14.2921 15.794 13.573 15.5529 13.4532C15.3117 13.3333 15.0706 13.3333 14.8295 13.573C14.5884 13.8127 14.1061 14.5318 13.865 14.7715C13.7444 15.0112 13.5033 15.0112 13.2621 14.8914C12.4182 14.5318 11.5742 14.0524 10.8508 13.4532C10.248 12.8539 9.64519 12.1348 9.16293 11.4157C9.04237 11.176 9.16293 10.9363 9.2835 10.8165C9.40406 10.6966 9.52463 10.4569 9.76576 10.3371C9.88632 10.2172 10.0069 9.97753 10.0069 9.85768C10.1275 9.73783 10.1275 9.49813 10.0069 9.37828C9.88632 9.25843 9.2835 7.82023 9.04237 7.22097C8.9218 6.38202 8.68067 6.38202 8.43954 6.38202H7.83672C7.59559 6.38202 7.2339 6.62172 7.11333 6.74157C6.38994 7.46067 6.02825 8.29963 6.02825 9.25843C6.14881 10.3371 6.51051 11.4157 7.2339 12.3745C8.56011 14.2921 10.248 15.8502 12.2976 16.809C12.9004 17.0487 13.3827 17.2884 13.9855 17.4082C14.5884 17.6479 15.1912 17.6479 15.9146 17.5281C16.7585 17.4082 17.4819 16.809 17.9642 16.0899C18.2053 15.6105 18.2053 15.1311 18.0847 14.6517L17.6025 14.412ZM20.6166 3.50562C15.9146 -1.16854 8.31898 -1.16854 3.61695 3.50562C-0.24113 7.34082 -0.964519 13.2135 1.68791 17.8876L0 24L6.38994 22.3221C8.19842 23.2809 10.1275 23.7603 12.0565 23.7603C18.6876 23.7603 23.9924 18.4869 23.9924 11.8951C24.113 8.77903 22.7868 5.78277 20.6166 3.50562ZM17.3613 20.2846C15.794 21.2434 13.9855 21.8427 12.0565 21.8427C10.248 21.8427 8.56011 21.3633 6.99277 20.5243L6.63107 20.2846L2.89356 21.2434L3.85808 17.6479L3.61695 17.2884C0.723389 12.4944 2.17017 6.50187 6.8722 3.50562C11.5742 0.509364 17.6025 2.06742 20.496 6.62172C23.3896 11.2959 22.0634 17.4082 17.3613 20.2846Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Center row with policies */}
          <div className="flex justify-center space-x-8 text-sm">
            <a href="#" className="text-center hover:text-muted-foreground">
              {content[language].footer.privacy}
            </a>
            <a href="#" className="text-center hover:text-muted-foreground">
              {content[language].footer.legal}
            </a>
            <a href="#" className="text-center hover:text-muted-foreground">
              {content[language].footer.cookies}
            </a>
          </div>

          {/* Bottom row with copyright */}
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cortes Garden.{" "}
            {content[language].footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
