export type DietaryTag = "gf" | "spicy" | "veg";

export type MenuDietaryInfo = {
  allergens: number[];
  tags: DietaryTag[];
};

const dietaryInfo: Record<string, MenuDietaryInfo> = {
  "alitas de pollo bbq con patatas fritas": { allergens: [2, 9, 12], tags: ["spicy"] },
  andaluz: { allergens: [2, 7], tags: ["spicy"] },
  aztec: { allergens: [4, 9], tags: [] },
  "basket 3x3": { allergens: [2, 3, 4, 5, 7, 8, 9], tags: [] },
  bolognese: { allergens: [2, 7], tags: [] },
  "calamar frito entero": { allergens: [2, 8], tags: [] },
  caprichosa: { allergens: [2, 7], tags: [] },
  "churros con chocolate": { allergens: [2, 7], tags: [] },
  "codillo de cerdo asado al horno 500g": { allergens: [2, 3, 4, 7, 8, 9, 13], tags: [] },
  "costillas de cerdo ahumado 500g": { allergens: [2, 3, 4, 7, 8, 9, 13], tags: [] },
  "costillas de ternera ahumado 500g": { allergens: [2, 3, 4, 7, 8, 9, 13], tags: [] },
  "coulant de chocolate con helado": { allergens: [2, 4, 7], tags: [] },
  "croissant maxi": { allergens: [2, 7], tags: [] },
  "croissant con crema de pistacho": { allergens: [2, 4, 7, 10], tags: [] },
  "dirty croissant": { allergens: [2, 4, 7], tags: [] },
  "edamames fritos": { allergens: [12, 13], tags: ["veg", "spicy"] },
  "ensalada bbq pulled pork": { allergens: [2, 7, 9, 10], tags: [] },
  "ensalada cortes": { allergens: [7, 10, 14], tags: ["veg"] },
  "ensalada kalamata": { allergens: [7], tags: ["veg"] },
  "ensalada mediterranean quinoa": { allergens: [7, 10], tags: ["veg"] },
  "espagueti bolonesa": { allergens: [2, 7], tags: [] },
  "espagueti gamba scampi": { allergens: [2, 3], tags: [] },
  "filete de salmon ahumado 350g": { allergens: [5, 7, 9, 13], tags: [] },
  "frutti di mare": { allergens: [2, 3, 7, 8], tags: [] },
  "gambas pil pil": { allergens: [3], tags: ["spicy"] },
  gazpacho: { allergens: [2], tags: ["veg"] },
  hawaiana: { allergens: [2, 7], tags: [] },
  "helado ice cream": { allergens: [7], tags: [] },
  "kansas bbq pulled chicken": { allergens: [2, 7, 9], tags: [] },
  "langostino en tempura": { allergens: [2, 3], tags: [] },
  lumpia: { allergens: [2, 3, 4, 5, 7, 8], tags: [] },
  margherita: { allergens: [2, 7], tags: ["veg"] },
  "mini focaccia con allioli": { allergens: [2, 4], tags: [] },
  "muffin chocolate": { allergens: [2, 7], tags: [] },
  napolitana: { allergens: [2, 7], tags: ["veg"] },
  prosciutto: { allergens: [2, 7], tags: [] },
  "quatro formaggi": { allergens: [2, 4, 7], tags: ["veg"] },
  "quatro staggioni": { allergens: [2, 7], tags: [] },
  "salami picante": { allergens: [2, 7], tags: ["spicy"] },
  "salami picante gorgonzola": { allergens: [2, 7], tags: ["spicy"] },
  salmorejo: { allergens: [2, 4], tags: ["veg"] },
  "salmon al horno con gambones": { allergens: [3, 5], tags: [] },
  "salsas sauces": { allergens: [4, 9], tags: [] },
  "satay king prawn": { allergens: [3, 11, 13], tags: [] },
  serrano: { allergens: [2, 7], tags: [] },
  sinangag: { allergens: [4, 13], tags: [] },
  syrniki: { allergens: [2, 4, 7], tags: [] },
  "sesamo tataki atun": { allergens: [5, 12, 13], tags: [] },
  "tabla de guacamole": { allergens: [2], tags: ["veg"] },
  "tabla de jamon y queso": { allergens: [7, 14], tags: [] },
  "tarta sueca de almendras": { allergens: [4, 7, 10], tags: ["gf"] },
  "tarta de chocolate": { allergens: [2, 4, 7], tags: [] },
  "tarta de manzana": { allergens: [2, 4, 7, 13], tags: [] },
  "tarta de queso fresa": { allergens: [2, 4, 7], tags: [] },
  "tarta de zanahoria": { allergens: [2, 4, 7, 10, 13], tags: [] },
  "texas bbq pulled pork": { allergens: [2, 7, 9], tags: [] },
  "tiras de pollo": { allergens: [2, 4], tags: [] },
  tonno: { allergens: [2, 5, 7], tags: [] },
  trufa: { allergens: [2, 4, 7], tags: ["veg"] },
  vegetariana: { allergens: [2, 7], tags: ["veg"] },
};

const aliases: Record<string, string> = {
  "andalusian breakfast": "desayuno andaluz",
  "catalan breakfast": "desayuno catalan",
  "english breakfast": "desayuno ingles",
  "mediterran breakfast": "desayuno mediterraneo",
  "croissant with butter and jam": "croissant con mantequilla y mermelada",
  "mini focaccia with allioli": "mini focaccia con allioli",
};

const aliasInfo: Record<string, MenuDietaryInfo> = {
  "desayuno andaluz": { allergens: [2, 4, 5], tags: [] },
  "desayuno catalan": { allergens: [2], tags: [] },
  "desayuno ingles": { allergens: [2, 4, 7], tags: [] },
  "desayuno mediterraneo": { allergens: [2, 7], tags: [] },
  "croissant con mantequilla y mermelada": { allergens: [2, 7], tags: [] },
};

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/×/g, "x")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .toLowerCase();

export const getMenuDietaryInfo = (name: string) => {
  const normalizedName = normalize(name);
  const lookupName = aliases[normalizedName] ?? normalizedName;
  return dietaryInfo[lookupName] ?? aliasInfo[lookupName];
};
