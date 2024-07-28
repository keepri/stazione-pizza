import { Accessor, Index } from "solid-js";

import { FooterLink, TProps as TFooterLinkProps } from "../atoms/footer-link";

export type TProps = {
    title: string;
    links: ReadonlyArray<TFooterLinkProps>;
};

export function FooterLinkGroup(props: TProps) {
    return (
        <section class="text-stz-light">
            <h4 class="text-lg mb-3 font-bold">{props.title}</h4>
            <ul>
                <Index each={props.links} children={renderLink} />
            </ul>
        </section>
    );
}

function renderLink(item: Accessor<TProps["links"][number]>) {
    const { children, href } = item();

    return <FooterLink href={href}>{children}</FooterLink>;
}
