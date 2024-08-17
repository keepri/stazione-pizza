import { AnchorProps } from "@solidjs/router";
import { clsx } from "clsx";
import { ParentProps } from "solid-js";

import { Link } from "../atoms/link";
import { Logo, TProps as TLogoProps } from "../atoms/logo";

type TProps = ParentProps & {
    class?: AnchorProps["class"];
    href: AnchorProps["href"];
    size?: TLogoProps["size"];
    LogoProps?: TLogoProps;
};

export function LogoLink(props: TProps) {
    return (
        <Link
            href={props.href}
            class={clsx(props.class, "flex items-center justify-between gap-4")}
        >
            <Logo size={props.size} {...props.LogoProps} />
            {props.children}
        </Link>
    );
}
