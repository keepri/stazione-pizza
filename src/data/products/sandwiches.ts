import { TMenuCategory } from "../../types/menu";
import { product } from "./product";
import {
    PANUOZZO_CAPRESSE,
    PANUOZZO_COTTO,
    PANUOZZO_CRUDO,
    PANUOZZO_SALAMI,
    PIZZA_DOG_CABANOS,
    PIZZA_DOG_CRENVUSTI,
} from "./recipes";

const PAINE_NAPOLETANA_NAME = "Pâinică napoletană";
const PANUOZZO_COTTO_NAME = "Panuozzo cotto";
const PANUOZZO_CRUDO_NAME = "Panuozzo crudo";
const PANUOZZO_SALAMI_NAME = "Panuozzo salami";
const PANUOZZO_CAPRESSE_NAME = "Panuozzo capresse";
const PIZZA_DOG_CRENVUSTI_NAME = "Pizza Dog Crenvuști";
const PIZZA_DOG_CABANOS_NAME = "Pizza Dog Cabanos";

export const SANDWICHES: TMenuCategory["products"] = [
    product({
        name: PAINE_NAPOLETANA_NAME,
        price: 10,
        weight: { value: 120, unit: "g" },
    }),
    product({
        name: PANUOZZO_COTTO_NAME,
        ingredients: PANUOZZO_COTTO,
        price: 28,
        weight: { value: 260, unit: "g" },
    }),
    product({
        name: PANUOZZO_CRUDO_NAME,
        ingredients: PANUOZZO_CRUDO,
        price: 32,
        weight: { value: 260, unit: "g" },
    }),
    product({
        name: PANUOZZO_SALAMI_NAME,
        ingredients: PANUOZZO_SALAMI,
        price: 28,
        weight: { value: 260, unit: "g" },
    }),
    product({
        name: PANUOZZO_CAPRESSE_NAME,
        ingredients: PANUOZZO_CAPRESSE,
        price: 26,
        weight: { value: 260, unit: "g" },
    }),
    product({
        name: PIZZA_DOG_CRENVUSTI_NAME,
        ingredients: PIZZA_DOG_CRENVUSTI,
        price: 19,
        weight: { value: 250, unit: "g" },
    }),
    product({
        name: PIZZA_DOG_CABANOS_NAME,
        ingredients: PIZZA_DOG_CABANOS,
        price: 19,
        weight: { value: 250, unit: "g" },
    }),
];
