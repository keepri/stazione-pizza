import { TMotive } from "../components/molecules/motive";

const MOTIVE_ONE: TMotive = {
    title: "Ingrediente proaspete și autentice",
    description:
        "Folosim doar cele mai bune ingrediente pentru a aduce aroma veritabilă a Italiei în fiecare felie.",
} as const;

const MOTIVE_TWO: TMotive = {
    title: "Pizza napoletană autentică",
    description:
        "Pizza noastră este preparată după rețete tradiționale napoletane.",
};

const MOTIVE_THREE: TMotive = {
    title: "Rapid și convenabil",
    description: "Comandă pizza preferată și bucură-te de ea în câteva minute.",
};

export const MOTIVES: ReadonlyArray<TMotive> = [
    MOTIVE_ONE,
    MOTIVE_TWO,
    MOTIVE_THREE,
] as const;
