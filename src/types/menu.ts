import { Component, JSX } from "solid-js";

import { TProduct } from "./product";

export type TMenu = Readonly<{
    categories: ReadonlyArray<TMenuCategory>;
}>;

export type TMenuCategory = Readonly<{
    slug: string | null;
    title: string;
    products: ReadonlyArray<TMenuProduct>;
    icons: ReadonlyArray<

    > | null;
}>;

export type TMenuProduct = Pick<TProduct, "name" | "description" | "variants"> &
    Readonly<{
        ingredients: string | null;
    }>;
