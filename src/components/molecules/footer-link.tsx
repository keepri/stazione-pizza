import { AnchorProps } from "@solidjs/router";
import { ParentProps } from "solid-js";

import { Link } from "../atoms/link";

export type TProps = ParentProps & {
    href: AnchorProps["href"];
};

export function FooterLink(props: TProps) {
    return (
        <li>
            <Link showActive href={props.href} class="hover:underline">
                {props.children}
            </Link>
        </li>
    );
}
