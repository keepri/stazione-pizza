import { ParentProps, children } from "solid-js";

import { Footer } from "../components/organisms/footer";
import { Navbar } from "../components/organisms/navbar";

export function Root(props: ParentProps) {
    const resolved = children(() => props.children);

    return (
        <main class="flex flex-col min-h-screen bg-stz-background">
            <Navbar />
            {resolved()}
            <Footer />
        </main>
    );
}
