import { Match, Switch } from "solid-js";

import { LINKS } from "../../data/navbar";
import { useMaxWidth } from "../../hooks/max-width";
import { Path } from "../../routes/utils";
import { LogoLink } from "../molecules/logo-link";
import { NavLinkGroup } from "../molecules/nav-link-group";

export function Navbar() {
    const isLower = useMaxWidth();

    return (
        <Switch fallback={<BigScreenBar />}>
            <Match when={isLower()}>
                <nav
                    role="navigation"
                    aria-label="Main Navigation"
                    class="pt-2"
                >
                    <LogoLink
                        href={Path.Home}
                        LogoProps={{ class: "bg-stz-background mx-auto" }}
                    />
                </nav>
                <NavLinkGroup
                    role="navigation"
                    aria-labelledby="Main Navigation"
                    class="container sticky top-0 z-50 bg-stz-background py-2"
                    links={LINKS}
                />
            </Match>
        </Switch>
    );
}

function BigScreenBar() {
    return (
        <nav
            role="navigation"
            aria-label="Main Navigation"
            class="sticky top-0 z-50 bg-stz-background py-2"
        >
            <main class="container flex flex-wrap items-center justify-between gap-4">
                <LogoLink
                    href={Path.Home}
                    LogoProps={{ class: "bg-stz-background" }}
                >
                    <h1 class="font-poppins text-lg font-semibold text-stz-dark max-md:hidden">
                        Stazione Pizza
                    </h1>
                </LogoLink>
                <NavLinkGroup links={LINKS} />
            </main>
        </nav>
    );
}
