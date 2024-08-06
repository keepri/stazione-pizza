export type TProduct = Readonly<{
    name: string;
    description: string | null;
    ingredients: ReadonlyArray<string> | null;
    variants: ReadonlyArray<TProductVariant>;
}>;

export type TProductVariant = Readonly<{
    price: TPrice;
    weight: TWeight | null;
}>;

export type TPrice = Readonly<{
    value: number;
    currency: "ron";
}>;

export type TWeight = Readonly<{
    value: number;
    unit: TWeightUnit;
}>;

export type TWeightUnit = "ml" | "g";
