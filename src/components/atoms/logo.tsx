import { clsx } from "clsx";

// TODO make this into a svg component
import logoUrl from "../../assets/logo.svg?url";

type TSize = "lg" | "xl";

export type TProps = {
    size?: TSize;
};

const sizes: Record<TSize, string> = {
    lg: "w-28 h-28",
    xl: "w-40 h-40",
} as const;

export function Logo(props: TProps) {
    const size = props.size ?? "lg";

    return (
        <img
            class={clsx(sizes[size], "rounded-full bg-transparent")}
            src={logoUrl}
            alt="Stazione logo"
        />
    );
}
