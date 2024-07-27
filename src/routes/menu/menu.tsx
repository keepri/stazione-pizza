import { Accessor, Index } from "solid-js";

import { PageTitle } from "../../components/atoms/page-title";
import { Section } from "../../components/atoms/section";
import {
    MenuCategory,
    Props as MenuCategoryProps,
} from "../../components/molecules/menu-category";
import { CATEGORIES } from "../../data/categories";

export function Menu() {
    return (
        <>
            <PageTitle side="right">Menu</PageTitle>
            <Index each={CATEGORIES} children={renderCategories} />
        </>
    );
}

function renderCategories(category: Accessor<MenuCategoryProps>) {
    const { title, products } = category();

    return (
        <Section class="container">
            <MenuCategory title={title} products={products} />
        </Section>
    );
}
