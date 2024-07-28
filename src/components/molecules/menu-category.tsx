import { Accessor, Index } from "solid-js";

import { TMenuCategory } from "../../routes/menu/menu";
import { MenuCategoryTitle } from "../atoms/menu-category-title";
import { MenuProduct } from "../atoms/menu-product";

type TProps = TMenuCategory;

export function MenuCategory(props: TProps) {
    return (
        <div class="max-w-screen-md">
            <MenuCategoryTitle icons={props.icons}>
                {props.title}
            </MenuCategoryTitle>
            <ul>
                <Index each={props.products} children={renderMenuCategory} />
            </ul>
        </div>
    );
}

function renderMenuCategory(product: Accessor<TProps["products"][number]>) {
    const { name, description, prices } = product();

    return (
        <MenuProduct name={name} description={description} prices={prices} />
    );
}
