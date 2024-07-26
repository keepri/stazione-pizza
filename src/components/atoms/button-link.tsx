import { A, AnchorProps } from "@solidjs/router";
import clsx from "clsx";
import { ParentProps, children, splitProps } from "solid-js";

import { BUTTON_STYLES } from "./button";

type Props = ParentProps & AnchorProps;

export function ButtonLink(props: Props) {
    const [local, others] = splitProps(props, ["href", "children", "class"]);
    const resolved = children(() => local.children);

    return (
        <A
            href={local.href}
            class={clsx(BUTTON_STYLES, local.class)}
            {...others}
        >
            {resolved()}
        </A>
    );
}
