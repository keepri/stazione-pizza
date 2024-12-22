import { TMenuCategory } from "../../types/menu";
import {
    PROSCIUTTO_FOCACCIA,
    SALAMI_FOCACCIA,
    VEGETARIAN_FOCACCIA,
} from "./recipes";

const FOCACCIA_SIMPLA = "Focaccia simplă";
const PROSCIUTTO_FOCACCIA_NAME = "Prosciutto Focaccia";
const SALAMI_FOCACCIA_NAME = "Salami Focaccia";
const VEGETARIAN_FOCACCIA_NAME = "Vegetarian Focaccia";

export const SANDWICHES: TMenuCategory["products"] = [
    {
        name: FOCACCIA_SIMPLA,
        description: null,
        ingredients: null,
        variants: [
            {
                price: { value: 12, currency: "ron" } as const,
                weight: { value: 140, unit: "g" } as const,
            } as const,
        ] as const,
    } as const,
    {
        name: PROSCIUTTO_FOCACCIA_NAME,
        description: null,
        ingredients: PROSCIUTTO_FOCACCIA.join(", "),
        variants: [
            {
                price: { value: 23, currency: "ron" } as const,
                weight: { value: 260, unit: "g" } as const,
            } as const,
        ] as const,
    } as const,
    {
        name: SALAMI_FOCACCIA_NAME,
        description: null,
        ingredients: SALAMI_FOCACCIA.join(", "),
        variants: [
            {
                price: { value: 23, currency: "ron" } as const,
                weight: { value: 260, unit: "g" } as const,
            } as const,
        ] as const,
    } as const,
    {
        name: VEGETARIAN_FOCACCIA_NAME,
        description: null,
        ingredients: VEGETARIAN_FOCACCIA.join(", "),
        variants: [
            {
                price: { value: 21, currency: "ron" } as const,
                weight: { value: 260, unit: "g" } as const,
            } as const,
        ] as const,
    } as const,
    // RIP ✝
    // {
    //     name: "Prosciutto Panuozzo",
    //     description: null,
    //     ingredients: PANUOZZO_PROSCIUTTO.join(", "),
    //     variants: [
    //         {
    //             price: { value: 21, currency: "ron" } as const,
    //             weight: { value: 200, unit: "g" } as const,
    //         } as const,
    //     ] as const,
    // } as const,
    // {
    //     name: "Caprese Panuozzo (vegetarian)",
    //     description: null,
    //     ingredients: PANUOZZO_CAPRESE.join(", "),
    //     variants: [
    //         {
    //             price: { value: 19, currency: "ron" } as const,
    //             weight: { value: 200, unit: "g" } as const,
    //         } as const,
    //     ] as const,
    // } as const,
] as const;
