import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { MenuSectionAccordion, batidoSections, drinkSections, foodSections, type MenuSection } from "@/pages/Menu";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

const coffee: MenuSection = {
  title: "Coffee",
  items: [
    { name: "Espresso", price: "2.60€" },
    { name: "Café Sólo", price: "2.60€" },
    { name: "Cortado", price: "2.60€" },
    { name: "Café con Leche", priceOptions: ["M 2.90€", "L 3.60€"] },
    { name: "Matcha Latte", price: "4.50€" },
    { name: "Matcha Iced Latte", price: "5.00€" },
    { name: "Americano", priceOptions: ["M 2.60€", "L 3.20€"] },
    { name: "Cappuccino · Special Latte", price: "4.50€", description: "Caramel, vanilla or hazelnut" },
    { name: "Latte Macchiato", price: "3.00€" },
    { name: "Café Irlandés", price: "6.70€" },
    { name: "Frappé Griego", price: "5.00€" },
    { name: "Chocolate Caliente", price: "3.90€" },
    { name: "Colacao", price: "3.70€" },
  ],
};

const tea: MenuSection = {
  title: "Tea",
  items: [
    { name: "Té Verde · Green Tea", price: "3.50€", description: "China gunpowder, Pai Mu Tan" },
    { name: "Té Rojo · Red Tea", price: "3.50€", description: "Esbetic, Pu-erh" },
    { name: "Té Fruta/Herbal · Fruit/Herbal", price: "3.50€", description: "Rooibos, poleo-menta, strawberry cream, forest fruits, camomile, lime blossom" },
    { name: "Té Negro · Black Tea", price: "3.50€", description: "Indian Darjeeling, English Breakfast" },
    { name: "Chai Latte", price: "4.50€" },
    { name: "Té Helado · Iced Tea", priceOptions: ["0.4l 3.90€", "0.6l 5.50€", "1l 9.00€"], description: "Classic lemon or passion fruit" },
    { name: "Lemonade", priceOptions: ["0.4l 3.90€", "0.6l 5.50€", "1l 9.00€"], description: "Classic lemon, mint, strawberry, blackcurrant, ginger, lavender or elderflower" },
  ],
};

const desserts: MenuSection = {
  title: "Desserts",
  items: [
    { name: "Tarta de Manzana", price: "7.50€", description: "Apple cake" },
    { name: "Tarta de Chocolate", price: "7.50€", description: "Chocolate cake" },
    { name: "Tarta de Queso Fresa", price: "7.50€", description: "Strawberry cheesecake" },
    { name: "Tarta de Zanahoria", price: "7.50€", description: "Carrot cake" },
    { name: "Tarta Sueca de Almendras", price: "7.50€", description: "Swedish almond cake" },
    { name: "Muffin Chocolate", price: "3.00€" },
    { name: "Churros con Chocolate", price: "7.50€", description: "Churros with chocolate" },
    { name: "Croissant con Crema de Pistacho", price: "6.50€", description: "Croissant with pistachio cream" },
    { name: "Coulant de Chocolate con Helado", price: "7.50€", description: "Lava cake with vanilla ice cream" },
    {
      name: "Helado · Ice Cream",
      price: "5.50€",
      description: "Royal vanilla ice cream base in four flavours: strawberry biscuit cake with marshmallows; passion fruit with pineapple bits; Oreo chocolate combo; or toffee caramel with crushed almond.",
    },
  ],
};

const byTitle = (title: string) => foodSections.find((section) => section.title === title)!;

export const morningSections: MenuSection[] = [
  byTitle("Breakfast"),
  byTitle("Starter"),
  { ...byTitle("Soup"), title: "Soups" },
  byTitle("Side Dishes"),
  { ...byTitle("Principal"), title: "Main" },
  byTitle("Steak"),
  { ...byTitle("Salad"), title: "Salads" },
  byTitle("Pizza"),
  desserts,
];

export const eveningSections: MenuSection[] = [
  byTitle("Starter"),
  byTitle("Soup"),
  byTitle("Side Dishes"),
  byTitle("Principal"),
  byTitle("Steak"),
  byTitle("Salad"),
  byTitle("Pizza"),
  desserts,
];

export const drinksSections: MenuSection[] = [coffee, tea, ...drinkSections, ...batidoSections];

const allergens = ["Celery", "Gluten", "Crustaceans", "Eggs", "Fish", "Lupin", "Lactose", "Molluscs", "Mustard", "Nuts", "Peanuts", "Sesame", "Soya", "Sulphur dioxide"];
const allergensEs = ["Apio", "Gluten", "Crustáceos", "Huevos", "Pescado", "Altramuz", "Lactosa", "Moluscos", "Mostaza", "Frutos secos", "Cacahuetes", "Sésamo", "Soja", "Dióxido de azufre"];

const sectionLabels: Record<string, Record<Language, string>> = {
  Coffee: { en: "Coffee", es: "Café" }, Tea: { en: "Tea", es: "Té" }, Breakfast: { en: "Breakfast", es: "Desayuno" },
  Desserts: { en: "Desserts", es: "Postres" }, Starter: { en: "Starters", es: "Entrantes" }, Soup: { en: "Soup", es: "Sopa" },
  "Side Dishes": { en: "Side Dishes", es: "Guarniciones" }, Main: { en: "Main", es: "Principales" }, Principal: { en: "Main", es: "Principales" },
  Steak: { en: "Steak", es: "Carnes" }, Salad: { en: "Salads", es: "Ensaladas" }, Salads: { en: "Salads", es: "Ensaladas" }, Pizza: { en: "Pizza", es: "Pizza" },
  Refrescos: { en: "Soft Drinks", es: "Refrescos" }, Cerveza: { en: "Beer", es: "Cerveza" }, "Vino Blanco": { en: "White Wine", es: "Vino Blanco" },
  "Vino Tinto": { en: "Red Wine", es: "Vino Tinto" }, Rosado: { en: "Rosé Wine", es: "Vino Rosado" }, "Vinos Dulces": { en: "Sweet Wines", es: "Vinos Dulces" },
  "Champán y Cava": { en: "Champagne & Cava", es: "Champán y Cava" }, "Cócteles": { en: "Cocktails", es: "Cócteles" }, Copas: { en: "Spirits", es: "Copas" },
  Ron: { en: "Rum", es: "Ron" }, Whiskey: { en: "Whiskey", es: "Whiskey" }, Gin: { en: "Gin", es: "Gin" }, Vodka: { en: "Vodka", es: "Vodka" },
  Tequila: { en: "Tequila", es: "Tequila" }, Cognac: { en: "Cognac", es: "Coñac" }, Licores: { en: "Liqueurs", es: "Licores" },
  "Batidos Naturales": { en: "Fresh Fruit Shakes", es: "Batidos Naturales" }, "Batidos con Leche": { en: "Milkshakes", es: "Batidos con Leche" },
};

const StructuredMenu = ({ title, titleEs, eyebrow, intro, sections }: { title: string; titleEs: string; eyebrow: string; intro: string; sections: MenuSection[] }) => {
  const { language } = useLanguage();
  const localizedSections = sections.map((section) => ({ ...section, title: sectionLabels[section.title]?.[language] ?? section.title }));
  const localizedAllergens = language === "en" ? allergens : allergensEs;
  return (
  <div className="min-h-screen bg-[#e9e1d2] text-[#635b4f]">
    <SiteHeader />
    <header className="relative isolate overflow-hidden bg-[url('https://cg.diff.hu/wp-content/themes/cortesgarden/img/header-bg.jpg')] bg-cover bg-center px-4 pb-4 pt-[106px] text-center text-[#e9e1d2] before:absolute before:inset-0 before:-z-10 before:bg-[#0e0d0b]/65 md:pb-8 md:pt-[122px]">
      <h1 className="font-myanmar mb-0 text-[36px] uppercase leading-none md:text-[46px]">{language === "en" ? title : titleEs}</h1>
      <span className="sr-only">{eyebrow}. {intro}</span>
    </header>
    <main className="mx-auto grid w-full max-w-[1024px] gap-4 px-4 py-12 lg:grid-cols-[2fr_1fr] lg:py-20">
      <section>
        <MenuSectionAccordion sections={localizedSections} reserveImageSpace priceOptionsInPriceColumn />
      </section>
      <aside className="relative isolate h-fit bg-[url('https://cg.diff.hu/wp-content/themes/cortesgarden/img/event-bg.jpg')] bg-cover bg-center p-6 text-[#e9e1d2] before:absolute before:inset-0 before:-z-10 before:bg-[#635b4f]/70 lg:sticky lg:top-[100px]">
        <h2 className="font-myanmar text-4xl uppercase">{language === "en" ? "Allergens" : "Alérgenos"}</h2>
        <ol className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm lg:grid-cols-1">
          {localizedAllergens.map((item, index) => <li key={item} className="flex items-center gap-3"><span className="grid h-6 w-6 shrink-0 place-items-center bg-[#e9e1d2] text-xs text-[#635b4f]">{index + 1}</span>{item}</li>)}
        </ol>
        <div className="mt-7 border-t border-white/15 pt-5 text-sm">{language === "en" ? "Ask our team about gluten-free, spicy and vegetarian options." : "Consulta a nuestro equipo sobre opciones sin gluten, picantes y vegetarianas."}</div>
      </aside>
    </main>
    <SiteFooter />
  </div>
  );
};

export const MorningMenu = () => <StructuredMenu title="Morning Menu" titleEs="Menú de Mañana" eyebrow="From 09:00" intro="Breakfast, coffee and the full garden menu for long Marbella mornings." sections={morningSections} />;
export const EveningMenu = () => <StructuredMenu title="Evening Menu" titleEs="Menú de Noche" eyebrow="Dinner in the garden" intro="Mediterranean favourites, global flavours, steaks and wood-fired pizzas." sections={eveningSections} />;
export const DrinksMenu = () => <StructuredMenu title="Drinks Menu" titleEs="Menú de Bebidas" eyebrow="Bar & garden" intro="Cocktails, wine, spirits, refreshments and fresh fruit shakes." sections={drinksSections} />;
