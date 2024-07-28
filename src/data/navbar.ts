import { TProps as TNavLinkGroupProps } from "../components/molecules/nav-link-group";
import { Path } from "../routes/utils";

type TLinks = TNavLinkGroupProps["links"];
type TLink = TLinks[number];

const MENU: TLink = { children: "Menu", href: Path.Menu } as const;
const ABOUT: TLink = { children: "About", href: Path.About } as const;
const CONTACT: TLink = { children: "Contact", href: Path.Contact } as const;

export const LINKS: TLinks = [MENU, ABOUT, CONTACT] as const;
