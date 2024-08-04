import { ParentProps, children } from "solid-js";

import { Link } from "../atoms/link";
import { Logo, TProps as TLogoProps } from "../atoms/logo";

type TProps = ParentProps & {
    href: string;
    size?: TLogoProps["size"];
};

export function LogoLink(props: TProps) {
    const resolved = children(() => props.children);

    return (
        <Link
            href={props.href}
            class="flex flex-wrap items-center justify-between gap-5"
        >
            <Logo size={props.size} />
            {resolved()}
        </Link>
    );
}
