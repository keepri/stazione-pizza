import { clsx } from "clsx";
import { Accessor, Index, Show } from "solid-js";

import { TMenuProduct } from "../../types/menu";
import { TWeightUnit } from "../../types/product";
import { isObject } from "../../utils/object";

type TProps = TMenuProduct;

const UNIT: Readonly<Record<TWeightUnit, string>> = {
    ml: "ml",
    g: "gr",
} as const;

const WIDTH = 20;

export function MenuProduct(props: TProps) {
    const numberOfVariants = props.variants.length;

    return (
        <li class="mb-5 flex items-center justify-between gap-4 font-dm-sans text-stz-dark">
            <div class="max-w-[45ch]">
                <h3 class="text-xl font-bold">{props.name}</h3>
                <Show when={Boolean(props.ingredients)}>
                    <p class="text-sm">{props.ingredients}</p>
                </Show>
                <Show when={Boolean(props.description)}>
                    <p class="mt-2">{props.description}</p>
                </Show>
            </div>

            <div
                class={clsx(
                    "flex items-center justify-end gap-2",
                    props.variants.length > 1 && "justify-around",
                    `w-${WIDTH * numberOfVariants}`,
                )}
            >
                <Index each={props.variants} children={renderVariants} />
            </div>
        </li>
    );
}

function renderVariants(variant: Accessor<TProps["variants"][number]>) {
    const {
        price: { value: priceValue, currency },
        weight,
    } = variant();

    return (
        <div class={clsx("text-center", `w-${WIDTH}`)}>
            <p class="text-xl font-bold">
                {priceValue} {currency}
            </p>
            <Show when={isObject(weight)}>
                <p class="text-sm">
                    {weight!.value} {UNIT[weight!.unit]}
                </p>
            </Show>
        </div>
    );
}
