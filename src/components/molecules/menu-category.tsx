import { Accessor, Index } from "solid-js";

import { TMenuCategory } from "../../types/menu";
import { MenuCategoryTitle } from "../atoms/menu-category-title";
import { MenuProduct } from "../atoms/menu-product";

type TProps = TMenuCategory;

export function MenuCategory(props: TProps) {
    return (
        <div
            id={props.slug!}
            class="max-w-screen-md scroll-m-20 sm:scroll-m-44"
        >
            <MenuCategoryTitle class="mb-7" icons={props.icons}>
                {props.title}
            </MenuCategoryTitle>
            <ul class="flex flex-col gap-6">
                <Index each={props.products} children={renderMenuCategory} />
            </ul>
        </div>
    );
}

function renderMenuCategory(product: Accessor<TProps["products"][number]>) {
    const { name, description, ingredients, variants } = product();

    return (
        <MenuProduct
            name={name}
            description={description}
            ingredients={ingredients}
            variants={variants}
        />
    );
}
