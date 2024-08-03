import { Show } from "solid-js";

import { LINKS } from "../../data/navbar";
import { useShowLogo } from "../../hooks/show-logo";
import { Path } from "../../routes/utils";
import { Logo } from "../atoms/logo";
import { NavLinkGroup } from "../molecules/nav-link-group";

export function Navbar() {
    const showLogo = useShowLogo();

    return (
        <nav class="sticky top-0 z-50 bg-stz-background py-4">
            <main class="container flex flex-wrap items-center justify-between gap-4 max-sm:justify-center">
                <Show when={showLogo()}>
                    <Logo href={Path.Home}>
                        <h1 class="font-poppins text-lg font-bold text-stz-dark max-sm:hidden">
                            Stazione Pizza
                        </h1>
                    </Logo>
                </Show>
                <NavLinkGroup links={LINKS} />
            </main>
        </nav>
    );
}
