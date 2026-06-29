import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type MenuItem = {
  name: string;
  price?: string;
  priceOptions?: string[];
  description?: string;
  image: string;
  imageAlt: string;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

const imageLibrary = {
  breakfast:
    "https://cortesgardenmarbella.com/wp-content/uploads/2025/11/DirtyCroissant-1024x1024.jpg",
  main:
    "https://cortesgardenmarbella.com/wp-content/uploads/2025/11/codillo-copy-867x1024.jpg",
  salad: "/food.jpg",
  pizza: "/menu/pizza/margherita.jpg",
};

const pizzaImage = (fileName: string) => `/menu/pizza/${fileName}`;
const breakfastImage = (fileName: string) => `/menu/breakfast/${fileName}`;
const saladImage = (fileName: string) => `/menu/salad/${fileName}`;
const starterImage = (fileName: string) => `/menu/starter/${fileName}`;
const sideImage = (fileName: string) => `/menu/side/${fileName}`;
const principalImage = (fileName: string) => `/menu/principal/${fileName}`;

const menuSections: MenuSection[] = [
  {
    title: "Breakfasts",
    items: [
      { name: "Andalusian Breakfast", price: "12.90€", image: imageLibrary.breakfast, imageAlt: "Andalusian Breakfast" },
      { name: "Catalan Breakfast", price: "5.50€", image: imageLibrary.breakfast, imageAlt: "Catalan Breakfast" },
      { name: "English Breakfast", price: "14.90€", image: imageLibrary.breakfast, imageAlt: "English Breakfast" },
      { name: "Mediterran Breakfast", price: "11.50€", image: imageLibrary.breakfast, imageAlt: "Mediterran Breakfast" },
      { name: "Croissant Maxi", price: "2.80€", image: imageLibrary.breakfast, imageAlt: "Croissant Maxi" },
      { name: "Croissant with butter and jam", price: "3.70€", image: breakfastImage("croissant-butter-jam.jpg"), imageAlt: "Croissant with butter and jam" },
      { name: "Dirty Croissant", price: "10.90€", image: imageLibrary.breakfast, imageAlt: "Dirty Croissant" },
      { name: "Syrniki", price: "10.90€", image: breakfastImage("syrniki.jpg"), imageAlt: "Syrniki" },
      { name: "Mediterran Benedict Egg", price: "10.90€", image: imageLibrary.breakfast, imageAlt: "Mediterran Benedict Egg" },
    ],
  },
  {
    title: "Starter",
    items: [
      { name: "Tabla de Guacamole", price: "11.00€", description: "Guacamole with toast, olives & cherry tomato", image: imageLibrary.main, imageAlt: "Tabla de Guacamole" },
      { name: "Mini Focaccia with Allioli", price: "2.50€", description: "Mini focaccia with garlic mayonnaise & home made tomato sauce", image: imageLibrary.main, imageAlt: "Mini Focaccia with Allioli" },
      { name: "Tabla de Jamon y Queso", price: "19.50€", description: "Serrano ham and cheese selection board", image: imageLibrary.main, imageAlt: "Tabla de Jamon y Queso" },
      { name: "Basket 3x3", price: "15.00€", description: "3x tempura king prawns, 3x Kentucky style chicken, 3x BBQ chicken wings, cocktail sauce, garlic mayo, BBQ sauce", image: starterImage("basket-3x3.jpg"), imageAlt: "Basket 3x3" },
      { name: "Lumpia", priceOptions: ["vegetarian 8.90€", "pork 9.90€"], description: "Traditional Filipino fried spring rolls (4pcs)", image: starterImage("lumpia.jpg"), imageAlt: "Lumpia" },
      { name: "Langostino en Tempura", price: "11.50€", description: "Tempura king prawns with kimchi mayo (5pcs)", image: starterImage("langostino-tempura.jpg"), imageAlt: "Langostino en Tempura" },
      { name: "Tiras de Pollo", price: "12.00€", description: "Kentucky style chicken with chips (5pcs) + 1 sauce", image: starterImage("tiras-de-pollo.jpg"), imageAlt: "Tiras de Pollo" },
      { name: "Edamames Fritos", price: "5.50€", description: "Fried edamame beans salted and spicy", image: starterImage("edamames-fritos.jpg"), imageAlt: "Edamames Fritos" },
    ],
  },
  {
    title: "Soup",
    items: [
      { name: "Gazpacho", price: "9.00€", description: "Cold Andalusian tomato soup", image: imageLibrary.main, imageAlt: "Gazpacho" },
      { name: "Salmorejo", price: "9.00€", description: "Cold Spanish vegetable soup", image: imageLibrary.main, imageAlt: "Salmorejo" },
    ],
  },
  {
    title: "Side Dishes",
    items: [
      { name: "Patatas Fritas", price: "5.50€", description: "French fries", image: sideImage("patatas-fritas.jpg"), imageAlt: "Patatas Fritas" },
      { name: "Patatas Steakhouse", price: "5.50€", description: "Steak potatoes", image: sideImage("patatas-steakhouse.jpg"), imageAlt: "Patatas Steakhouse" },
      { name: "Boniato Frito", price: "6.90€", description: "Sweet potato fries", image: sideImage("boniato-frito.jpg"), imageAlt: "Boniato Frito" },
      { name: "Salsas · Sauces", price: "2.50€", description: "Ketchup, mayo, garlic mayo, BBQ, chipotle mayo, roasted jalapeno mayo", image: imageLibrary.main, imageAlt: "Salsas Sauces" },
    ],
  },
  {
    title: "Principal",
    items: [
      { name: "Gambas Pil-Pil", price: "17.50€", description: "King prawns in olive oil with garlic and chili", image: principalImage("gambas-pil-pil.jpg"), imageAlt: "Gambas Pil-Pil" },
      { name: "Alitas de Pollo BBQ con Patatas Fritas", price: "19.50€", description: "Sriracha chicken wings in honey-based BBQ sauce with coleslaw & chips", image: principalImage("alitas-de-pollo.jpg"), imageAlt: "Alitas de Pollo BBQ con Patatas Fritas" },
      { name: "Espagueti Gamba Scampi", price: "20.00€", description: "King prawns spaghetti", image: principalImage("espagueti-gamba-scampi.jpg"), imageAlt: "Espagueti Gamba Scampi" },
      { name: "Espagueti Bolonesa", price: "18.00€", description: "Bologna style spaghetti", image: principalImage("espagueti-bolonesa.jpg"), imageAlt: "Espagueti Bolonesa" },
      { name: "Sinangag", priceOptions: ["beef 14.50€", "king prawns 15.50€", "beef & prawns 16.90€"], description: "Traditional Filipino garlic fried rice", image: principalImage("sinangag-beef.jpg"), imageAlt: "Sinangag" },
      { name: "Filete de Salmon Ahumado (350g)", price: "30.00€", description: "Jasmine rice, wine-orange sauce, grill vegetables and smoked grilled salmon steak", image: principalImage("filete-de-salmon-ahumado.jpg"), imageAlt: "Filete de Salmon Ahumado" },
      { name: "Salmon al Horno con Gambones", price: "31.00€", description: "Oven baked salmon with king prawns, jasmine rice and grilled vegetables", image: imageLibrary.main, imageAlt: "Salmon al Horno con Gambones" },
      { name: "Sesamo Tataki Atun", price: "22.00€", description: "Gently-seared red tuna with citrus-soy sauce, wasabi and hiyashi wakame seaweed", image: principalImage("sesamo-tataki-atun.jpg"), imageAlt: "Sesamo Tataki Atun" },
      { name: "Calamar Frito Entero", price: "22.00€", description: "Whole fried calamari in onion-tomato based marinara sauce", image: imageLibrary.main, imageAlt: "Calamar Frito Entero" },
      { name: "Costillas de Cerdo Ahumado (500g)", price: "28.75€", description: "Slow smoked BBQ spareribs, coleslaw and french fries", image: principalImage("costillas-de-cerdo.jpg"), imageAlt: "Costillas de Cerdo Ahumado" },
      { name: "Codillo de Cerdo Asado al Horno (500g)", price: "28.75€", description: "Oven baked smoked ham hock with grill vegetables and french fries", image: imageLibrary.main, imageAlt: "Codillo de Cerdo Asado al Horno" },
      { name: "Costillas de Ternera Ahumado (500g)", price: "30.00€", description: "Slow smoked BBQ beef ribs with coleslaw & french fries", image: imageLibrary.main, imageAlt: "Costillas de Ternera Ahumado" },
    ],
  },
  {
    title: "Salad",
    items: [
      { name: "Ensalada Cortes", price: "14.00€", description: "Iceberg lettuce, cherry tomato, cucumber, sweetcorn, red onion, goat cheese, raisin, nut mix, balsamic vinegar", image: saladImage("ensalada-cortes.jpg"), imageAlt: "Ensalada Cortes" },
      { name: "Ensalada Mediterranean Quinoa", price: "17.00€", description: "Quinoa, cucumber, dried tomato, black olives, chickpea, feta cheese, iceberg lettuce, arugula, shredded carrot with olive oil, lemon, pine nut", image: saladImage("ensalada-mediterranean-quinoa.jpg"), imageAlt: "Ensalada Mediterranean Quinoa" },
      { name: "Ensalada Kalamata", price: "16.00€", description: "Cherry tomato, feta, bell pepper, cucumber, red onion, kalamata olives, oregano, caper, kalamata dressing", image: saladImage("ensalada-kalamata.jpg"), imageAlt: "Ensalada Kalamata" },
      { name: "Aztec", price: "18.00€", description: "Iceberg lettuce, cherry tomato, pulled BBQ chicken, baby spinach, sweetcorn, avocado, bell pepper, red onion, pumpkin seeds, chipotle mayo", image: saladImage("aztec.jpg"), imageAlt: "Aztec salad" },
      { name: "Ensalada BBQ Pulled Pork", price: "18.50€", description: "Lettuce, pulled BBQ pork, jalapeno, bell pepper, red onion, shredded carrot, pickles, cheddar, croutons, crispy fried onion, walnut, honey BBQ dressing", image: saladImage("ensalada-bbq-pulled-pork.jpg"), imageAlt: "Ensalada BBQ Pulled Pork" },
      { name: "Satay King Prawn", price: "18.50€", description: "Quinoa, king prawns, shredded carrot, edamame beans, soybean sprouts, Chinese salad mix, bell pepper, avocado, toasted cashew, satay peanut sauce", image: saladImage("satay-king-prawn.jpg"), imageAlt: "Satay King Prawn salad" },
    ],
  },
  {
    title: "Pizza",
    items: [
      { name: "Margherita", price: "12.50€", description: "Tomato sauce, mozzarella, cherry tomato, fresh basil", image: pizzaImage("margherita.jpg"), imageAlt: "Margherita pizza" },
      { name: "Napolitana", price: "13.50€", description: "Tomato sauce, mozzarella, cherry tomato, garlic", image: pizzaImage("garlic.jpg"), imageAlt: "Napolitana pizza" },
      { name: "Vegetariana", price: "16.50€", description: "Tomato sauce, mozzarella, mushroom, black olives, artichoke, dried tomato", image: pizzaImage("alcachofa.jpg"), imageAlt: "Vegetariana pizza" },
      { name: "Salami Picante", price: "16.00€", description: "Tomato sauce, mozzarella, hot salami, chili", image: pizzaImage("salami-picante.jpg"), imageAlt: "Salami Picante pizza" },
      { name: "Salami Picante Gorgonzola", price: "16.80€", description: "Tomato sauce, mozzarella, hot salami, gorgonzola, chili", image: pizzaImage("salami-picante.jpg"), imageAlt: "Salami Picante Gorgonzola pizza" },
      { name: "Prosciutto", price: "16.00€", description: "Tomato sauce, mozzarella, Parma ham", image: pizzaImage("prosciutto.jpg"), imageAlt: "Prosciutto pizza" },
      { name: "Caprichosa", price: "16.30€", description: "Tomato sauce, mozzarella, Parma ham, mushroom", image: pizzaImage("caprichosa.jpg"), imageAlt: "Caprichosa pizza" },
      { name: "Hawaiana", price: "16.30€", description: "Tomato sauce, mozzarella, Parma ham, pineapple", image: pizzaImage("hawaiana.jpg"), imageAlt: "Hawaiana pizza" },
      { name: "Quatro Staggioni", price: "16.50€", description: "Tomato sauce, mozzarella, Parma ham, mushroom, artichoke, black olives", image: pizzaImage("alcachofa.jpg"), imageAlt: "Quatro Staggioni pizza" },
      { name: "Serrano", price: "16.50€", description: "Tomato sauce, mozzarella, Serrano ham, arugula, parmesan cheese", image: pizzaImage("serrano.jpg"), imageAlt: "Serrano pizza" },
      { name: "Quatro Formaggi", price: "16.50€", description: "Tomato sauce, mozzarella, goat cheese, gorgonzola, parmesan cheese", image: pizzaImage("quatro-formaggi.jpg"), imageAlt: "Quatro Formaggi pizza" },
      { name: "Tonno", price: "16.50€", description: "Tomato sauce, mozzarella, tuna, black olives, green caper, onion", image: pizzaImage("tonno.jpg"), imageAlt: "Tonno pizza" },
      { name: "Bolognese", price: "17.20€", description: "Tomato sauce, mozzarella, Bolognese style meat, parmesan cheese", image: pizzaImage("bolognese.jpg"), imageAlt: "Bolognese pizza" },
      { name: "Andaluz", price: "16.80€", description: "Tomato sauce, mozzarella, bacon, hot salami, onion, corn, chili", image: pizzaImage("andaluz.jpg"), imageAlt: "Andaluz pizza" },
      { name: "Texas BBQ Pulled Pork", price: "17.20€", description: "BBQ sauce, mozzarella, pulled pork, bacon, corn, onion", image: pizzaImage("chopped.jpg"), imageAlt: "Texas BBQ Pulled Pork pizza" },
      { name: "Kansas BBQ Pulled Chicken", price: "17.20€", description: "BBQ sauce, mozzarella, BBQ pulled chicken, fried onion", image: pizzaImage("chopped.jpg"), imageAlt: "Kansas BBQ Pulled Chicken pizza" },
      { name: "Gambas Pil Pil", price: "17.50€", description: "Tomato sauce, mozzarella, king prawns, garlic, cherry tomato, chili", image: pizzaImage("gambas-pil-pil.jpg"), imageAlt: "Gambas Pil Pil pizza" },
      { name: "Frutti di Mare", price: "17.50€", description: "Tomato sauce, mozzarella, prawns, mussels, octopus, calamary, garlic", image: pizzaImage("frutti-di-mare.jpg"), imageAlt: "Frutti di Mare pizza" },
      { name: "Trufa", price: "17.50€", description: "Mozzarella, truffle, egg, fresh basil", image: pizzaImage("trufa.jpg"), imageAlt: "Trufa pizza" },
    ],
  },
];

const MenuImageDialog = ({ item }: { item: MenuItem }) => (
  <Dialog>
    <DialogTrigger asChild>
      <button
        type="button"
        className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-primary/15 bg-[#e8dfcd] p-1 shadow-sm transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
        aria-label={`Show larger photo for ${item.name}`}
      >
        <img
          src={item.image}
          alt={item.imageAlt}
          className="h-full w-full rounded-full object-cover mix-blend-multiply"
          loading="lazy"
        />
      </button>
    </DialogTrigger>
    <DialogContent className="max-w-3xl border-none bg-background p-3">
      <DialogTitle className="font-myanmar pr-10 text-2xl">
        {item.name}
      </DialogTitle>
      <DialogDescription>
        Larger menu image. Close this window to return to the menu.
      </DialogDescription>
      <img
        src={item.image}
        alt={item.imageAlt}
        className="max-h-[72vh] w-full rounded-sm bg-[#e8dfcd] object-contain mix-blend-multiply"
      />
    </DialogContent>
  </Dialog>
);

const Menu = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden px-4 py-10 md:py-16">
        <div className="absolute inset-0 bg-[url('/leaf-3.svg')] bg-[length:220px] bg-left-top bg-no-repeat opacity-10" />
        <div className="relative mx-auto max-w-5xl">
          <Button asChild variant="outline" className="mb-10 border-primary/25">
            <Link to="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
          </Button>

          <div className="grid gap-8 md:grid-cols-[1fr_0.75fr] md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                Cortes Garden Marbella
              </p>
              <h1 className="font-myanmar text-5xl leading-tight md:text-7xl">
                The Menu
              </h1>
            </div>
            <p className="max-w-md text-sm leading-7 md:justify-self-end">
              Breakfasts, main courses and pizzas from the garden table. Tap any
              dish photo to see it larger, then close it to return here.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto grid max-w-5xl gap-10">
          {menuSections.map((section) => (
            <article
              key={section.title}
              className="grid gap-6 border-t border-primary/20 pt-8 md:grid-cols-[300px_1fr]"
            >
              <div className="md:sticky md:top-8 md:self-start">
                <h2 className="font-myanmar text-3xl md:text-4xl">{section.title}</h2>
              </div>

              <div className="divide-y divide-primary/15">
                {section.items.map((item) => (
                  <div
                    key={`${section.title}-${item.name}`}
                    className="grid grid-cols-[56px_1fr_auto] items-start gap-4 py-4"
                  >
                    <MenuImageDialog item={item} />
                    <div className="min-w-0">
                      <h3 className="font-myanmar text-lg font-normal leading-snug tracking-[0.16em] md:text-xl">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="mt-1 max-w-xl text-sm leading-5 text-muted-foreground md:text-base">
                          {item.description}
                        </p>
                      )}
                      {item.priceOptions && (
                        <div className="mt-3 grid max-w-sm gap-1 text-sm text-primary md:text-base">
                          {item.priceOptions.map((option) => (
                            <span key={`${item.name}-${option}`} className="font-myanmar tracking-[0.12em]">
                              {option}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    {item.price && (
                      <p className="font-myanmar pt-1 text-base text-primary md:text-lg">
                        {item.price}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Menu;
