import { Index } from "solid-js";

import { Path } from "../../routes/utils";
import { FooterLink } from "../atoms/footer-link";

type FooterLink = {
    href: Path;
    text: string;
};

export type Props = {
    title: string;
    links: ReadonlyArray<FooterLink>;
};

export function FooterLinkGroup(props: Props) {
    return (
        <section class="text-stz-light">
            <h4 class="text-lg mb-3 font-bold">{props.title}</h4>
            <ul>
                <Index each={props.links}>
                    {function renderLink(item) {
                        const { text, href } = item();
                        return <FooterLink href={href}>{text}</FooterLink>;
                    }}
                </Index>
            </ul>
        </section>
    );
}
