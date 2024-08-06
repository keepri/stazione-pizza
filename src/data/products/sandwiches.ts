import { TMenuCategory } from "../../types/menu";
import { PANUOZZO_CAPRESE, PANUOZZO_PROSCIUTTO } from "./recipes";

export const SANDWICHES: TMenuCategory["products"] = [
    {
        name: "Prosciutto Panuozzo",
        description: null,
        ingredients: PANUOZZO_PROSCIUTTO.join(", "),
        variants: [
            {
                name: null,
                price: { value: 21, currency: "ron" } as const,
                weight: { value: 200, unit: "g" } as const,
            } as const,
        ] as const,
    } as const,
    {
        name: "Caprese Panuozzo (vegetarian)",
        description: null,
        ingredients: PANUOZZO_CAPRESE.join(", "),
        variants: [
            {
                name: null,
                price: { value: 19, currency: "ron" } as const,
                weight: { value: 200, unit: "g" } as const,
            } as const,
        ] as const,
    } as const,
] as const;
