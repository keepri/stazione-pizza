import { Show } from "solid-js";

import { LINKS } from "../../data/navbar";
import { useShowLogo } from "../../hooks/show-logo";
import { Path } from "../../routes/utils";
import { Logo } from "../atoms/logo";
import { NavLinkGroup } from "../molecules/nav-link-group";

export function Navbar() {
    const showLogo = useShowLogo();

    return (
        <nav class="sticky top-0 py-4 z-50 bg-stz-background">
            <main class="container flex flex-wrap max-sm:justify-center justify-between items-center gap-4">
                <Show when={showLogo()}>
                    <Logo href={Path.Home}>
                        <h1 class="text-lg text-stz-dark font-bold font-poppins max-sm:hidden">
                            Stazione Pizza
                        </h1>
                    </Logo>
                </Show>
                <NavLinkGroup links={LINKS} />
            </main>
        </nav>
    );
}
