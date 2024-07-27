import { Props as NavLinkGroupProps } from "../components/molecules/nav-link-group";
import { Path } from "../routes/utils";

export const LINKS: NavLinkGroupProps["links"] = [
    { text: "Menu", href: Path.Menu },
    { text: "About", href: Path.About },
    { text: "Contact", href: Path.Contact },
] as const;
