import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  language: "en" | "es";
}

export const Hero = ({ language }: HeroProps) => {
  const [currentMenu, setCurrentMenu] = useState<"morning" | "evening">(
    "morning"
  );

  const content = {
    en: {
      subheading: "WHERE NATURE MEETS TASTE",
      cta: "RESERVE A TABLE",
      menu: "MENU",
    },
    es: {
      subheading: "ESTAMOS ABIERTOS",
      cta: "RESERVAR MESA",
      menu: "MENÚ",
    },
  };

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

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/hero-l.jpg')] bg-cover bg-center"
        style={{ filter: "brightness(0.4)" }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center z-10 gap-4 md:gap-10 text-center p-4">
        <object
          className="w-48 md:w-72 md:mb-6 mb-2"
          type="image/svg+xml"
          data="/logo.svg"
        >
          Cortes Garden
        </object>
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
            onClick={() =>
              window.open(
                "https://www.opentable.es/r/cortes-garden-marbella-reservations-marbella?restref=443829&lang=en-GB&ot_source=Restaurant%20website",
                "_blank"
              )
            }
          >
            {content[language].cta}
          </Button>
          <a
            href="https://wa.me/34622829980"
            target="_blank"
            className="text-secondary hover:text-muted-foreground"
          >
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.6025 14.412C17.3613 14.2921 15.794 13.573 15.5529 13.4532C15.3117 13.3333 15.0706 13.3333 14.8295 13.573C14.5884 13.8127 14.1061 14.5318 13.865 14.7715C13.7444 15.0112 13.5033 15.0112 13.2621 14.8914C12.4182 14.5318 11.5742 14.0524 10.8508 13.4532C10.248 12.8539 9.64519 12.1348 9.16293 11.4157C9.04237 11.176 9.16293 10.9363 9.2835 10.8165C9.40406 10.6966 9.52463 10.4569 9.76576 10.3371C9.88632 10.2172 10.0069 9.97753 10.0069 9.85768C10.1275 9.73783 10.1275 9.49813 10.0069 9.37828C9.88632 9.25843 9.2835 7.82023 9.04237 7.22097C8.9218 6.38202 8.68067 6.38202 8.43954 6.38202H7.83672C7.59559 6.38202 7.2339 6.62172 7.11333 6.74157C6.38994 7.46067 6.02825 8.29963 6.02825 9.25843C6.14881 10.3371 6.51051 11.4157 7.2339 12.3745C8.56011 14.2921 10.248 15.8502 12.2976 16.809C12.9004 17.0487 13.3827 17.2884 13.9855 17.4082C14.5884 17.6479 15.1912 17.6479 15.9146 17.5281C16.7585 17.4082 17.4819 16.809 17.9642 16.0899C18.2053 15.6105 18.2053 15.1311 18.0847 14.6517L17.6025 14.412ZM20.6166 3.50562C15.9146 -1.16854 8.31898 -1.16854 3.61695 3.50562C-0.24113 7.34082 -0.964519 13.2135 1.68791 17.8876L0 24L6.38994 22.3221C8.19842 23.2809 10.1275 23.7603 12.0565 23.7603C18.6876 23.7603 23.9924 18.4869 23.9924 11.8951C24.113 8.77903 22.7868 5.78277 20.6166 3.50562ZM17.3613 20.2846C15.794 21.2434 13.9855 21.8427 12.0565 21.8427C10.248 21.8427 8.56011 21.3633 6.99277 20.5243L6.63107 20.2846L2.89356 21.2434L3.85808 17.6479L3.61695 17.2884C0.723389 12.4944 2.17017 6.50187 6.8722 3.50562C11.5742 0.509364 17.6025 2.06742 20.496 6.62172C23.3896 11.2959 22.0634 17.4082 17.3613 20.2846Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
