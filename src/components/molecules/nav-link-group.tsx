import { Index } from "solid-js";

import { Path } from "../../routes/utils";
import { NavLink } from "../atoms/nav-link";

type NavLink = {
    text: string;
    href: Path;
};

export type Props = {
    links: ReadonlyArray<NavLink>;
};

export function NavLinkGroup(props: Props) {
    return (
        <ul class="flex gap-2 flex-wrap">
            <Index each={props.links}>
                {function renderLinkList(link) {
                    const { text, href } = link();
                    return <NavLink href={href}>{text}</NavLink>;
                }}
            </Index>
        </ul>
    );
}
