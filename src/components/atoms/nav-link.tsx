import { A } from "@solidjs/router";
import { ParentProps, children } from "solid-js";

import { Path } from "../../routes/utils";

export type TProps = ParentProps & {
    href: Path;
};

export function NavLink(props: TProps) {
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
