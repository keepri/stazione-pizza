import { Index } from "solid-js";

import { PageTitle } from "../../components/atoms/page-title";
import { Section } from "../../components/atoms/section";
import { MenuCategory } from "../../components/molecules/menu-category";
import { CATEGORIES } from "../../data/categories";

export function Menu() {
    return (
        <>
            <PageTitle side="right">Menu</PageTitle>
            <Index each={CATEGORIES}>
                {function renderCategories(category) {
                    const { title, products } = category();
                    return (
                        <Section class="container">
                            <MenuCategory title={title} products={products} />
                        </Section>
                    );
                }}
            </Index>
        </>
    );
}
