import { Index } from "solid-js";

import { MenuCategoryTitle } from "../atoms/menu-category-title";
import { MenuProduct } from "../atoms/menu-product";

export type MenuCategory = {
    title: string;
    products: ReadonlyArray<MenuProduct>;
};

type Props = MenuCategory;

export function MenuCategory(props: Props) {
    return (
        <div class="max-w-screen-md">
            <MenuCategoryTitle>{props.title}</MenuCategoryTitle>
            <ul>
                <Index each={props.products}>
                    {function renderMenuCategory(product) {
                        const { name, description, prices } = product();

                        return (
                            <MenuProduct
                                name={name}
                                description={description}
                                prices={prices}
                            />
                        );
                    }}
                </Index>
            </ul>
        </div>
    );
}
