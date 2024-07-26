import clsx from "clsx";
import { Index, JSX } from "solid-js";

import { Path } from "../../routes/utils";
import { NavLink } from "../atoms/nav-link";

type NavLink = {
    text: string;
    href: Path;
};

export type Props = JSX.HTMLAttributes<HTMLUListElement> & {
    links: ReadonlyArray<NavLink>;
};

export function NavLinkGroup(props: Props) {
    return (
        <ul class={clsx("flex gap-2 flex-wrap", props.class)}>
            <Index each={props.links}>
                {function renderLinkList(link) {
                    const { text, href } = link();
                    return <NavLink href={href}>{text}</NavLink>;
                }}
            </Index>
        </ul>
    );
}
