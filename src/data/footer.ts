import FacebookSvg from "../assets/icons/socials/facebook.svg";
import InstagramSvg from "../assets/icons/socials/instagram.svg";
import { TProps as TFooterLinkGroupProps } from "../components/molecules/footer-link-group";
import { Path } from "../routes/utils";
import { FACEBOOK_LINK, INSTAGRAM_LINK } from "./company-info";

type TLinks = TFooterLinkGroupProps["links"];

export const NAV_LINKS: TLinks = [
    { children: "Acasă", href: Path.Home } as const,
    { children: "Meniu", href: Path.Menu } as const,
    { children: "Despre Noi", href: Path.About } as const,
    { children: "Contact", href: Path.Contact } as const,
] as const;

export const SOCIAL_LINKS: TLinks = [
    {
        href: INSTAGRAM_LINK,
        newTab: true,
        children: "Instagram",
        icon: InstagramSvg,
    } as const,
    {
        href: FACEBOOK_LINK,
        newTab: true,
        children: "Facebook",
        icon: FacebookSvg,
    } as const,
] as const;
