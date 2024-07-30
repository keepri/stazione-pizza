import { TMenuCategory } from "../../routes/menu/menu";

export const DIVERSE: TMenuCategory["products"] = [
    {
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
    } as const,
    {
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
    } as const,
    {
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
    } as const,
    {
        name: "Ambalaj pizza",
        prices: [
            {
                value: 2,
                currency: "ron",
            },
        ],
    } as const,
] as const;
