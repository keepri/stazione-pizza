import {
    // LEGAL_LINKS,
    NAV_LINKS,
} from "../../data/footer";
import { Path } from "../../routes/utils";
import { Logo } from "../atoms/logo";
import {
    FooterLinkGroup,
    TProps as TFooterLinkGroupProps,
} from "../molecules/footer-link-group";

const LINK_GROUP_TITLE_ONE: TFooterLinkGroupProps["title"] = "Stazione Pizza";
// const LINK_GROUP_TITLE_TWO: TFooterLinkGroupProps["title"] = "Legal stuff";

export function Footer() {
    return (
        <footer class="bg-stz-primary py-12 mt-auto">
            <main class="container flex flex-wrap gap-24 justify-between">
                <section class="flex flex-wrap gap-24">
                    <FooterLinkGroup
                        title={LINK_GROUP_TITLE_ONE}
                        links={NAV_LINKS}
                    />
                    {/*
                        TODO
                        <FooterLinkGroup
                            title={LINK_GROUP_TITLE_TWO}
                            links={LEGAL_LINKS}
                        />
                    */}
                </section>
                <Logo href={Path.Home} size="xl" />
            </main>
        </footer>
    );
}
