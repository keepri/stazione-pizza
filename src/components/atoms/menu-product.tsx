import { Accessor, Index, Show } from "solid-js";

export const WeightUnitMappings: Readonly<
    Record<MenuProductWeightUnit, string>
> = {
    milliliter: "ml",
    gram: "gr",
} as const;

type MenuProductWeightUnit = "milliliter" | "gram";

type MenuProductPriceCurrency = "ron";

type MenuProductPrice = {
    value: number;
    currency: MenuProductPriceCurrency;
    weight?: MenuProductWeight;
};

type MenuProductWeight = {
    value: number;
    unit: MenuProductWeightUnit;
};

export type MenuProduct = {
    name: string;
    description?: string;
    prices: ReadonlyArray<MenuProductPrice>;
};

type Props = MenuProduct;

export function MenuProduct(props: Props) {
    return (
        <li class="flex justify-between items-center mb-5 font-dm-sans text-stz-dark">
            <span class="max-w-prose pr-2">
                <h3 class="font-bold text-xl">{props.name}</h3>
                <Show when={Boolean(props.description)}>
                    <p class="text-sm">{props.description}</p>
                </Show>
            </span>
            <span class="flex justify-between items-center gap-10 pl-2">
                <Index each={props.prices} children={renderPrices} />
            </span>
        </li>
    );
}

function renderPrices(price: Accessor<Props["prices"][number]>) {
    const { value, currency, weight } = price();

    return (
        <span class="text-center">
            <p class="font-bold text-xl">
                {value} {currency}
            </p>
            <Show when={typeof weight === "object"}>
                <p class="text-sm">
                    {weight!.value} {WeightUnitMappings[weight!.unit]}
                </p>
            </Show>
        </span>
    );
}
