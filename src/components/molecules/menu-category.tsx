import { Accessor, Index } from "solid-js";

import { MenuCategoryTitle } from "../atoms/menu-category-title";
import { MenuProduct } from "../atoms/menu-product";

export type Props = {
    title: string;
    products: ReadonlyArray<MenuProduct>;
};

export function MenuCategory(props: Props) {
    return (
        <div class="max-w-screen-md">
            <MenuCategoryTitle icons={[]}>{props.title}</MenuCategoryTitle>
            <ul>
                <Index each={props.products} children={renderMenuCategory} />
            </ul>
        </div>
    );
}

function renderMenuCategory(product: Accessor<Props["products"][number]>) {
    const { name, description, prices } = product();

    return (
        <MenuProduct name={name} description={description} prices={prices} />
    );
}
