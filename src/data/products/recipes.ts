import {
    ANANAS___,
    ANGHINARE,
    ARDEI_IUTE,
    BRIE,
    BUSUIOC,
    CARNATI,
    CEAPA_ROSIE,
    CEAPA_ROSIE_MURATA,
    CIUPERCI_BRUNE,
    CREMA_BRANZA,
    GORGONZOLA,
    IAURT,
    MAIONEZA,
    MASLINE,
    MOZZARELLA,
    OREGANO,
    PARMESAN,
    PESTO,
    PORUMB,
    PROSCIUTTO_COTTO,
    ROSII,
    ROSII_USCATE,
    RUCOLA,
    SALAM_NAPOLI,
    SALAM_NAPOLI_PICANT,
    SOS_ROSII,
    TON,
    ULEI_MASLINE,
    USTUROI,
} from "./ingredients";

// PIZZAS

export const MARINARA = [
    SOS_ROSII,
    USTUROI,
    OREGANO,
    ULEI_MASLINE,
    BUSUIOC,
] as const;

export const MARGHERITA = [SOS_ROSII, MOZZARELLA, PARMESAN, BUSUIOC] as const;

export const PROSCIUTTO_E_FUNGHI = [
    SOS_ROSII,
    MOZZARELLA,
    CIUPERCI_BRUNE,
    PROSCIUTTO_COTTO,
    BUSUIOC,
] as const;

export const BAMBINO = [
    SOS_ROSII,
    MOZZARELLA,
    PROSCIUTTO_COTTO,
    PORUMB,
    BUSUIOC,
] as const;

export const DIAVOLA = [
    SOS_ROSII,
    MOZZARELLA,
    SALAM_NAPOLI_PICANT,
    ARDEI_IUTE,
] as const;

export const CARNIVORA = [
    SOS_ROSII,
    MOZZARELLA,
    PROSCIUTTO_COTTO,
    SALAM_NAPOLI,
    CARNATI,
    BUSUIOC,
] as const;

export const HAWAII = [
    SOS_ROSII,
    MOZZARELLA,
    PROSCIUTTO_COTTO,

    ANANAS___,
] as const;

export const TONNO_E_CIPOLLA = [
    SOS_ROSII,
    MOZZARELLA,
    TON,
    CEAPA_ROSIE,
    MASLINE,
] as const;

export const CAPRICCIOSA = [
    SOS_ROSII,
    MOZZARELLA,
    PROSCIUTTO_COTTO,
    CIUPERCI_BRUNE,
    ANGHINARE,
    MASLINE,
    BUSUIOC,
] as const;

export const QUATRO_FORMAGGI = [
    SOS_ROSII,
    MOZZARELLA,
    GORGONZOLA,
    BRIE,
    PARMESAN,
] as const;

// SANDWICHES

export const PROSCIUTTO_FOCACCIA = [
    CREMA_BRANZA,
    RUCOLA,
    PESTO,
    PROSCIUTTO_COTTO,
    ROSII_USCATE,
];

export const SALAMI_FOCACCIA = [
    CREMA_BRANZA,
    RUCOLA,
    PESTO,
    SALAM_NAPOLI,
    CEAPA_ROSIE_MURATA,
];

export const VEGETARIAN_FOCACCIA = [
    CREMA_BRANZA,
    RUCOLA,
    PESTO,
    ANGHINARE,
    ROSII_USCATE,
];

export const PANUOZZO_PROSCIUTTO = [
    MOZZARELLA,
    ROSII,
    ULEI_MASLINE,
    BUSUIOC,
] as const;

export const PANUOZZO_CAPRESE = [
    MOZZARELLA,
    ROSII,
    ULEI_MASLINE,
    BUSUIOC,
] as const;

// DIVERSE

export const SOS_ALB = [IAURT, MAIONEZA, USTUROI] as const;

