import { TMenuCategory, TMenuProduct } from "../../routes/menu/menu";

export const SOS_ROSII: TMenuProduct = {
    name: "Sos roșii",
    description: "dulce / picant",
    prices: [
        {
            value: 4,
            currency: "ron",
            weight: {
                value: 50,
                unit: "milliliter",
            },
        },
    ],
} as const;

export const SOS_ALB: TMenuProduct = {
    name: "Sos alb",
    description: "iaurt, maoineză, usturoi",
    prices: [
        {
            value: 4,
            currency: "ron",
            weight: {
                value: 50,
                unit: "milliliter",
            },
        },
    ],
} as const;

export const ULEI_AROMATIZAT: TMenuProduct = {
    name: "Ulei aromatizat",
    description: "picant / usturoi",
    prices: [
        {
            value: 4,
            currency: "ron",
            weight: {
                value: 50,
                unit: "milliliter",
            },
        },
    ],
} as const;

export const AMBALAJ_PIZZA: TMenuProduct = {
    name: "Ambalaj pizza",
    prices: [
        {
            value: 2,
            currency: "ron",
        },
    ],
} as const;

export const DIVERSE: TMenuCategory["products"] = [
    SOS_ROSII,
    SOS_ALB,
    ULEI_AROMATIZAT,
    AMBALAJ_PIZZA,
];
