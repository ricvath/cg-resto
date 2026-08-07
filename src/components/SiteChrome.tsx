import { useState } from "react";
import { Facebook, Instagram, Menu, Phone, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const navItems = [
  [{ en: "Morning Menu", es: "Menú de Mañana" }, "/morning-menu"],
  [{ en: "Evening Menu", es: "Menú de Noche" }, "/evening-menu"],
  [{ en: "Drinks Menu", es: "Menú de Bebidas" }, "/drinks-menu"],
  [{ en: "Events", es: "Eventos" }, "/events"],
  [{ en: "Gallery", es: "Galería" }, "/gallery"],
] as const;

const bookingUrl = "https://widget.thefork.com/en-GB/a268eafa-2b04-408f-873e-f54390fb3fdd?step=date&utm_source=cortesgarden.com";

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const reserveLabel = language === "en" ? "Reserve a table" : "Reservar mesa";

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#e9e1d2]/25 bg-[#0e0d0b]/40 text-[#e9e1d2] backdrop-blur-[8px]">
      <div className="mx-auto flex min-h-[82px] w-full max-w-[1024px] items-center gap-4 px-4">
        <Link to="/" className="mr-auto shrink-0" aria-label="Cortes Garden Marbella home">
          <img src="/logo.svg" alt="Cortes Garden Marbella" className="h-[61px] w-[91px] object-contain" />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <NavLink key={href} to={href} className={({ isActive }) => `text-base leading-none transition hover:text-[#e9e1d2] ${isActive ? "text-[#e9e1d2]" : "text-[#635b4f]"}`}>
              {label[language]}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center border border-[#e9e1d2]/35 text-xs lg:flex" aria-label="Language">
          {(["en", "es"] as const).map((code) => <button key={code} onClick={() => setLanguage(code)} className={`px-2 py-1.5 transition ${language === code ? "bg-[#e9e1d2] text-[#0e0d0b]" : "text-[#e9e1d2] hover:bg-white/10"}`} aria-pressed={language === code}>{code.toUpperCase()}</button>)}
        </div>
        <Button className="hidden h-auto rounded-none bg-[#e9e1d2] px-3 py-2 text-sm uppercase text-[#0e0d0b] hover:bg-[#cbb895] lg:inline-flex" onClick={() => window.open(bookingUrl, "_blank")}>{reserveLabel}</Button>
        <button className="grid h-12 w-12 place-items-center lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[#0e0d0b]/95 px-4 pb-6 lg:hidden">
          <nav className="grid" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => <NavLink key={href} to={href} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 text-lg">{label[language]}</NavLink>)}
          </nav>
          <div className="mt-5 grid grid-cols-2 border border-[#e9e1d2]/35" aria-label="Language">
            {(["en", "es"] as const).map((code) => <button key={code} onClick={() => setLanguage(code)} className={`py-3 text-sm ${language === code ? "bg-[#e9e1d2] text-[#0e0d0b]" : "text-[#e9e1d2]"}`} aria-pressed={language === code}>{code === "en" ? "English" : "Español"}</button>)}
          </div>
          <Button className="mt-3 w-full rounded-none bg-[#e9e1d2] text-[#0e0d0b]" onClick={() => window.open(bookingUrl, "_blank")}>{reserveLabel}</Button>
        </div>
      )}
    </header>
  );
};

export const SiteFooter = () => {
  const { language } = useLanguage();
  return (
  <footer className="bg-[#0e0d0b] px-4 py-12 text-sm text-[#635b4f]">
    <div className="mx-auto grid max-w-[1024px] gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
      <div>
        <img src="/logo.svg" alt="Cortes Garden Marbella" className="h-auto w-36 object-contain" />
      </div>
      <div className="space-y-3 text-sm">
        <a href="tel:+34622829980" className="flex items-center gap-2 text-lg"><Phone className="h-4 w-4" /> +34 622 82 99 80</a>
        <p className="text-[#e9e1d2]">{language === "en" ? "Open from 9 AM till 1 AM" : "Abierto de 9:00 a 1:00"}</p>
        <p>{language === "en" ? "Every day" : "Todos los días"}</p>
      </div>
      <div>
        <div className="flex gap-5">
          <a href="https://www.facebook.com/cortesgarden" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a>
          <a href="https://www.instagram.com/cortesgarden/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
          <a href="https://wa.me/34622829980" target="_blank" rel="noreferrer" aria-label="WhatsApp"><img src="/whatsapp.svg" alt="" className="h-6 w-6 brightness-0 invert" /></a>
        </div>
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs">
          <a href="https://cg.diff.hu/privacy-policy/">{language === "en" ? "Privacy Policy" : "Política de privacidad"}</a>
          <a href="https://cg.diff.hu/legal-warning/">{language === "en" ? "Legal Warning" : "Aviso legal"}</a>
          <a href="https://cg.diff.hu/cookies-policy/">{language === "en" ? "Cookies Policy" : "Política de cookies"}</a>
        </div>
      </div>
    </div>
    <p className="mx-auto mt-10 max-w-[1024px] border-t border-white/10 pt-6 text-xs">© Cortes Garden Marbella · {new Date().getFullYear()} · {language === "en" ? "All Rights Reserved" : "Todos los derechos reservados"}</p>
  </footer>
  );
};
