import { A, AnchorProps } from "@solidjs/router";
import clsx from "clsx";
import { ParentProps, children, splitProps } from "solid-js";

import { useActivePath } from "../../hooks/active-path";

type TProps = ParentProps &
    AnchorProps & {
        showActive?: boolean;
        underline?: boolean;
    };

export function Link(props: TProps) {
    const [local, others] = splitProps(props, [
        "children",
        "class",
        "href",
        "showActive",
    ]);
    const resolved = children(() => local.children);

    // @ts-expect-error - href can be any string
    const isActive = useActivePath(local.href, { enabled: local.showActive });

    return (
        <A
            href={local.href}
            class={clsx(
                local.class,
                "font-dm-sans",
                isActive() && "underline underline-offset-4",
            )}
            {...others}
        >
            {resolved()}
        </A>
    );
}
