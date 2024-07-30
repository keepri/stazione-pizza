import { TMenuCategory } from "../../routes/menu/menu";

export const PIZZAS: TMenuCategory["products"] = [
    {
        name: "Margherita",
        description:
            "sos de roșii, mozzarella fior di latte, parmesan, busuioc",
        prices: [
            {
                value: 7,
                currency: "ron",
                weight: {
                    value: 120,
                    unit: "gram",
                },
            },
            {
                value: 28,
                currency: "ron",
                weight: {
                    value: 480,
                    unit: "gram",
                },
            },
        ],
    } as const,
    {
        name: "Prosciutto e Funghi",
        description:
            "sos de roșii, mozzarella fior di latte, ciuperci brune, prosciutto cotto, busuioc",
        prices: [
            {
                value: 8,
                currency: "ron",
                weight: {
                    value: 130,
                    unit: "gram",
                },
            },
            {
                value: 32,
                currency: "ron",
                weight: {
                    value: 520,
                    unit: "gram",
                },
            },
        ],
    } as const,
    {
        name: "Diavola",
        description:
            "sos de roșii, mozzarella fior di latte, salam picant napoli, ardei iute, busuioc",
        prices: [
            {
                value: 8,
                currency: "ron",
                weight: {
                    value: 130,
                    unit: "gram",
                },
            },
            {
                value: 32,
                currency: "ron",
                weight: {
                    value: 520,
                    unit: "gram",
                },
            },
        ],
    } as const,
    {
        name: "Bambino",
        description:
            "sos de roșii, mozzarella fior di latte, prosciutto cotto, porumb, busuioc",
        prices: [
            {
                value: 8,
                currency: "ron",
                weight: {
                    value: 130,
                    unit: "gram",
                },
            },
            {
                value: 32,
                currency: "ron",
                weight: {
                    value: 520,
                    unit: "gram",
                },
            },
        ],
    } as const,
    {
        name: "Carnivora",
        description:
            "sos de roșii, mozzarella fior di latte, prosciutto cotto, salam picant napoli, carnati, busuioc",
        prices: [
            {
                value: 8.5,
                currency: "ron",
                weight: {
                    value: 130,
                    unit: "gram",
                },
            },
            {
                value: 34,
                currency: "ron",
                weight: {
                    value: 520,
                    unit: "gram",
                },
            },
        ],
    } as const,
] as const;
