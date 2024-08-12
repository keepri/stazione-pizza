import { NAV_LINKS, SOCIAL_LINKS } from "../../data/footer";
import { Path } from "../../routes/utils";
import {
    FooterLinkGroup,
    TProps as TFooterLinkGroupProps,
} from "../molecules/footer-link-group";
import { LogoLink } from "../molecules/logo-link";

const NAV_LINKS_TITLE: TFooterLinkGroupProps["title"] = "Stazione Pizza";
const SOCIALS_TITLE: TFooterLinkGroupProps["title"] =
    "Urmărește-ne pe social media";

export function Footer() {
    return (
        <footer class="mt-auto bg-stz-primary py-12">
            <main class="container flex flex-wrap justify-between gap-12">
                <div class="flex flex-wrap gap-12">
                    <FooterLinkGroup
                        title={NAV_LINKS_TITLE}
                        links={NAV_LINKS}
                    />
                    <FooterLinkGroup
                        title={SOCIALS_TITLE}
                        links={SOCIAL_LINKS}
                    />
                </div>
                <LogoLink
                    href={Path.Home}
                    size="xl"
                    class="max-lg:mx-auto"
                    LogoProps={{ class: "bg-stz-primary" }}
                />
            </main>
        </footer>
    );
}
