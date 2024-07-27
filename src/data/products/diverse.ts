import { Props as MenuCategoryProps } from "../../components/molecules/menu-category";

type MenuCategoryProducts = Readonly<MenuCategoryProps["products"]>;
type MenuCategoryProduct = MenuCategoryProducts[number];

export const SOS_ROSII: MenuCategoryProduct = {
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

export const SOS_ALB: MenuCategoryProduct = {
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

export const ULEI_AROMATIZAT: MenuCategoryProduct = {
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

export const AMBALAJ_PIZZA: MenuCategoryProduct = {
    name: "Ambalaj pizza",
    prices: [
        {
            value: 2,
            currency: "ron",
        },
    ],
} as const;

export const DIVERSE: MenuCategoryProducts = [
    SOS_ROSII,
    SOS_ALB,
    ULEI_AROMATIZAT,
    AMBALAJ_PIZZA,
];
