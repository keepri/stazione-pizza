import { A, useLocation } from "@solidjs/router";
import { clsx } from "clsx";
import { ParentProps, children } from "solid-js";

export type TProps = ParentProps & {
    href: string;
};

export function FooterLink(props: TProps) {
    const resolved = children(() => props.children);
    const location = useLocation();

    return (
        <li>
            <A
                href={props.href}
                class={clsx(
                    "font-dm-sans hover:underline",
                    location.pathname === props.href &&
                        "underline underline-offset-4",
                )}
            >
                {resolved()}
            </A>
        </li>
    );
}
