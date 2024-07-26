import { MenuCategory } from "../../components/molecules/menu-category";

type MenuCategoryProducts = Readonly<MenuCategory["products"]>;
type MenuCategoryProduct = MenuCategoryProducts[number];

export const PROSCIUTTO_PANUOZZO: MenuCategoryProduct = {
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

export const CAPRESE_PANUOZZO: MenuCategoryProduct = {
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

export const SANDWICHES: MenuCategoryProducts = [
    PROSCIUTTO_PANUOZZO,
    CAPRESE_PANUOZZO,
];
