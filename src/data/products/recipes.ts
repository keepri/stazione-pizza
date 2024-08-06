import {
    ARDEI_IUTE,
    BUSUIOC,
    CARNATI,
    CIUPERCI_BRUNE,
    IAURT,
    MAIONEZA,
    MOZZARELLA,
    PARMESAN,
    PORUMB,
    PROSCIUTTO_COTTO,
    ROSII,
    SALAM_NAPOLI,
    SALAM_NAPOLI_PICANT,
    SOS_ROSII,
    ULEI_MASLINE,
    USTUROI,
} from "./ingredients";

export const MARGHERITA = [SOS_ROSII, MOZZARELLA, PARMESAN, BUSUIOC] as const;

export const PROSCIUTTO_E_FUNGHI = [
    SOS_ROSII,
    MOZZARELLA,
    CIUPERCI_BRUNE,
    PROSCIUTTO_COTTO,
    BUSUIOC,
] as const;

export const DIAVOLA = [
    SOS_ROSII,
    MOZZARELLA,
    SALAM_NAPOLI_PICANT,
    ARDEI_IUTE,
] as const;

export const BAMBINO = [
    SOS_ROSII,
    MOZZARELLA,
    PROSCIUTTO_COTTO,
    PORUMB,
    BUSUIOC,
] as const;

export const CARNIVORA = [
    SOS_ROSII,
    MOZZARELLA,
    PROSCIUTTO_COTTO,
    SALAM_NAPOLI,
    CARNATI,
    BUSUIOC,
] as const;

export const SOS_ALB = [IAURT, MAIONEZA, USTUROI] as const;

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
