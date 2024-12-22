import PaniniSVG from "../assets/icons/panini.svg";
import PizzaSliceSVG from "../assets/icons/pizza-slice.svg";
import PizzaWholeSVG from "../assets/icons/pizza-whole.svg";
import SaucesSVG from "../assets/icons/sauces.svg";
import { TMenu } from "../types/menu";
import { DIVERSE } from "./products/diverse";
import { PIZZAS } from "./products/pizzas";
import { SANDWICHES } from "./products/sandwiches";

export const CATEGORIES: TMenu["categories"] = [
    {
        slug: "pizza",
        title: "PIZZA",
        icons: [PizzaSliceSVG, PizzaWholeSVG] as const,
        products: PIZZAS,
    } as const,
    {
        slug: "focaccia",
        title: "SANDWICH FOCACCIA",
        icons: [PaniniSVG] as const,
        products: SANDWICHES,
    } as const,
    {
        slug: "diverse",
        title: "DIVERSE",
        icons: [SaucesSVG] as const,
        products: DIVERSE,
    } as const,
] as const;
