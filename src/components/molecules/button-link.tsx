import { AnchorProps } from "@solidjs/router";
import { clsx } from "clsx";
import { ParentProps, splitProps } from "solid-js";

import { BUTTON_STYLES } from "../atoms/button";
import { Link } from "../atoms/link";

type TProps = ParentProps & {
    class?: AnchorProps["class"];
    href: AnchorProps["href"];
};

export function ButtonLink(props: TProps) {
    const [local, others] = splitProps(props, ["href", "class"]);

    return (
        <Link
            href={local.href}
            class={clsx(local.class, BUTTON_STYLES)}
            {...others}
        >
            {props.children}
        </Link>
    );
}
