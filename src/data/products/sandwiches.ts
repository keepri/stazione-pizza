import { TMenuCategory } from "../../types/menu";
import {
    CAPRESE_PANUOZZO,
    PROSCIUTTO_PANUOZZO,
    SALAMI_PANUOZZO,
} from "./recipes";

const PAINE_NAPOLETANA_NAME = "Pâinică napoletană";
const PROSCIUTTO_PANUOZZO_NAME = "Prosciutto Panuozzo";
const SALAMI_PANUOZZO_NAME = "Salami Panuozzo";
const CAPRESE_PANUOZZO_NAME = "Caprese Panuozzo";

export const SANDWICHES: TMenuCategory["products"] = [
    {
        name: PAINE_NAPOLETANA_NAME,
        description: null,
        ingredients: null,
        variants: [
            {
                price: { value: 10, currency: "ron" } as const,
                weight: { value: 120, unit: "g" } as const,
            } as const,
        ] as const,
    } as const,
    {
        name: PROSCIUTTO_PANUOZZO_NAME,
        description: null,
        ingredients: PROSCIUTTO_PANUOZZO.join(", "),
        variants: [
            {
                price: { value: 23, currency: "ron" } as const,
                weight: { value: 260, unit: "g" } as const,
            } as const,
        ] as const,
    } as const,
    {
        name: SALAMI_PANUOZZO_NAME,
        description: null,
        ingredients: SALAMI_PANUOZZO.join(", "),
        variants: [
            {
                price: { value: 23, currency: "ron" } as const,
                weight: { value: 260, unit: "g" } as const,
            } as const,
        ] as const,
    } as const,
    {
        name: CAPRESE_PANUOZZO_NAME,
        description: null,
        ingredients: CAPRESE_PANUOZZO.join(", "),
        variants: [
            {
                price: { value: 21, currency: "ron" } as const,
                weight: { value: 260, unit: "g" } as const,
            } as const,
        ] as const,
    } as const,
] as const;
