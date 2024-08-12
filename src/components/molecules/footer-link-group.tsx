import { Accessor, Index } from "solid-js";

import {
    FooterLink,
    TProps as TFooterLinkProps,
} from "../molecules/footer-link";

export type TProps = {
    title: string;
    links: ReadonlyArray<TFooterLinkProps>;
};

export function FooterLinkGroup(props: TProps) {
    return (
        <section class="text-stz-light">
            <h4 class="mb-2 text-lg font-bold">{props.title}</h4>
            <ul class="flex flex-col gap-2">
                <Index each={props.links} children={renderLink} />
            </ul>
        </section>
    );
}

function renderLink(item: Accessor<TProps["links"][number]>) {
    const { children, href, icon, newTab } = item();

    return (
        <FooterLink href={href} icon={icon} newTab={newTab}>
            {children}
        </FooterLink>
    );
}
