import { clsx } from "clsx";
import { splitProps } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

// TODO make this into a svg component
import logoUrl from "../../assets/logo.svg?url";

type TSize = "lg" | "xl";

export type TProps = JSX.HTMLAttributes<HTMLImageElement> & {
    size?: TSize;
};

const sizes: Record<TSize, string> = {
    lg: "w-28 h-28",
    xl: "w-40 h-40",
} as const;

export function Logo(props: TProps) {
    const [local, others] = splitProps(props, ["size", "class"]);

    const size = local.size ?? "lg";

    return (
        <img
            class={clsx(local.class, sizes[size], "rounded-full")}
            src={logoUrl}
            alt="Stazione logo"
            {...others}
        />
    );
}
