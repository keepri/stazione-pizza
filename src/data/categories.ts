import PaniniSVG from "../assets/icons/panini.svg";
import PizzaSliceSVG from "../assets/icons/pizza-slice.svg";
import PizzaWholeSVG from "../assets/icons/pizza-whole.svg";
import SaucesSVG from "../assets/icons/sauces.svg";
import { TMenu } from "../types/menu";
import { DIVERSE } from "./products/diverse";
import { PIZZAS, PIZZA_SLICES, SPECIAL_PIZZAS } from "./products/pizzas";
import { SANDWICHES } from "./products/sandwiches";

const PIZZA_TITLE = "PIZZA CLASICE";
const SPECIAL_PIZZA_TITLE = "PIZZA SPECIALE";
const SANDWICH_TITLE = "SANDWICH";
const PIZZA_SLICE_TITLE = "PIZZA LA FELIE";
const DIVERSE_TITLE = "DIVERSE";

export const CATEGORIES: TMenu["categories"] = [
    {
        slug: "pizza-clasice",
        title: PIZZA_TITLE,
        icons: [PizzaWholeSVG] as const,
        products: PIZZAS,
    } as const,
    {
        slug: "pizza-speciale",
        title: SPECIAL_PIZZA_TITLE,
        icons: [PizzaWholeSVG] as const,
        products: SPECIAL_PIZZAS,
    } as const,
    {
        slug: "sandwich",
        title: SANDWICH_TITLE,
        icons: [PaniniSVG] as const,
        products: SANDWICHES,
    } as const,
    {
        slug: "pizza-la-felie",
        title: PIZZA_SLICE_TITLE,
        icons: [PizzaSliceSVG] as const,
        products: PIZZA_SLICES,
    } as const,
    {
        slug: "diverse",
        title: DIVERSE_TITLE,
        icons: [SaucesSVG] as const,
        products: DIVERSE,
    } as const,
] as const;
