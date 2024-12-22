import { TMenuCategory } from "../../types/menu";
import {
    BAMBINO,
    CAPRICCIOSA,
    CARNIVORA,
    DIAVOLA,
    HAWAII,
    MARGHERITA,
    MARINARA,
    PROSCIUTTO_E_FUNGHI,
    QUATRO_FORMAGGI,
    TONNO_E_CIPOLLA,
} from "./recipes";

const MARINARA_NAME = "Marinara (post)";
const MARGHERITA_NAME = "Margherita";
const PROSCIUTTO_E_FUNGHI_NAME = "Prosciutto e Funghi";
const BAMBINO_NAME = "Bambino";
const DIAVOLA_NAME = "Diavola";
const CARNIVORA_NAME = "Carnivora";
const HAWAII_NAME = "Hawaii";
const TONNO_E_CIPOLLA_NAME = "Tonno e Cipolla";
const CAPRICCIOSA_NAME = "Capricciosa";
const QUATRO_FORMAGGI_NAME = "Quattro Formaggi";

export const PIZZAS: TMenuCategory["products"] = [
    {
        name: MARINARA_NAME,
        ingredients: MARINARA.join(", "),
        description: null,
        variants: [
            {
                price: { value: 7, currency: "ron" } as const,
                weight: { value: 100, unit: "g" } as const,
            } as const,
            {
                price: { value: 28, currency: "ron" } as const,
                weight: { value: 400, unit: "g" } as const,
            } as const,
        ] as const,
    } as const,
    {
        name: MARGHERITA_NAME,
        ingredients: MARGHERITA.join(", "),
        description: null,
        variants: [
            {
                price: { value: 8, currency: "ron" } as const,
                weight: { value: 120, unit: "g" } as const,
            } as const,
            {
                price: { value: 32, currency: "ron" } as const,
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
                price: { value: 9, currency: "ron" } as const,
                weight: { value: 130, unit: "g" } as const,
            } as const,
            {
                price: { value: 36, currency: "ron" } as const,
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
                price: { value: 9, currency: "ron" } as const,
                weight: { value: 130, unit: "g" } as const,
            } as const,
            {
                price: { value: 36, currency: "ron" } as const,
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
                price: { value: 9, currency: "ron" } as const,
                weight: { value: 130, unit: "g" } as const,
            } as const,
            {
                price: { value: 36, currency: "ron" } as const,
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
                price: { value: 10, currency: "ron" } as const,
                weight: { value: 130, unit: "g" } as const,
            } as const,
            {
                price: { value: 40, currency: "ron" } as const,
                weight: { value: 520, unit: "g" } as const,
            } as const,
        ] as const,
    } as const,
    {
        name: HAWAII_NAME,
        ingredients: HAWAII.join(", "),
        description: null,
        variants: [
            {
                price: { value: 9, currency: "ron" } as const,
                weight: { value: 130, unit: "g" } as const,
            } as const,
            {
                price: { value: 36, currency: "ron" } as const,
                weight: { value: 520, unit: "g" } as const,
            } as const,
        ] as const,
    } as const,
    {
        name: TONNO_E_CIPOLLA_NAME,
        ingredients: TONNO_E_CIPOLLA.join(", "),
        description: null,
        variants: [
            {
                price: { value: 9, currency: "ron" } as const,
                weight: { value: 130, unit: "g" } as const,
            } as const,
            {
                price: { value: 36, currency: "ron" } as const,
                weight: { value: 520, unit: "g" } as const,
            } as const,
        ] as const,
    } as const,
    {
        name: CAPRICCIOSA_NAME,
        ingredients: CAPRICCIOSA.join(", "),
        description: null,
        variants: [
            {
                price: { value: 10, currency: "ron" } as const,
                weight: { value: 140, unit: "g" } as const,
            } as const,
            {
                price: { value: 40, currency: "ron" } as const,
                weight: { value: 560, unit: "g" } as const,
            } as const,
        ] as const,
    } as const,
    {
        name: QUATRO_FORMAGGI_NAME,
        ingredients: QUATRO_FORMAGGI.join(", "),
        description: null,
        variants: [
            {
                price: { value: 9, currency: "ron" } as const,
                weight: { value: 130, unit: "g" } as const,
            } as const,
            {
                price: { value: 36, currency: "ron" } as const,
                weight: { value: 520, unit: "g" } as const,
            } as const,
        ] as const,
    } as const,
] as const;
