import { A } from "@solidjs/router";
import { ParentProps, children } from "solid-js";

type Props = ParentProps & {
    href: string;
};

export function FooterLink(props: Props) {
    const resolved = children(() => props.children);

    return (
        <li>
            <A href={props.href} class="font-dm-sans hover:underline">
                {resolved()}
            </A>
        </li>
    );
}
