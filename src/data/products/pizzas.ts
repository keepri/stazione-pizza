import { TMenuCategory } from "../../types/menu";
import { product } from "./product";
import {
    BAMBINO,
    CAPRICCIOSA,
    CARCIOFI_AL_TARTUFO,
    CARNIVORA,
    CRUDO_E_RUCOLA,
    DIAVOLA,
    DIAVOLA_BLUE,
    HAWAII,
    MARGHERITA,
    MARINARA,
    PROSCIUTTO_COTTO_,
    PROSCIUTTO_E_FUNGHI,
    QUATRO_FORMAGGI,
    QUATTRO_STAGIONI,
    SALAME_DOLCE,
    SALSICCIA_AL_PESTO,
    STAZIONE,
    TONNO_E_CIPOLLA,
    VEGANA,
    VERDURA,
} from "./recipes";

const MARINARA_NAME = "Marinara (post)";
const MARGHERITA_NAME = "Margherita";
const PROSCIUTTO_E_FUNGHI_NAME = "Prosciutto e Funghi";
const PROSCIUTTO_COTTO_NAME = "Prosciutto cotto";
const BAMBINO_NAME = "Bambino";
const DIAVOLA_NAME = "Diavola";
const SALAME_DOLCE_NAME = "Salame dolce";
const QUATTRO_STAGIONI_NAME = "Quattro Stagioni";
const CARNIVORA_NAME = "Carnivora";
const CAPRICCIOSA_NAME = "Capricciosa";
const HAWAII_NAME = "Hawaii";
const TONNO_E_CIPOLLA_NAME = "Tonno e Cipolla";
const QUATRO_FORMAGGI_NAME = "Quattro Formaggi";
const VERDURA_NAME = "Verdura";
const VEGANA_NAME = "Vegana (post)";
const STAZIONE_NAME = "Stazione";
const DIAVOLA_BLUE_NAME = "Diavola Blue";
const CRUDO_E_RUCOLA_NAME = "Crudo e Rucola";
const SALSICCIA_AL_PESTO_NAME = "Salsiccia al Pesto";
const CARCIOFI_AL_TARTUFO_NAME = "Carciofi al Tartufo";
const PIZZA_LA_FELIE_NAME = "Pizza la felie";

export const PIZZAS: TMenuCategory["products"] = [
    product({
        name: MARINARA_NAME,
        ingredients: MARINARA,
        price: 32,
        weight: { value: 400, unit: "g" },
    }),
    product({
        name: MARGHERITA_NAME,
        ingredients: MARGHERITA,
        price: 36,
        weight: { value: 480, unit: "g" },
    }),
    product({
        name: PROSCIUTTO_E_FUNGHI_NAME,
        ingredients: PROSCIUTTO_E_FUNGHI,
        price: 40,
        weight: { value: 520, unit: "g" },
    }),
    product({
        name: PROSCIUTTO_COTTO_NAME,
        ingredients: PROSCIUTTO_COTTO_,
        price: 40,
        weight: { value: 520, unit: "g" },
    }),
    product({
        name: BAMBINO_NAME,
        ingredients: BAMBINO,
        price: 40,
        weight: { value: 520, unit: "g" },
    }),
    product({
        name: DIAVOLA_NAME,
        ingredients: DIAVOLA,
        price: 40,
        weight: { value: 520, unit: "g" },
    }),
    product({
        name: SALAME_DOLCE_NAME,
        ingredients: SALAME_DOLCE,
        price: 40,
        weight: { value: 520, unit: "g" },
    }),
    product({
        name: QUATTRO_STAGIONI_NAME,
        ingredients: QUATTRO_STAGIONI,
        price: 45,
        weight: { value: 540, unit: "g" },
    }),
    product({
        name: CARNIVORA_NAME,
        ingredients: CARNIVORA,
        price: 45,
        weight: { value: 540, unit: "g" },
    }),
    product({
        name: CAPRICCIOSA_NAME,
        ingredients: CAPRICCIOSA,
        price: 46,
        weight: { value: 540, unit: "g" },
    }),
    product({
        name: HAWAII_NAME,
        ingredients: HAWAII,
        price: 40,
        weight: { value: 520, unit: "g" },
    }),
    product({
        name: TONNO_E_CIPOLLA_NAME,
        ingredients: TONNO_E_CIPOLLA,
        price: 45,
        weight: { value: 520, unit: "g" },
    }),
    product({
        name: QUATRO_FORMAGGI_NAME,
        ingredients: QUATRO_FORMAGGI,
        price: 46,
        weight: { value: 520, unit: "g" },
    }),
    product({
        name: VERDURA_NAME,
        ingredients: VERDURA,
        price: 46,
        weight: { value: 500, unit: "g" },
    }),
    product({
        name: VEGANA_NAME,
        ingredients: VEGANA,
        price: 42,
        weight: { value: 480, unit: "g" },
    }),
];

export const SPECIAL_PIZZAS: TMenuCategory["products"] = [
    product({
        name: STAZIONE_NAME,
        ingredients: STAZIONE,
        price: 48,
        weight: { value: 520, unit: "g" },
    }),
    product({
        name: DIAVOLA_BLUE_NAME,
        ingredients: DIAVOLA_BLUE,
        price: 48,
        weight: { value: 520, unit: "g" },
    }),
    product({
        name: CRUDO_E_RUCOLA_NAME,
        ingredients: CRUDO_E_RUCOLA,
        price: 52,
        weight: { value: 520, unit: "g" },
    }),
    product({
        name: SALSICCIA_AL_PESTO_NAME,
        ingredients: SALSICCIA_AL_PESTO,
        price: 50,
        weight: { value: 520, unit: "g" },
    }),
    product({
        name: CARCIOFI_AL_TARTUFO_NAME,
        ingredients: CARCIOFI_AL_TARTUFO,
        price: 48,
        weight: { value: 520, unit: "g" },
    }),
];

export const PIZZA_SLICES: TMenuCategory["products"] = [
    product({
        name: PIZZA_LA_FELIE_NAME,
        description: "Sortimente expuse",
        price: 10,
        weight: { value: [120, 140], unit: "g" },
    }),
];
