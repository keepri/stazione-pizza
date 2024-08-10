import { AnchorProps } from "@solidjs/router";
import { clsx } from "clsx";
import { ParentProps, children } from "solid-js";

import { Link } from "../atoms/link";
import { Logo, TProps as TLogoProps } from "../atoms/logo";

type TProps = ParentProps & {
    class?: AnchorProps["class"];
    href: AnchorProps["href"];
    size?: TLogoProps["size"];
    LogoProps?: TLogoProps;
};

export function LogoLink(props: TProps) {
    const resolved = children(() => props.children);

    return (
        <Link
            href={props.href}
            class={clsx(props.class, "flex items-center justify-between gap-4")}
        >
            <Logo size={props.size} {...props.LogoProps} />
            {resolved()}
        </Link>
    );
}
