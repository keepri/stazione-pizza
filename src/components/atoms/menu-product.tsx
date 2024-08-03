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

const WIDTH = 20;

export function MenuProduct(props: TProps) {
    const numberOfPrices = props.prices.length;

    return (
        <li class="mb-5 flex items-center justify-between gap-4 font-dm-sans text-stz-dark">
            <div class="max-w-[45ch]">
                <h3 class="text-xl font-bold">{props.name}</h3>
                <Show when={Boolean(props.description)}>
                    <p class="text-sm">{props.description}</p>
                </Show>
            </div>

            <div
                class={clsx(
                    "flex items-center justify-end gap-2",
                    props.prices.length > 1 && "justify-around",
                    `w-${WIDTH * numberOfPrices}`,
                )}
            >
                <Index each={props.prices} children={renderPrices} />
            </div>
        </li>
    );
}

function renderPrices(price: Accessor<TProps["prices"][number]>) {
    const { value, currency, weight } = price();

    return (
        <div class={clsx("text-center", `w-${WIDTH}`)}>
            <p class="text-xl font-bold">
                {value} {currency}
            </p>
            <Show when={typeof weight === "object"}>
                <p class="text-sm">
                    {weight!.value} {UNIT[weight!.unit]}
                </p>
            </Show>
        </div>
    );
}
