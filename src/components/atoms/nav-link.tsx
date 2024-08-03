import { A, useLocation } from "@solidjs/router";
import { clsx } from "clsx";
import { ParentProps, children } from "solid-js";

import { Path } from "../../routes/utils";

export type TProps = ParentProps & {
    href: Path;
};

export function NavLink(props: TProps) {
    const resolved = children(() => props.children);
    const location = useLocation();

    return (
        <li>
            <A
                href={props.href}
                class={clsx(
                    "px-4 py-2 text-lg text-stz-dark",
                    location.pathname === props.href &&
                        "underline underline-offset-4",
                )}
            >
                {resolved()}
            </A>
        </li>
    );
}
