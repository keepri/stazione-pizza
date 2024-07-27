import { Props as MotiveProps } from "../components/atoms/motive";

export const MOTIVES: ReadonlyArray<MotiveProps> = [
    {
        title: "Ingrediente proaspete și autentice",
        description:
            "Folosim doar cele mai bune ingrediente pentru a aduce aroma veritabilă a Italiei în fiecare felie.",
    },
    {
        title: "Pizza napoletană autentică",
        description:
            "Pizza noastră este preparată după rețete tradiționale napoletane.",
    },
    {
        title: "Rapid și convenabil",
        description:
            "Comandă pizza preferată și bucură-te de ea în câteva minute.",
    },
] as const;
