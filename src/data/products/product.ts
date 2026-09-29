import { TMenuProduct } from "../../types/menu";
import { TWeight } from "../../types/product";

type TArgs = Readonly<{
    name: TMenuProduct["name"];
    ingredients?: ReadonlyArray<string>;
    description?: TMenuProduct["description"];
    price: number;
    weight?: TWeight;
}>;

export function product({
    name,
    ingredients,
    description = null,
    price,
    weight,
}: TArgs): TMenuProduct {
    return {
        name,
        ingredients: ingredients?.join(", ") ?? null,
        description,
        variants: [
            {
                price: { value: price, currency: "ron" },
                weight: weight ?? null,
            },
        ],
    };
}
