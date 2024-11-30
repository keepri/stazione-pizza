import { TMenuCategory } from "../../types/menu";
import { SOS_ALB } from "./recipes";

export const DIVERSE: TMenuCategory["products"] = [
    {
        name: "Sos roșii",
        description: "dulce / picant",
        ingredients: null,
        variants: [
            {
                price: { value: 4, currency: "ron" } as const,
                weight: { value: 50, unit: "ml" } as const,
            } as const,
        ] as const,
    } as const,
    {
        name: "Sos alb",
        description: null,
        ingredients: SOS_ALB.join(", "),
        variants: [
            {
                price: { value: 4, currency: "ron" } as const,
                weight: { value: 50, unit: "ml" } as const,
            } as const,
        ] as const,
    } as const,
    {
        name: "Ulei aromatizat",
        description: "picant / usturoi",
        ingredients: null,
        variants: [
            {
                price: { value: 4, currency: "ron" } as const,
                weight: { value: 50, unit: "ml" } as const,
            } as const,
        ] as const,
    } as const,
    {
        name: "Ambalaj pizza",
        description: null,
        ingredients: null,
        variants: [
            {
                price: { value: 2, currency: "ron" } as const,
                weight: null,
            } as const,
        ] as const,
    } as const,
] as const;
