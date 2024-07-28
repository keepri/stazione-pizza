import { clsx } from "clsx";
import { Accessor, Index, Show } from "solid-js";

import {
    TMenuProduct,
    TMenuProductPriceWeightUnit,
} from "../../routes/menu/menu";

type TProps = TMenuProduct;

const UNIT: Readonly<Record<TMenuProductPriceWeightUnit, string>> = {
    milliliter: "ml",
    gram: "gr",
} as const;

export function MenuProduct(props: TProps) {
    return (
        <li class="flex justify-between items-center gap-4 mb-5 font-dm-sans text-stz-dark">
            <span class="max-w-[45ch]">
                <h3 class="font-bold text-xl">{props.name}</h3>
                <Show when={Boolean(props.description)}>
                    <p class="text-sm">{props.description}</p>
                </Show>
            </span>

            <span
                class={clsx(
                    "flex justify-end items-center gap-4 w-40",
                    props.prices.length > 1 && "justify-between",
                )}
            >
                <Index each={props.prices} children={renderPrices} />
            </span>
        </li>
    );
}

function renderPrices(price: Accessor<TProps["prices"][number]>) {
    const { value, currency, weight } = price();

    return (
        <span class="text-center w-20">
            <p class="font-bold text-xl">
                {value} {currency}
            </p>
            <Show when={typeof weight === "object"}>
                <p class="text-sm">
                    {weight!.value} {UNIT[weight!.unit]}
                </p>
            </Show>
        </span>
    );
}
