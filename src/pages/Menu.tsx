import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  image?: string;
  imageAlt?: string;
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
const steakImage = (fileName: string) => `/menu/steak/${fileName}`;
const batidoImage = (fileName: string) => `/menu/batidos/${fileName}`;

const foodSections: MenuSection[] = [
  {
    title: "Breakfast",
    items: [
      { name: "Andalusian Breakfast", price: "12.90€", image: imageLibrary.breakfast, imageAlt: "Andalusian Breakfast" },
      { name: "Catalan Breakfast", price: "5.50€", image: imageLibrary.breakfast, imageAlt: "Catalan Breakfast" },
      { name: "English Breakfast", price: "14.90€", image: breakfastImage("english-breakfast.jpg"), imageAlt: "English Breakfast" },
      { name: "Mediterran Breakfast", price: "11.50€", image: imageLibrary.breakfast, imageAlt: "Mediterran Breakfast" },
      { name: "Croissant Maxi", price: "2.80€", image: imageLibrary.breakfast, imageAlt: "Croissant Maxi" },
      { name: "Croissant with butter and jam", price: "3.70€", image: breakfastImage("croissant-butter-jam.jpg"), imageAlt: "Croissant with butter and jam" },
      { name: "Dirty Croissant", price: "10.90€", image: breakfastImage("dirty-croissant.jpg"), imageAlt: "Dirty Croissant" },
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
    title: "Steak",
    items: [
      { name: "Tomahawk", priceOptions: ["19oz (500g) 36.00€", "35.5oz (1 kg) 69.00€"], description: "Dry-aged for 35 days, cooked on the bone for a rich smoky flavour." },
      { name: "Ribeye", priceOptions: ["8oz (226g) 27.00€", "12oz (340g) 35.00€"], description: "Cut from the rib section, the ribeye is the most tender and juicy of all the steaks." },
      { name: "Filet Steak", priceOptions: ["8oz (226g) 29.00€", "12oz (340g) 37.00€"], description: "Lean, tender cut from the center of the tenderloin. It's virtually fat-free and the finest of all the steaks.", image: steakImage("filet-steak.jpg"), imageAlt: "Filet Steak" },
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

const drinkSections: MenuSection[] = [
  {
    title: "Refrescos",
    items: [
      { name: "Refrescos", price: "(0.25l) 3.20€", description: "Coca Cola, Zero, Fanta, Tonic, Ginger Ale" },
      { name: "Aquarius, Nestea", price: "(0.33l) 3.60€" },
      { name: "Agua sin Gas", price: "(0.33l) 3.30€", description: "Mineral water still" },
      { name: "Agua con Gas", price: "(0.33l) 3.50€", description: "Mineral water sparkling" },
      { name: "Red Bull", price: "(0.33l) 4.20€" },
      { name: "Zumo de Naranja", price: "(0.33l) 4.20€", description: "Fresh orange juice" },
      { name: "Zumos", price: "(0.33l) 3.20€", description: "Apple, peach, pineapple, orange" },
    ],
  },
  {
    title: "Cerveza",
    items: [
      { name: "Victoria · Shandy · Clara", priceOptions: ["Caña (0.26l) 3.00€", "Doble (0.36l) 4.00€", "Jarra (0.5l) 5.00€"] },
      { name: "Heineken", price: "(0.25l) 3.20€" },
      { name: "San Miguel", price: "(0.25l) 3.20€" },
      { name: "Victoria 0.0%", price: "(0.33l) 4.00€" },
      { name: "Estrella Damm", price: "(0.33l) 4.00€" },
      { name: "Coronita", price: "(0.33l) 4.50€" },
      { name: "Guinness", price: "(0.50l) 5.00€" },
      { name: "Strongbow", price: "(0.50l) 5.00€" },
      { name: "Kopparberg", price: "(0.50l) 5.00€", description: "Forest fruit, lime-strawberry" },
    ],
  },
  {
    title: "Vino Blanco",
    items: [
      { name: "Blanco de la Casa", priceOptions: ["copa 4.60€", "botella 21.00€"], description: "Blanco joven, verdejo. Abadia Mercier Blanco, España" },
      { name: "El Coto", priceOptions: ["copa 4.90€", "botella 23.00€"], description: "Rioja, España" },
      { name: "Montespina", priceOptions: ["copa 5.50€", "botella 27.00€"], description: "Blanco joven, sauvignon blanc. Rueda, España" },
      { name: "Viñasol", priceOptions: ["copa 5.90€", "botella 28.00€"], description: "Parellada y garnacha. DO Catalunya, España" },
      { name: "V.Vero", priceOptions: ["copa 5.90€", "botella 28.00€"], description: "Chardonnay, España" },
      { name: "Villanueva Albariño", priceOptions: ["copa 5.90€", "botella 29.00€"], description: "Blanco seco, cosecha Galicia, España" },
      { name: "La Mona", priceOptions: ["copa 5.90€", "botella 29.00€"], description: "Moscatel, semidulce" },
      { name: "Lusco Albariño", price: "botella 65.00€", description: "Afrutado, Galicia, España" },
    ],
  },
  {
    title: "Vino Tinto",
    items: [
      { name: "Tinto de la Casa", priceOptions: ["copa 4.60€", "botella 21.00€"], description: "Tinto seco, tempranillo. Abadia Mercier Tinto, España" },
      { name: "Pata Negra", priceOptions: ["copa 5.00€", "botella 25.00€"], description: "Reserva, Valdepeñas" },
      { name: "Abadia Mantrus", priceOptions: ["copa 5.10€", "botella 25.50€"], description: "Tinto crianza. Rioja, España" },
      { name: "Monte Lagares", priceOptions: ["copa 6.30€", "botella 32.00€"], description: "Tinto crianza. Rioja, España" },
      { name: "Beronia", priceOptions: ["copa 6.50€", "botella 34.00€"], description: "Tinto crianza, tempranillo. España" },
      { name: "Fuentespina", priceOptions: ["copa 6.50€", "botella 34.00€"], description: "Tempranillo. Ribera del Duero, España" },
      { name: "D-12", priceOptions: ["copa 6.50€", "botella 34.00€"], description: "Tinto crianza" },
      { name: "Lambrusco Tinto", price: "botella 22.00€", description: "Italia" },
    ],
  },
  {
    title: "Rosado",
    items: [
      { name: "Rosé de la Casa", priceOptions: ["copa 4.60€", "botella 21.00€"], description: "Rosado seco, syrah. Abadia Mercier Rosado, España" },
      { name: "Beronia Rosé", priceOptions: ["copa 5.20€", "botella 26.00€"], description: "Rosado seco frutado. Rioja, España" },
      { name: "Lambrusco Rosado", price: "botella 22.00€", description: "Italia" },
    ],
  },
  {
    title: "Vinos Dulces",
    items: [
      { name: "Málaga Virgen", priceOptions: ["copa 4.70€", "botella 35.00€"] },
      { name: "Sangria", priceOptions: ["copa 5.00€", "botella 20.00€"] },
      { name: "Sangria Blanca", priceOptions: ["copa 5.00€", "botella 20.00€"] },
      { name: "Tinto de Verano", priceOptions: ["copa 4.70€", "botella 21.00€"] },
      { name: "Manzanilla, Tio Pepe, Osborne", priceOptions: ["copa 3.70€", "botella 29.00€"] },
    ],
  },
  {
    title: "Champán y Cava",
    items: [
      { name: "Cava de la Casa", priceOptions: ["copa 6.50€", "botella 28.00€"] },
      { name: "Freixenet Blanco", priceOptions: ["copa 8.00€", "botella 32.00€"] },
      { name: "Freixenet Negro", priceOptions: ["copa 8.00€", "botella 32.00€"] },
      { name: "Mumm Rouge Brut", price: "botella 129.00€" },
      { name: "Mumm Rosé", price: "botella 149.00€" },
      { name: "MOËT Brut", price: "botella 119.00€" },
      { name: "MOËT Rosé", price: "botella 149.00€" },
      { name: "Dom Perignon", price: "botella 299.00€" },
    ],
  },
  {
    title: "Cócteles",
    items: [
      { name: "Caipirinha", price: "12.00€" },
      { name: "Porn Star Martini", price: "14.00€" },
      { name: "Espresso Martini", price: "12.00€" },
      { name: "Mojito", price: "12.00€" },
      { name: "Mojito Strawberry", price: "12.00€" },
      { name: "Mojito Passion Fruit", price: "12.00€" },
      { name: "Sex on the Beach", price: "12.00€" },
      { name: "Piña Colada", price: "12.00€" },
      { name: "Cameleon Statik", price: "13.00€" },
      { name: "Pink Lady", price: "12.00€" },
      { name: "Frozen Mango Aperol Spritz", price: "12.50€" },
      { name: "Negroni", price: "12.00€" },
      { name: "Hurricane", price: "13.00€" },
      { name: "Aperol Passion Fruit Margarita", price: "12.00€" },
      { name: "Malibu Breeze", price: "12.00€" },
      { name: "Frozen Fresa Daiquiri", price: "12.00€" },
    ],
  },
  {
    title: "Copas",
    items: [
      { name: "Gin Tonic", price: "12.00€" },
      { name: "Cuba Libre", price: "12.00€" },
      { name: "Vodka & Coke", price: "12.00€" },
      { name: "Aperol Spritz", price: "11.00€" },
      { name: "Limoncello Spritz", price: "11.00€" },
    ],
  },
  {
    title: "Ron",
    items: [
      { name: "Bacardi, Cacique, Brugal, Ron Barceló, Havana Club 3", priceOptions: ["45 ml 3.50€", "90 ml 7.00€"] },
      { name: "Havana Club 5, Havana Club 7 Legendario, Captain Morgan", priceOptions: ["45 ml 4.00€", "90 ml 8.00€"] },
      { name: "Diplomatico, Zacapa", priceOptions: ["45 ml 7.00€", "90 ml 14.00€"] },
      { name: "Zacapa XO", priceOptions: ["45 ml 20.00€", "90 ml 48.00€"] },
    ],
  },
  {
    title: "Whiskey",
    items: [
      { name: "Jim Beam, J&B, Dewar's, Jameson, Ballantine's, DYC, Johnnie Walker Red, Johnnie Walker Black, Cutty Sark, Jack Daniel's", priceOptions: ["45 ml 3.50€", "90 ml 7.00€"] },
      { name: "Cardhu 12, Chivas Regal, Macallan", priceOptions: ["45 ml 6.00€", "90 ml 12.00€"] },
    ],
  },
  {
    title: "Gin",
    items: [
      { name: "Larios/Rosé, Gordons/Rosé, Bombay, Beefeater/Rosé", priceOptions: ["45 ml 3.50€", "90 ml 7.00€"] },
      { name: "Bombay Sapphire, Puerto de India/Rosé", priceOptions: ["45 ml 4.00€", "90 ml 8.00€"] },
      { name: "Tanqueray, Seagram's, Wint, Nordés", priceOptions: ["45 ml 5.00€", "90 ml 10.00€"] },
      { name: "Hendrick's, Roku, Citadelle, Monkey 47, Beefeater 24/Black", priceOptions: ["45 ml 5.50€", "90 ml 11.00€"] },
      { name: "The London, Bulldog", priceOptions: ["45 ml 6.00€", "90 ml 12.00€"] },
    ],
  },
  {
    title: "Vodka",
    items: [
      { name: "Smirnoff, Stolichnaya, Eristoff", priceOptions: ["45 ml 3.50€", "90 ml 7.00€"] },
      { name: "Absolut", priceOptions: ["45 ml 4.00€", "90 ml 8.00€"] },
      { name: "Grey Goose, Belvedere, Finlandia", priceOptions: ["45 ml 6.50€", "90 ml 13.00€"] },
      { name: "Beluga, Ciroc, Haku", priceOptions: ["45 ml 7.00€", "90 ml 14.00€"] },
    ],
  },
  {
    title: "Tequila",
    items: [
      { name: "Jose Cuervo Silver, Gold", priceOptions: ["45 ml 4.00€", "90 ml 8.00€"] },
      { name: "Patron Silver, Don Julio", priceOptions: ["45 ml 7.00€", "90 ml 14.00€"] },
    ],
  },
  {
    title: "Cognac",
    items: [
      { name: "Soberano, 103, Magno", priceOptions: ["45 ml 3.50€", "90 ml 7.00€"] },
      { name: "Carlos I", priceOptions: ["45 ml 4.50€", "90 ml 9.00€"] },
      { name: "Hennessy, Remy Martin, Grand Marnier", priceOptions: ["45 ml 5.50€", "90 ml 11.00€"] },
    ],
  },
  {
    title: "Licores",
    items: [
      { name: "Limoncello, Cointreau, Licor 43, Pacharán, Malibu, Baileys, Ricard, Disaronno Amaretto, Ruavieja Hierbas, Tia Maria, Triple Sec, Sambuca, Jägermeister, Martini Dry/Blanco/Rosso, Vodka Caramel, Campari", priceOptions: ["45 ml 3.50€", "90 ml 7.00€"] },
    ],
  },
];

const batidoSections: MenuSection[] = [
  {
    title: "Batidos Naturales",
    items: [
      { name: "Caribbean Passion", price: "5.90€", description: "Mango, papaya, pineapple", image: batidoImage("caribbean-passion.jpg"), imageAlt: "Caribbean Passion smoothie" },
      { name: "Vitality", price: "5.90€", description: "Banana, strawberry", image: batidoImage("vitality.jpg"), imageAlt: "Vitality smoothie" },
      { name: "Tropical Heaven", price: "5.90€", description: "Melon, mango, kiwi, pineapple", image: batidoImage("tropical-heaven.jpg"), imageAlt: "Tropical Heaven smoothie" },
      { name: "Dragon Fruit Mix", price: "5.90€", description: "Mango, strawberry, dragon fruit", image: batidoImage("dragon-fruit-mix.jpg"), imageAlt: "Dragon Fruit Mix smoothie" },
      { name: "Berries Paradise", price: "5.90€", description: "Mango, cherry, blueberry, strawberry", image: batidoImage("berries-paradise.jpg"), imageAlt: "Berries Paradise smoothie" },
      { name: "Delightful", price: "5.90€", description: "Banana, blueberry, mango, acai", image: batidoImage("delightful.jpg"), imageAlt: "Delightful smoothie" },
      { name: "Colada Jungle", price: "5.90€", description: "Banana, coconut, pineapple", image: batidoImage("colada-jungle.jpg"), imageAlt: "Colada Jungle smoothie" },
      { name: "Green Power", price: "5.90€", description: "Cucumber, kale, pineapple, spinach", image: batidoImage("green-power.jpg"), imageAlt: "Green Power smoothie" },
    ],
  },
  {
    title: "Batidos con Leche",
    items: [
      { name: "Cookies & Cream", price: "5.90€", description: "Vanilla ice cream with chunks of dark chocolate biscuit", image: batidoImage("cookies-cream.jpg"), imageAlt: "Cookies and Cream milkshake" },
      { name: "Strawberry Fantasy", price: "5.90€", description: "Vanilla ice cream combined with strawberries", image: batidoImage("strawberry-fantasy.jpg"), imageAlt: "Strawberry Fantasy milkshake" },
      { name: "Salted Caramel Dream", price: "5.90€", description: "Vanilla ice cream with salted caramel", image: batidoImage("salted-caramel-dream.jpg"), imageAlt: "Salted Caramel Dream milkshake" },
      { name: "Bananalicious", price: "5.90€", description: "Sweet banana and vanilla ice cream", image: batidoImage("bananalicious.jpg"), imageAlt: "Bananalicious milkshake" },
      { name: "Vanilla Dream", price: "5.90€", description: "Creamy vanilla ice cream", image: batidoImage("vanilla-dream.jpg"), imageAlt: "Vanilla Dream milkshake" },
      { name: "Pure Chocolate", price: "5.90€", description: "Vanilla ice cream and 60% chocolate", image: batidoImage("pure-chocolate.jpg"), imageAlt: "Pure Chocolate milkshake" },
      { name: "Royal Vanilla Proteinshake", price: "6.50€", description: "+25gr protein, sugar & fat free, 272 kcal", image: batidoImage("royal-vanilla-proteinshake.jpg"), imageAlt: "Royal Vanilla protein shake" },
      { name: "Choco-Coco Proteinshake", price: "6.50€", description: "+25gr protein, sugar & fat free, 272 kcal", image: batidoImage("choco-coco-proteinshake.jpg"), imageAlt: "Choco-Coco protein shake" },
    ],
  },
];

const MenuImageDialog = ({
  item,
}: {
  item: MenuItem & Required<Pick<MenuItem, "image" | "imageAlt">>;
}) => (
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

const MenuItemRow = ({
  item,
  sectionTitle,
  reserveImageSpace = false,
  priceOptionsInPriceColumn = false,
}: {
  item: MenuItem;
  sectionTitle: string;
  reserveImageSpace?: boolean;
  priceOptionsInPriceColumn?: boolean;
}) => (
  <div
    className={`grid items-start gap-4 py-4 ${
      item.image
        ? "grid-cols-[56px_1fr_auto]"
        : `grid-cols-[1fr_auto] ${reserveImageSpace ? "md:pl-[72px]" : ""}`
    }`}
  >
    {item.image && item.imageAlt && (
      <MenuImageDialog
        item={{
          ...item,
          image: item.image,
          imageAlt: item.imageAlt,
        }}
      />
    )}
    <div className="min-w-0">
      <h3 className="font-myanmar text-lg font-normal leading-snug tracking-[0.16em] md:text-xl">
        {item.name}
      </h3>
      {item.description && (
        <p className="mt-1 max-w-xl text-sm leading-5 text-muted-foreground md:text-base">
          {item.description}
        </p>
      )}
      {item.priceOptions && !priceOptionsInPriceColumn && (
        <div className="mt-3 grid max-w-sm gap-1 text-sm text-primary md:text-base">
          {item.priceOptions.map((option) => (
            <span
              key={`${sectionTitle}-${item.name}-${option}`}
              className="font-myanmar tracking-[0.12em]"
            >
              {option}
            </span>
          ))}
        </div>
      )}
    </div>
    {(item.price || (item.priceOptions && priceOptionsInPriceColumn)) && (
      <div className="font-myanmar grid min-w-[96px] gap-1 pt-1 text-right text-base text-primary md:min-w-[150px] md:text-lg">
        {item.price && <span>{item.price}</span>}
        {item.priceOptions && priceOptionsInPriceColumn && (
          <>
            {item.priceOptions.map((option) => (
              <span key={`${sectionTitle}-${item.name}-${option}`}>
                {option}
              </span>
            ))}
          </>
        )}
      </div>
    )}
  </div>
);

const MenuSectionAccordion = ({
  sections,
  reserveImageSpace = false,
  priceOptionsInPriceColumn = false,
}: {
  sections: MenuSection[];
  reserveImageSpace?: boolean;
  priceOptionsInPriceColumn?: boolean;
}) => (
  <Accordion type="multiple" className="border-t border-primary/20">
    {sections.map((section) => (
      <AccordionItem
        key={section.title}
        value={section.title}
        className="border-primary/20"
      >
        <AccordionTrigger className="group py-6 text-left hover:no-underline md:py-8">
          <div className="flex w-full items-center justify-between gap-4 pr-4">
            <h2 className="font-myanmar text-3xl leading-none tracking-[0.16em] md:text-5xl">
              {section.title}
            </h2>
            <span className="shrink-0 text-xs uppercase tracking-[0.28em] text-muted-foreground md:text-sm">
              {section.items.length} items
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pb-8">
          <div className="divide-y divide-primary/15">
            {section.items.map((item) => (
              <MenuItemRow
                key={`${section.title}-${item.name}`}
                item={item}
                sectionTitle={section.title}
                reserveImageSpace={reserveImageSpace}
                priceOptionsInPriceColumn={priceOptionsInPriceColumn}
              />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
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
              A la carte dishes, drinks and batidos from the garden table. Tap
              any photo to see it larger, then close it to return here.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <Accordion
          type="single"
          collapsible
          className="mx-auto max-w-5xl border-t border-primary/20"
        >
          <AccordionItem value="A la Carte" className="border-primary/20">
            <AccordionTrigger className="group py-7 text-left hover:no-underline md:py-9">
              <div className="flex w-full items-center justify-between gap-4 pr-4">
                <h2 className="font-myanmar text-3xl leading-none tracking-[0.12em] md:text-6xl md:tracking-[0.18em]">
                  A la Carte
                </h2>
                <span className="shrink-0 text-xs uppercase tracking-[0.28em] text-muted-foreground md:text-sm">
                  {foodSections.length} sections
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-10">
              <MenuSectionAccordion sections={foodSections} reserveImageSpace />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="Bebidas" className="border-primary/20">
            <AccordionTrigger className="group py-7 text-left hover:no-underline md:py-9">
              <div className="flex w-full items-center justify-between gap-4 pr-4">
                <h2 className="font-myanmar text-3xl leading-none tracking-[0.12em] md:text-6xl md:tracking-[0.18em]">
                  Bebidas
                </h2>
                <span className="shrink-0 text-xs uppercase tracking-[0.28em] text-muted-foreground md:text-sm">
                  {drinkSections.length} sections
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-10">
              <MenuSectionAccordion
                sections={drinkSections}
                priceOptionsInPriceColumn
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="Batidos" className="border-primary/20">
            <AccordionTrigger className="group py-7 text-left hover:no-underline md:py-9">
              <div className="flex w-full items-center justify-between gap-4 pr-4">
                <h2 className="font-myanmar text-3xl leading-none tracking-[0.12em] md:text-6xl md:tracking-[0.18em]">
                  Batidos
                </h2>
                <span className="shrink-0 text-xs uppercase tracking-[0.28em] text-muted-foreground md:text-sm">
                  {batidoSections.length} sections
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-10">
              <MenuSectionAccordion
                sections={batidoSections}
                reserveImageSpace
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
};

export default Menu;
