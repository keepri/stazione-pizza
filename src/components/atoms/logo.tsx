import { A } from "@solidjs/router";
import { ParentProps, children } from "solid-js";

import { Path } from "../../routes/utils";

type Size = "lg";

type Props = ParentProps & {
    size?: Size;
    href?: Path;
};

const sizes: Record<Size, string> = {
    lg: "w-28 h-28",
} as const;

export function Logo(props: Props) {
    props.size ??= "lg";

    const size = sizes[props.size];
    const containerStyles = "flex gap-7 justify-between items-center flex-wrap";

    {
        // TODO
        // <img
        //     class={`${size} rounded-full`}
        //     src={undefined}
        //     alt="Stazione logo"
        // />
    }
    const logo = <div class={`${size} rounded-full bg-red-300`} />;
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
