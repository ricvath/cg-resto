import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { MenuSectionAccordion, batidoSections, drinkSections, foodSections, type MenuSection } from "@/pages/Menu";

const coffee: MenuSection = {
  title: "Coffee",
  items: [
    { name: "Espresso", price: "2.60€", image: "https://cg.diff.hu/wp-content/uploads/2026/08/espresso.webp", imageAlt: "Espresso" },
    { name: "Café Sólo", price: "2.60€", image: "https://cg.diff.hu/wp-content/uploads/2026/08/caf__solo.webp", imageAlt: "Café Sólo" },
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
const drinkByTitle = (title: string) => drinkSections.find((section) => section.title === title)!;

export const morningSections: MenuSection[] = [
  coffee,
  tea,
  { ...drinkByTitle("Refrescos"), title: "Soft Drinks" },
  { ...drinkByTitle("Cerveza"), title: "Beer" },
  byTitle("Breakfast"),
  desserts,
  byTitle("Starter"),
  { ...byTitle("Soup"), title: "Soups" },
  byTitle("Side Dishes"),
  { title: "Main", items: [...byTitle("Principal").items, ...byTitle("Steak").items, ...byTitle("Salad").items] },
  byTitle("Pizza"),
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

export const drinksSections: MenuSection[] = [...drinkSections, ...batidoSections];

const allergens = ["Celery", "Gluten", "Crustaceans", "Eggs", "Fish", "Lupin", "Lactose", "Molluscs", "Mustard", "Nuts", "Peanuts", "Sesame", "Soya", "Sulphur dioxide"];

const StructuredMenu = ({ title, eyebrow, intro, sections }: { title: string; eyebrow: string; intro: string; sections: MenuSection[] }) => (
  <div className="min-h-screen bg-[#e9e1d2] text-[#635b4f]">
    <SiteHeader />
    <header className="relative isolate overflow-hidden bg-[url('https://cg.diff.hu/wp-content/themes/cortesgarden/img/header-bg.jpg')] bg-cover bg-center px-4 pb-4 pt-[106px] text-center text-[#e9e1d2] before:absolute before:inset-0 before:-z-10 before:bg-[#0e0d0b]/65 md:pb-8 md:pt-[122px]">
      <h1 className="font-myanmar mb-0 text-[36px] uppercase leading-none md:text-[46px]">{title}</h1>
      <span className="sr-only">{eyebrow}. {intro}</span>
    </header>
    <main className="mx-auto grid w-full max-w-[1024px] gap-4 px-4 py-12 lg:grid-cols-[2fr_1fr] lg:py-20">
      <section>
        <MenuSectionAccordion sections={sections} reserveImageSpace priceOptionsInPriceColumn />
      </section>
      <aside className="relative isolate h-fit bg-[url('https://cg.diff.hu/wp-content/themes/cortesgarden/img/event-bg.jpg')] bg-cover bg-center p-6 text-[#e9e1d2] before:absolute before:inset-0 before:-z-10 before:bg-[#635b4f]/70 lg:sticky lg:top-[100px]">
        <h2 className="font-myanmar text-4xl uppercase">Allergens</h2>
        <ol className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm lg:grid-cols-1">
          {allergens.map((item, index) => <li key={item} className="flex items-center gap-3"><span className="grid h-6 w-6 shrink-0 place-items-center bg-[#e9e1d2] text-xs text-[#635b4f]">{index + 1}</span>{item}</li>)}
        </ol>
        <div className="mt-7 border-t border-white/15 pt-5 text-sm">Ask our team about gluten-free, spicy and vegetarian options.</div>
      </aside>
    </main>
    <SiteFooter />
  </div>
);

export const MorningMenu = () => <StructuredMenu title="Morning Menu" eyebrow="From 09:00" intro="Breakfast, coffee and the full garden menu for long Marbella mornings." sections={morningSections} />;
export const EveningMenu = () => <StructuredMenu title="Evening Menu" eyebrow="Dinner in the garden" intro="Mediterranean favourites, global flavours, steaks and wood-fired pizzas." sections={eveningSections} />;
export const DrinksMenu = () => <StructuredMenu title="Drinks Menu" eyebrow="Bar & garden" intro="Cocktails, wine, spirits, refreshments and fresh fruit shakes." sections={drinksSections} />;
