import { Flame, Leaf, WheatOff } from "lucide-react";
import type { ReactNode } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import type { DietaryTag } from "@/data/menuDietaryInfo";
import type { Language } from "@/contexts/LanguageContext";

const labels = [
  { en: "Celery", es: "Apio" }, { en: "Gluten", es: "Gluten" },
  { en: "Crustaceans", es: "Crustáceos" }, { en: "Eggs", es: "Huevos" },
  { en: "Fish", es: "Pescado" }, { en: "Lupin", es: "Altramuz" },
  { en: "Lactose", es: "Lactosa" }, { en: "Molluscs", es: "Moluscos" },
  { en: "Mustard", es: "Mostaza" }, { en: "Nuts", es: "Frutos secos" },
  { en: "Peanuts", es: "Cacahuetes" }, { en: "Sesame", es: "Sésamo" },
  { en: "Soya", es: "Soja" }, { en: "Sulphur dioxide", es: "Dióxido de azufre" },
] as const;

const paths: Record<number, string[]> = {
  1: ["M12 21V9", "M12 13c-4 0-6-2-6-6 4 0 6 2 6 6z", "M12 15c4 0 6-2 6-6-4 0-6 2-6 6z"],
  2: ["M12 21V6", "M12 10c0-2 1.5-4 3.5-4 0 2-1.5 4-3.5 4z", "M12 10c0-2-1.5-4-3.5-4 0 2 1.5 4 3.5 4z", "M12 15c0-2 1.5-4 3.5-4 0 2-1.5 4-3.5 4z", "M12 15c0-2-1.5-4-3.5-4 0 2 1.5 4 3.5 4z"],
  3: ["M12 9v8", "M9 17c-2 0-4-1.5-4-4", "M15 17c2 0 4-1.5 4-4", "M9 8 6 4", "m15 8 3-4"],
  4: ["M12 6.3c3.1 0 5.6 3.2 5.6 7.2s-2.5 7.2-5.6 7.2-5.6-3.2-5.6-7.2S8.9 6.3 12 6.3z", "M9.7 14a2.3 2.3 0 1 0 4.6 0 2.3 2.3 0 0 0-4.6 0z"],
  5: ["M3 12c3-3.6 6.6-4.8 9.5-4.8S18 9 18 12s-2.6 4.8-5.5 4.8S6 15.6 3 12z", "m18 8.6 3-2.8v12.4l-3-2.8"],
  6: ["M12 21V11", "M12 11c-3 0-5-2-5-5 3 0 5 2 5 5z", "M12 11c3 0 5-2 5-5-3 0-5 2-5 5z"],
  7: ["M9.2 3h5.6l-.9 3 1.9 3.8V19a2 2 0 0 1-2 2h-3.6a2 2 0 0 1-2-2V9.8L10.1 6z", "M8.2 13.5h7.6"],
  8: ["M12 20.5 5.2 12.4a6.8 6.8 0 0 1 13.6 0z", "M12 20.5V6.2", "m8.6 13.2 3.4-7 3.4 7"],
  9: ["M12 21c-2.9 0-4.8-2-4.8-4.9 0-2.9 1.9-3.9 1.9-6.8a2.9 2.9 0 0 1 5.8 0c0 2.9 1.9 3.9 1.9 6.8 0 2.9-1.9 4.9-4.8 4.9z", "M12 3.4V2.2"],
  10: ["M12 20.8c-3.9 0-6.8-2.9-6.8-6.8 0-4.9 2.9-8.8 6.8-10.8 3.9 2 6.8 5.9 6.8 10.8 0 3.9-2.9 6.8-6.8 6.8z", "M12 3.2v17.6"],
  11: ["M12 3.4c2.4 0 3.8 1.6 3.8 3.8s-1 2.9-1 4.8 1.4 2.9 1.4 4.8-1.4 2.9-3.3 2.9-3.8-1.4-3.8-3.8 1-3.4 1-5.3-1-2.4-1-3.4 1-3.8 2.9-3.8z", "M9.4 11.9h5.4"],
  12: ["M7.4 6.6c1.6-.9 3.4 0 4.1 1.5.7 1.6.1 3.5-1.5 4.2-1.6.8-3.4-.1-4.1-1.6-.7-1.6-.1-3.4 1.5-4.1z", "M14 9c1.6-.8 3.4 0 4.1 1.6.7 1.5.1 3.4-1.5 4.1-1.6.8-3.4 0-4.1-1.6-.7-1.5-.1-3.4 1.5-4.1z"],
  13: ["M4.8 13.8c3-3.9 8.2-5 14.4-4-1 6.2-5 9-9 9-3.1 0-5.4-2-5.4-5z", "M9.1 13h2.2", "M13.3 11.9h2.2"],
  14: ["M12 3v5.8", "M12 8.8c-3 2-4.9 5-4.9 7.9a4.9 4.9 0 0 0 9.8 0c0-2.9-1.9-5.9-4.9-7.9z", "M12 21v-3.6"],
};

export const AllergenIcon = ({ number }: { number: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
    {paths[number]?.map((path) => <path key={path} d={path} />)}
  </svg>
);

const Mark = ({ label, children, tone = "default" }: { label: string; children: ReactNode; tone?: "default" | DietaryTag }) => (
  <Popover>
    <PopoverTrigger asChild>
      <button type="button" aria-label={label} className={`grid h-[34px] w-[34px] place-items-center rounded-full border bg-[#f7f2e9] transition hover:-translate-y-0.5 hover:bg-white ${tone === "gf" ? "border-[#c7a55b] text-[#a17d2f]" : tone === "spicy" ? "border-[#ba806c] text-[#a24f35]" : tone === "veg" ? "border-[#71856b] text-[#526e4c]" : "border-[#cfc4b2] text-[#635b4f]"}`}>
        {children}
      </button>
    </PopoverTrigger>
    <PopoverContent side="top" className="w-auto border-0 bg-[#263b2b] px-3 py-2 font-sans text-[11px] uppercase tracking-[0.1em] text-[#faf7f1]">
      {label}
    </PopoverContent>
  </Popover>
);

export const AllergenMark = ({ number, language }: { number: number; language: Language }) => (
  <Mark label={`${number}. ${labels[number - 1][language]}`}><AllergenIcon number={number} /></Mark>
);

const dietaryLabels: Record<DietaryTag, Record<Language, string>> = {
  gf: { en: "Gluten-free", es: "Sin gluten" },
  spicy: { en: "Spicy", es: "Picante" },
  veg: { en: "Vegetarian", es: "Vegetariano" },
};

export const DietaryMark = ({ tag, language }: { tag: DietaryTag; language: Language }) => {
  const icon = tag === "gf" ? <WheatOff className="h-5 w-5" /> : tag === "spicy" ? <Flame className="h-5 w-5" /> : <Leaf className="h-5 w-5" />;
  return <Mark label={dietaryLabels[tag][language]} tone={tag}>{icon}</Mark>;
};

export const DietaryLegendIcon = ({ tag }: { tag: DietaryTag }) => tag === "gf"
  ? <WheatOff className="h-5 w-5" aria-hidden="true" />
  : tag === "spicy"
    ? <Flame className="h-5 w-5" aria-hidden="true" />
    : <Leaf className="h-5 w-5" aria-hidden="true" />;
