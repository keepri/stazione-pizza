import { A } from "@solidjs/router";
import { ParentProps, children } from "solid-js";

type NavLinkProps = ParentProps & {
    href: string;
};

export function NavLink(props: NavLinkProps) {
    const resolved = children(() => props.children);

    return (
        <li>
            <A
                href={props.href}
                class="py-2 px-4 text-lg text-stz-dark hover:underline"
            >
                {resolved()}
            </A>
        </li>
    );
}
