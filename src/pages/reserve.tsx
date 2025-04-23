import { useState } from "react";
import { ReservationForm } from "@/components/ReservationForm";
import { Facebook, Instagram, Mail } from "lucide-react";

const ReservePage = () => {
  const [language, setLanguage] = useState<"en" | "es">("en");

  const content = {
    en: {
      footer: {
        privacy: "Privacy Policy",
        legal: "Legal Warning",
        cookies: "Cookies Policy",
        contact: "Contact Us",
        rights: "All rights reserved."
      }
    },
    es: {
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
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      {/* Main content */}
      <main className="flex-grow">
        <ReservationForm language={language} />
      </main>

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

export default ReservePage; 