import { Accessor, Index, Show } from "solid-js";

import { PageTitle } from "../../components/atoms/page-title";
import { P } from "../../components/atoms/paragraph";
import { Section } from "../../components/atoms/section";
import { MenuCategory } from "../../components/molecules/menu-category";
import { CATEGORIES } from "../../data/categories";
import { TMenu } from "../../types/menu";

const NUMBER_OF_CATEGORIES = CATEGORIES.length;

export function Menu() {
    return (
        <>
            <PageTitle side="right">Menu</PageTitle>
            <Index each={CATEGORIES} children={renderCategories} />
        </>
    );
}

function renderCategories(
    category: Accessor<TMenu["categories"][number]>,
    index: number,
) {
    const isLast = index === NUMBER_OF_CATEGORIES - 1;
    const { slug, title, products, icons } = category();

    return (
        <Section class={isLast ? "max-sm:pb-24 sm:pb-32" : undefined}>
            <MenuCategory
                slug={slug}
                title={title}
                products={products}
                icons={icons}
            />
            <Show when={isLast}>
                <P class="opacity-50 mt-10">Toate prețurile sunt în RON.</P>
            </Show>
        </Section>
    );
}
