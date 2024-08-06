import { TMenuCategory } from "../../types/menu";
import {
    BAMBINO,
    CARNIVORA,
    DIAVOLA,
    MARGHERITA,
    PROSCIUTTO_E_FUNGHI,
} from "./recipes";

const MARGHERITA_NAME = "Margherita";
const PROSCIUTTO_E_FUNGHI_NAME = "Prosciutto e Funghi";
const DIAVOLA_NAME = "Diavola";
const BAMBINO_NAME = "Bambino";
const CARNIVORA_NAME = "Carnivora";

export const PIZZAS: TMenuCategory["products"] = [
    {
        name: MARGHERITA_NAME,
        ingredients: MARGHERITA.join(", "),
        description: null,
        variants: [
            {
                price: { value: 7, currency: "ron" } as const,
                weight: { value: 120, unit: "g" } as const,
            } as const,
            {
                price: { value: 28, currency: "ron" } as const,
                weight: { value: 480, unit: "g" } as const,
            } as const,
        ] as const,
    } as const,
    {
        name: PROSCIUTTO_E_FUNGHI_NAME,
        ingredients: PROSCIUTTO_E_FUNGHI.join(", "),
        description: null,
        variants: [
            {
                price: { value: 8, currency: "ron" } as const,
                weight: { value: 130, unit: "g" } as const,
            } as const,
            {
                price: { value: 32, currency: "ron" } as const,
                weight: { value: 520, unit: "g" } as const,
            } as const,
        ] as const,
    } as const,
    {
        name: DIAVOLA_NAME,
        ingredients: DIAVOLA.join(", "),
        description: null,
        variants: [
            {
                price: { value: 8, currency: "ron" } as const,
                weight: { value: 130, unit: "g" } as const,
            } as const,
            {
                price: { value: 32, currency: "ron" } as const,
                weight: { value: 520, unit: "g" } as const,
            } as const,
        ] as const,
    } as const,
    {
        name: BAMBINO_NAME,
        ingredients: BAMBINO.join(", "),
        description: null,
        variants: [
            {
                price: { value: 8, currency: "ron" } as const,
                weight: { value: 130, unit: "g" } as const,
            } as const,
            {
                price: { value: 32, currency: "ron" } as const,
                weight: { value: 520, unit: "g" } as const,
            } as const,
        ] as const,
    } as const,
    {
        name: CARNIVORA_NAME,
        ingredients: CARNIVORA.join(", "),
        description: null,
        variants: [
            {
                price: { value: 8.5, currency: "ron" } as const,
                weight: { value: 130, unit: "g" } as const,
            } as const,
            {
                price: { value: 34, currency: "ron" } as const,
                weight: { value: 520, unit: "g" } as const,
            } as const,
        ] as const,
    } as const,
] as const;
