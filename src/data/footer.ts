import { Props as FooterLinkGroupProps } from "../components/molecules/footer-link-group";
import { Path } from "../routes/utils";

export const NAV_LINKS: FooterLinkGroupProps["links"] = [
    { text: "Home", href: Path.Home },
    { text: "Menu", href: Path.Menu },
    { text: "About", href: Path.About },
    { text: "Contact", href: Path.Contact },
] as const;

export const LEGAL_LINKS: FooterLinkGroupProps["links"] = [
    { text: "Privacy Policy", href: Path.PrivacyPolicy },
    { text: "Terms And Conditions", href: Path.TermsAndConditions },
] as const;
