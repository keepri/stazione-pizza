import { Path } from "../../routes/utils";
import { Logo } from "../atoms/logo";
import {
    FooterLinkGroup,
    Props as FooterLinkGroupProps,
} from "../molecules/footer-link-group";

const LINK_GROUP_TITLE_ONE = "Stazione Pizza";
const LINK_GROUP_TITLE_TWO = "Legal stuff";

const navLinks: FooterLinkGroupProps["links"] = [
    { text: "Home", href: Path.Home },
    { text: "Menu", href: Path.Menu },
    { text: "About", href: Path.About },
    { text: "Contact", href: Path.Contact },
] as const;

const legalLinks: FooterLinkGroupProps["links"] = [
    { text: "Privacy Policy", href: Path.PrivacyPolicy },
    { text: "Terms And Conditions", href: Path.TermsAndConditions },
] as const;

export function Footer() {
    return (
        <footer class="bg-stz-primary py-7 mt-auto">
            <main class="container flex flex-wrap gap-24 justify-between items-center">
                <section class="flex flex-wrap gap-24">
                    <FooterLinkGroup
                        title={LINK_GROUP_TITLE_ONE}
                        links={navLinks}
                    />
                    <FooterLinkGroup
                        title={LINK_GROUP_TITLE_TWO}
                        links={legalLinks}
                    />
                </section>
                <Logo href={Path.Home} />
            </main>
        </footer>
    );
}
