import { Path } from "../../routes/utils";
import { Logo } from "../atoms/logo";
import {
    NavLinkGroup,
    Props as NavLinkGroupProps,
} from "../molecules/nav-link-group";

const links: NavLinkGroupProps["links"] = [
    { text: "Menu", href: Path.Menu },
    { text: "About", href: Path.About },
    { text: "Contact", href: Path.Contact },
] as const;

export function Navbar() {
    return (
        <nav class="container sticky top-0 flex justify-between items-center pt-12 pb-2 z-50 bg-stz-background">
            <Logo href={Path.Home}>
                <h1 class="text-lg text-stz-dark font-bold font-poppins">
                    Stazione Pizza
                </h1>
            </Logo>
            <NavLinkGroup links={links} />
        </nav>
    );
}
