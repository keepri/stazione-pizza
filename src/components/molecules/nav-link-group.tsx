import clsx from "clsx";
import { Accessor, Index, JSX } from "solid-js";

import { NavLink, TProps as TNavLinkProps } from "../molecules/nav-link";

export type TProps = JSX.HTMLAttributes<HTMLUListElement> & {
    links: ReadonlyArray<TNavLinkProps>;
};

export function NavLinkGroup(props: TProps) {
    return (
        <ul class={clsx(props.class, "flex flex-wrap justify-evenly gap-2")}>
            <Index each={props.links} children={renderLinkList} />
        </ul>
    );
}

function renderLinkList(link: Accessor<TProps["links"][number]>) {
    const { children, href } = link();

    return <NavLink href={href}>{children}</NavLink>;
}
