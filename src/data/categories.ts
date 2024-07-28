import PaniniSVG from "../assets/icons/panini.svg";
import PizzaSliceSVG from "../assets/icons/pizza-slice.svg";
import PizzaWholeSVG from "../assets/icons/pizza-whole.svg";
import SaucesSVG from "../assets/icons/sauces.svg";
import { TMenu, TMenuCategory } from "../routes/menu/menu";
import { DIVERSE } from "./products/diverse";
import { PIZZAS } from "./products/pizzas";
import { SANDWICHES } from "./products/sandwiches";

const PIZZA_CATEGORY: TMenuCategory = {
    title: "PIZZA",
    icons: [PizzaSliceSVG, PizzaWholeSVG] as const,
    products: PIZZAS,
};

const SANDWICH_CATEGORY: TMenuCategory = {
    title: "SANDWICH NAPOLITAN PANUOZZO",
    icons: [PaniniSVG] as const,
    products: SANDWICHES,
};

const DIVERSE_CATEGORY: TMenuCategory = {
    title: "DIVERSE",
    icons: [SaucesSVG] as const,
    products: DIVERSE,
};

export const CATEGORIES: TMenu["categories"] = [
    PIZZA_CATEGORY,
    SANDWICH_CATEGORY,
    DIVERSE_CATEGORY,
] as const;
