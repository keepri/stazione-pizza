import { ParentProps } from "solid-js";

import { Path } from "../../routes/utils";
import { Link } from "../atoms/link";

export type TProps = ParentProps & {
    href: Path;
};

export function NavLink(props: TProps) {
    return (
        <li>
            <Link
                showActive
                href={props.href}
                class="whitespace-nowrap p-2 text-lg text-stz-dark hover:underline"
            >
                {props.children}
            </Link>
        </li>
    );
}
