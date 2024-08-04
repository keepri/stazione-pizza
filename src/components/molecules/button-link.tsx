import { AnchorProps } from "@solidjs/router";
import { ParentProps, splitProps } from "solid-js";

import { BUTTON_STYLES } from "../atoms/button";
import { Link } from "../atoms/link";

type TProps = ParentProps & {
    href: AnchorProps["href"];
};

export function ButtonLink(props: TProps) {
    const [local, others] = splitProps(props, ["href"]);

    return (
        <Link href={local.href} class={BUTTON_STYLES} {...others}>
            {props.children}
        </Link>
    );
}
