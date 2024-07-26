import { A } from "@solidjs/router";
import { ParentProps, children } from "solid-js";

import { Path } from "../../routes/utils";

type Size = "lg" | "xl";

type Props = ParentProps & {
    size?: Size;
    href?: Path;
};

const sizes: Record<Size, string> = {
    lg: "w-28 h-28",
    xl: "w-40 h-40",
} as const;

export function Logo(props: Props) {
    props.size ??= "lg";

    const size = sizes[props.size];
    const containerStyles = "flex gap-5 justify-between items-center flex-wrap";

    const logo = (
        <img
            class={`${size} rounded-full`}
            src="/src/assets/logo.svg"
            alt="Stazione logo"
        />
    );
    const resolved = children(() => props.children);

    if (props.href) {
        return (
            <A href={props.href} class={containerStyles}>
                {logo}
                {resolved()}
            </A>
        );
    }

    return (
        <span class={containerStyles}>
            {logo}
            {resolved()}
        </span>
    );
}