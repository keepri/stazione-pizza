import { TMenuCategory } from "../../types/menu";
import { product } from "./product";
import { SOS_ALB, SOS_ROSII_PICANT } from "./recipes";

export const DIVERSE: TMenuCategory["products"] = [
    product({
        name: "Sos roșii dulce",
        price: 5,
        weight: { value: 50, unit: "ml" },
    }),
    product({
        name: "Sos roșii picant",
        ingredients: SOS_ROSII_PICANT,
        price: 5,
        weight: { value: 50, unit: "ml" },
    }),
    product({
        name: "Sos alb",
        ingredients: SOS_ALB,
        price: 5,
        weight: { value: 50, unit: "ml" },
    }),
    product({
        name: "Ulei picant / cu usturoi",
        description: "Ulei măsline aromatizat",
        price: 5,
    }),
    product({ name: "Cutie pizza", price: 2 }),
];
