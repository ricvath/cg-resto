import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { MenuSectionAccordion, foodSections, type MenuBuilder, type MenuItem, type MenuSection } from "@/pages/Menu";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import { AllergenIcon, DietaryLegendIcon } from "@/components/AllergenMark";
import fullMenuData from "@/data/fullMenuData.json";
import type { DietaryTag } from "@/data/menuDietaryInfo";

type SourcePrice = string | Array<[string, string]>;
type SourceItem = { n: string; p?: SourcePrice; d?: string; a?: number[]; t?: DietaryTag[] };
type SourceBuilder = { title: string; subtitle?: string; price?: string; steps: Array<{ label: string; pick?: string; extra?: string; options: string }> };
type SourceCategory = { id: string; en: string; es: string; items: SourceItem[]; builder?: SourceBuilder };
type SourceMenu = { id: "morning" | "evening" | "drinks"; label: string; categories: SourceCategory[] };

const allergens = ["Celery", "Gluten", "Crustaceans", "Eggs", "Fish", "Lupin", "Lactose", "Molluscs", "Mustard", "Nuts", "Peanuts", "Sesame", "Soya", "Sulphur dioxide"];
const allergensEs = ["Apio", "Gluten", "Crustáceos", "Huevos", "Pescado", "Altramuz", "Lactosa", "Moluscos", "Mostaza", "Frutos secos", "Cacahuetes", "Sésamo", "Soja", "Dióxido de azufre"];

const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/×/g, "x").replace(/[^a-zA-Z0-9]+/g, " ").trim().toLowerCase();
const photoAliases: Record<string, string> = {
  "desayuno andaluz": "andalusian breakfast", "desayuno catalan": "catalan breakfast",
  "desayuno ingles": "english breakfast", "desayuno mediterraneo": "mediterran breakfast",
  "croissant con mantequilla y mermelada": "croissant with butter and jam",
  "mini focaccia con allioli": "mini focaccia with allioli",
};
const currentPhotos = new Map(foodSections.flatMap((section) => section.items).filter((item) => item.image).map((item) => [normalize(item.name), { image: item.image, imageAlt: item.imageAlt ?? item.name }]));
const getPhoto = (name: string) => { const key = normalize(name); return currentPhotos.get(key) ?? currentPhotos.get(photoAliases[key]); };
const formatPrice = (price?: SourcePrice): Pick<MenuItem, "price" | "priceOptions"> => !price ? {} : typeof price === "string" ? { price } : { priceOptions: price.map(([size, amount]) => `${size} ${amount}`) };

const toSections = (menu: SourceMenu, language: Language): MenuSection[] => menu.categories.map((category) => ({
  title: language === "en" ? category.en : category.es,
  items: category.items.map((item) => ({ name: item.n, description: item.d, ...formatPrice(item.p), ...getPhoto(item.n), allergens: item.a ?? [], dietaryTags: item.t ?? [] })),
  builder: category.builder ? { title: category.builder.title, subtitle: category.builder.subtitle, price: category.builder.price, steps: category.builder.steps } satisfies MenuBuilder : undefined,
}));

const menuCopy = {
  morning: {
    en: { title: "Morning Menu", eyebrow: "From 09:00", intro: "Breakfast, salads, focaccia, pizza and garden favourites for long Marbella mornings." },
    es: { title: "Menú de Mañana", eyebrow: "Desde las 09:00", intro: "Desayunos, ensaladas, focaccia, pizza y favoritos del jardín para largas mañanas marbellíes." },
  },
  evening: {
    en: { title: "Evening Menu", eyebrow: "Dinner in the garden", intro: "Mediterranean favourites, global flavours, fish, meat and wood-fired pizzas." },
    es: { title: "Menú de Noche", eyebrow: "Cena en el jardín", intro: "Favoritos mediterráneos, sabores internacionales, pescado, carne y pizzas al horno." },
  },
  drinks: {
    en: { title: "Drinks Menu", eyebrow: "Bar & garden", intro: "Cocktails, wine, spirits, refreshments, coffee and fresh fruit shakes." },
    es: { title: "Menú de Bebidas", eyebrow: "Bar y jardín", intro: "Cócteles, vinos, licores, refrescos, café y batidos de fruta fresca." },
  },
} as const;

const StructuredMenu = ({ menuId }: { menuId: SourceMenu["id"] }) => {
  const { language } = useLanguage();
  const menu = (fullMenuData as SourceMenu[]).find((entry) => entry.id === menuId)!;
  const copy = menuCopy[menuId][language];
  const sections = toSections(menu, language);
  return (
    <div className="min-h-screen bg-[#e9e1d2] text-[#635b4f]">
      <SiteHeader />
      <header className="relative isolate overflow-hidden bg-[url('https://cg.diff.hu/wp-content/themes/cortesgarden/img/header-bg.jpg')] bg-cover bg-center px-4 pb-8 pt-[106px] text-center text-[#e9e1d2] before:absolute before:inset-0 before:-z-10 before:bg-[#0e0d0b]/65 md:pb-10 md:pt-[122px]">
        <p className="text-[11px] uppercase tracking-[0.24em] text-[#d4ae48]">{copy.eyebrow}</p>
        <h1 className="mt-2 font-display text-5xl font-medium leading-none md:text-6xl">{copy.title}</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#e9e1d2]/90">{copy.intro}</p>
        <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-[#e9e1d2]/75">{language === "en" ? "Allergen numbers are shown below each dish" : "Los números de alérgenos aparecen debajo de cada plato"}</p>
      </header>
      <main className="mx-auto w-full max-w-[1120px] px-4 py-10 lg:py-16">
        <section><MenuSectionAccordion sections={sections} reserveImageSpace priceOptionsInPriceColumn /></section>
        <section className="mt-6 border-t border-[#cfc4b2] pb-4 pt-8" aria-labelledby="allergen-guide-title">
          <h2 id="allergen-guide-title" className="flex items-center gap-4 text-[11px] uppercase tracking-[0.28em] text-[#526e4c] before:h-px before:w-6 before:bg-[#526e4c]">
            Alérgenos · Allergens
          </h2>
          <div className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {(["gf", "spicy", "veg"] as DietaryTag[]).map((tag) => {
              const tagLabels = tag === "gf" ? ["Sin gluten", "Gluten free"] : tag === "spicy" ? ["Picante", "Spicy"] : ["Vegetariana", "Vegetarian"];
              return <div key={tag} className="flex items-center gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#cfc4b2] text-[#526e4c]"><DietaryLegendIcon tag={tag} /></span><span className="font-display text-lg text-[#635b4f]">{tagLabels[0]} <span className="text-[#9a8e7c]">· {tagLabels[1]}</span></span></div>;
            })}
            {allergens.map((allergen, index) => (
              <div key={allergen} className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#cfc4b2] text-[#635b4f]"><AllergenIcon number={index + 1} /></span>
                <span className="font-display text-lg text-[#635b4f]">{index + 1}. {allergensEs[index]} <span className="text-[#9a8e7c]">· {allergen}</span></span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export const MorningMenu = () => <StructuredMenu menuId="morning" />;
export const EveningMenu = () => <StructuredMenu menuId="evening" />;
export const DrinksMenu = () => <StructuredMenu menuId="drinks" />;
