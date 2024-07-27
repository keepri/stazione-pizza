import { LINKS } from "../../data/navbar";
import { Path } from "../../routes/utils";
import { Logo } from "../atoms/logo";
import { NavLinkGroup } from "../molecules/nav-link-group";

export function Navbar() {
    return (
        <nav class="sticky top-0 pt-12 pb-2 z-50 bg-stz-background">
            <main class="container flex justify-between items-center">
                <Logo href={Path.Home}>
                    <h1 class="text-lg text-stz-dark font-bold font-poppins">
                        Stazione Pizza
                    </h1>
                </Logo>
                <NavLinkGroup links={LINKS} />
            </main>
        </nav>
    );
}
