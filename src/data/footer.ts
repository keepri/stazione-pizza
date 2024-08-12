import FacebookSvg from "../assets/icons/socials/facebook.svg";
import InstagramSvg from "../assets/icons/socials/instagram.svg";
import PhoneSvg from "../assets/icons/socials/phone.svg";
import { TProps as TFooterLinkGroupProps } from "../components/molecules/footer-link-group";
import { Path } from "../routes/utils";

type TLinks = TFooterLinkGroupProps["links"];

export const NAV_LINKS: TLinks = [
    { children: "Acasă", href: Path.Home } as const,
    { children: "Meniu", href: Path.Menu } as const,
    { children: "Despre Noi", href: Path.About } as const,
    { children: "Contact", href: Path.Contact } as const,
] as const;

export const SOCIAL_LINKS: TLinks = [
    {
        href: "https://www.instagram.com/stazionepizzacluj",
        newTab: true,
        children: "Instagram",
        icon: InstagramSvg,
    } as const,
    {
        href: "https://www.facebook.com/profile.php?id=61560835116628",
        newTab: true,
        children: "Facebook",
        icon: FacebookSvg,
    } as const,
    {
        href: "tel:+40770133695",
        children: "+40 770 133 695",
        icon: PhoneSvg,
    } as const,
] as const;
