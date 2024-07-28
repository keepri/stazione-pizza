import { Accessor, Component, Index } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

import { PageTitle } from "../../components/atoms/page-title";
import { Section } from "../../components/atoms/section";
import { MenuCategory } from "../../components/molecules/menu-category";
import { CATEGORIES } from "../../data/categories";

export function Menu() {
    return (
        <>
            <PageTitle side="right">Menu</PageTitle>
            <Index each={CATEGORIES} children={renderCategories} />
        </>
    );
}

function renderCategories(category: Accessor<TMenu["categories"][number]>) {
    const { title, products, icons } = category();

    return (
        <Section>
            <MenuCategory title={title} products={products} icons={icons} />
        </Section>
    );
}

export type TMenu = {
    categories: ReadonlyArray<{
        title: string;
        products: ReadonlyArray<{
            name: string;
            description?: string;
            prices: ReadonlyArray<{
                value: number;
                currency: "ron";
                weight?: {
                    value: number;
                    unit: TMenuProductPriceWeightUnit;
                };
            }>;
        }>;
        icons: ReadonlyArray<
            string | Component<JSX.SvgSVGAttributes<SVGSVGElement>>
        >;
    }>;
};

export type TMenuCategory = Pick<TMenu, "categories">["categories"][number];
export type TMenuProduct = Pick<TMenuCategory, "products">["products"][number];
export type TMenuProductPriceWeightUnit = "milliliter" | "gram";
