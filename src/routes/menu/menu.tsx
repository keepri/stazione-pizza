import { Accessor, Index } from "solid-js";

import { PageTitle } from "../../components/atoms/page-title";
import { Section } from "../../components/atoms/section";
import { MenuCategory } from "../../components/molecules/menu-category";
import { CATEGORIES } from "../../data/categories";
import { TMenu } from "../../types/menu";

export function Menu() {
    return (
        <>
            <PageTitle side="right">Menu</PageTitle>
            <Index each={CATEGORIES} children={renderCategories} />
        </>
    );
}

function renderCategories(category: Accessor<TMenu["categories"][number]>) {
    const { slug, title, products, icons } = category();

    return (
        <Section>
            <MenuCategory
                slug={slug}
                title={title}
                products={products}
                icons={icons}
            />
        </Section>
    );
}
