import { clsx } from "clsx";
import { Accessor, Index, Show } from "solid-js";

import { TMenuProduct } from "../../types/menu";
import { TWeightUnit } from "../../types/product";
import {
    MENU_DOUBLE_ICON_WIDTH,
    MENU_SINGLE_ICON_WIDTH,
} from "../../utils/constants";
import { isObject } from "../../utils/object";

type TProps = TMenuProduct;

const UNIT: Readonly<Record<TWeightUnit, string>> = {
    ml: "ml",
    g: "gr",
} as const;

export function MenuProduct(props: TProps) {
    const numberOfVariants = props.variants.length;

    const hasIngredients = Boolean(props.ingredients);
    const hasDescription = Boolean(props.description);
    const hasVariants = props.variants.length > 1;

    return (
        <li class="flex items-start justify-between gap-4 font-dm-sans text-stz-dark">
            <div class="max-w-[45ch]">
                <h3 class="text-xl font-bold">{props.name}</h3>
                <Show when={hasIngredients}>
                    <p class="text-sm">{props.ingredients}</p>
                </Show>
                <Show when={hasDescription}>
                    <p class={clsx(hasIngredients && "mt-2")}>
                        {props.description}
                    </p>
                </Show>
            </div>

            <div
                class={clsx(
                    "flex items-center justify-end gap-2",
                    hasVariants && "justify-around",
                    numberOfVariants === 2
                        ? `w-${MENU_DOUBLE_ICON_WIDTH}`
                        : `w-${MENU_SINGLE_ICON_WIDTH}`,
                )}
            >
                <Index each={props.variants} children={renderVariants} />
            </div>
        </li>
    );
}

function renderVariants(variant: Accessor<TProps["variants"][number]>) {
    const {
        price: { value: priceValue },
        weight,
    } = variant();

    return (
        <div class="w-20 text-center">
            <p class="text-xl font-bold">{priceValue}</p>
            <Show when={isObject(weight)}>
                <p class="text-sm">
                    {weight!.value}
                    {UNIT[weight!.unit]}
                </p>
            </Show>
        </div>
    );
}
