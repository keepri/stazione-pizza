import { TProps as TFooterLinkGroupProps } from "../components/molecules/footer-link-group";
import { Path } from "../routes/utils";

type TLinks = TFooterLinkGroupProps["links"];

export const NAV_LINKS: TLinks = [
    { children: "Acasă", href: Path.Home } as const,
    { children: "Meniu", href: Path.Menu } as const,
    { children: "Despre Noi", href: Path.About } as const,
    { children: "Contact", href: Path.Contact } as const,
] as const;

// export const LEGAL_LINKS: TFooterLinkGroupProps["links"] = [
//     { children: "Privacy Policy", href: Path.PrivacyPolicy } as const,
//     {
//         children: "Terms and Conditions",
//         href: Path.TermsAndConditions,
//     } as const,
// ] as const;
