import { Props as MenuCategoryProps } from "../components/molecules/menu-category";
import { DIVERSE } from "./products/diverse";
import { PIZZAS } from "./products/pizzas";
import { SANDWICHES } from "./products/sandwiches";

export const CATEGORIES: ReadonlyArray<MenuCategoryProps> = [
    {
        title: "PIZZA",
        products: PIZZAS,
    },
    {
        title: "SANDWICH NAPOLITAN PANUOZZO",
        products: SANDWICHES,
    },
    {
        title: "DIVERSE",
        products: DIVERSE,
    },
] as const;
