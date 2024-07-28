import { TProps as TFooterLinkGroupProps } from "../components/molecules/footer-link-group";
import { Path } from "../routes/utils";

type TLinks = TFooterLinkGroupProps["links"];
type TLink = TLinks[number];

const HOME: TLink = { children: "Home", href: Path.Home } as const;
const MENU: TLink = { children: "Menu", href: Path.Menu } as const;
const ABOUT: TLink = { children: "About", href: Path.About } as const;
const CONTACT: TLink = { children: "Contact", href: Path.Contact } as const;
const PRIVACY_POLICY: TLink = {
    children: "Privacy Policy",
    href: Path.PrivacyPolicy,
} as const;
const TERMS_AND_CONDITIONS: TLink = {
    children: "Terms and Conditions",
    href: Path.TermsAndConditions,
} as const;

export const NAV_LINKS: TLinks = [HOME, MENU, ABOUT, CONTACT] as const;

export const LEGAL_LINKS: TFooterLinkGroupProps["links"] = [
    PRIVACY_POLICY,
    TERMS_AND_CONDITIONS,
] as const;
