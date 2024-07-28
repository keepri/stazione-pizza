import { TMenuCategory, TMenuProduct } from "../../routes/menu/menu";

export const PROSCIUTTO_PANUOZZO: TMenuProduct = {
    name: "Prosciutto Panuozzo",
    description:
        "mozzarella fior di latte, roșii, rucola, prosciutto cotto, ulei masline",
    prices: [
        {
            value: 21,
            currency: "ron",
            weight: {
                value: 200,
                unit: "gram",
            },
        },
    ],
} as const;

export const CAPRESE_PANUOZZO: TMenuProduct = {
    name: "Caprese Panuozzo (vegetarian)",
    description: "mozzarella fior di latte, roșii, ulei măsline, busuioc",
    prices: [
        {
            value: 19,
            currency: "ron",
            weight: {
                value: 200,
                unit: "gram",
            },
        },
    ],
} as const;

export const SANDWICHES: TMenuCategory["products"] = [
    PROSCIUTTO_PANUOZZO,
    CAPRESE_PANUOZZO,
];
