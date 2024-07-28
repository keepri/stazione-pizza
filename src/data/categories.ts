import { TMenu, TMenuCategory } from "../routes/menu/menu";
import { DIVERSE } from "./products/diverse";
import { PIZZAS } from "./products/pizzas";
import { SANDWICHES } from "./products/sandwiches";

const PIZZA_CATEGORY: TMenuCategory = {
    title: "PIZZA",
    icons: [
        "src/assets/icons/pizza-slice.svg",
        "src/assets/icons/pizza-whole.svg",
    ] as const,
    products: PIZZAS,
};

const SANDWICH_CATEGORY: TMenuCategory = {
    title: "SANDWICH NAPOLITAN PANUOZZO",
    icons: ["src/assets/icons/panini.svg"] as const,
    products: SANDWICHES,
};

const DIVERSE_CATEGORY: TMenuCategory = {
    title: "DIVERSE",
    icons: [] as const,
    products: DIVERSE,
};

export const CATEGORIES: TMenu["categories"] = [
    PIZZA_CATEGORY,
    SANDWICH_CATEGORY,
    DIVERSE_CATEGORY,
] as const;
