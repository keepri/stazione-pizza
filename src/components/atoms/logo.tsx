import { clsx } from "clsx";
import { splitProps } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

import LogoSvg from "../../assets/logo.svg";

type TSize = "lg" | "xl";

export type TProps = JSX.SvgSVGAttributes<SVGSVGElement> & {
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
        <LogoSvg
            width={200}
            height={200}
            class={clsx(local.class, sizes[size], "rounded-full")}
            {...others}
        />
    );
}
