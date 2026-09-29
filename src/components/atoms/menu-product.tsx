import { clsx } from "clsx";
import { Accessor, Index, Show } from "solid-js";

import { TMenuProduct } from "../../types/menu";
import { TWeightUnit } from "../../types/product";
import { isObject } from "../../utils/objects";
import { P } from "./paragraph";

type TProps = TMenuProduct;

const UNIT: Readonly<Record<TWeightUnit, string>> = {
    ml: "ml",
    g: "gr",
} as const;

export function MenuProduct(props: TProps) {
    const hasIngredients = Boolean(props.ingredients);
    const hasDescription = Boolean(props.description);

    return (
        <li class="flex items-start justify-between gap-4 font-dm-sans text-stz-dark sm:items-center">
            <div class="max-w-[45ch]">
                <h3 class="text-xl font-bold">{props.name}</h3>
                <Show when={hasIngredients}>
                    <P class="!text-sm">{props.ingredients}</P>
                </Show>
                <Show when={hasDescription}>
                    <P class={clsx(hasIngredients && "mt-2")}>
                        {props.description}
                    </P>
                </Show>
            </div>

            <div class="flex items-center justify-end gap-4">
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
            <P class="font-bold sm:text-xl">{priceValue}</P>
            <Show when={isObject(weight)}>
                <P class="!text-xs">
                    {[weight!.value].flat().join("–")}
                    {UNIT[weight!.unit]}
                </P>
            </Show>
        </div>
    );
}
