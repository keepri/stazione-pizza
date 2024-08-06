import { TProps as TNavLinkGroupProps } from "../components/molecules/nav-link-group";
import { Path } from "../routes/utils";

type TLinks = TNavLinkGroupProps["links"];

export const LINKS: TLinks = [
    { children: "Meniu", href: Path.Menu } as const,
    { children: "Despre noi", href: Path.About } as const,
    { children: "Contact", href: Path.Contact } as const,
] as const;
