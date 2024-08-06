import {
    // LEGAL_LINKS,
    NAV_LINKS,
} from "../../data/footer";
import { Path } from "../../routes/utils";
import {
    FooterLinkGroup,
    TProps as TFooterLinkGroupProps,
} from "../molecules/footer-link-group";
import { LogoLink } from "../molecules/logo-link";

const LINK_GROUP_TITLE_ONE: TFooterLinkGroupProps["title"] = "Stazione Pizza";
// const LINK_GROUP_TITLE_TWO: TFooterLinkGroupProps["title"] = "Legal stuff";

export function Footer() {
    return (
        <footer class="mt-auto bg-stz-primary py-12">
            <main class="container flex flex-wrap justify-between gap-8">
                <FooterLinkGroup
                    title={LINK_GROUP_TITLE_ONE}
                    links={NAV_LINKS}
                />
                {/* TODO */}
                {/* <FooterLinkGroup
                    title={LINK_GROUP_TITLE_TWO}
                    links={LEGAL_LINKS}
                /> */}
                <LogoLink
                    href={Path.Home}
                    size="xl"
                    LogoProps={{ class: "bg-stz-primary" }}
                />
            </main>
        </footer>
    );
}
