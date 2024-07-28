import { A } from "@solidjs/router";
import { ParentProps, children } from "solid-js";

export type TProps = ParentProps & {
    href: string;
};

export function FooterLink(props: TProps) {
    const resolved = children(() => props.children);

    return (
        <li>
            <A href={props.href} class="font-dm-sans hover:underline">
                {resolved()}
            </A>
        </li>
    );
}
