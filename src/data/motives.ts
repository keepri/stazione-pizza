import { TMotive } from "../components/molecules/motive";

export const MOTIVES: ReadonlyArray<TMotive> = [
    {
        title: "Ingrediente proaspete și autentice",
        description:
            "Folosim doar cele mai bune ingrediente pentru a aduce aroma veritabilă a Italiei în fiecare felie.",
    } as const,
    {
        title: "Pizza napoletană autentică",
        description:
            "Pizza noastră este preparată după rețete tradiționale napoletane.",
    } as const,
    {
        title: "Rapid și convenabil",
        description:
            "Comandă pizza preferată și bucură-te de ea în câteva minute.",
    } as const,
] as const;
