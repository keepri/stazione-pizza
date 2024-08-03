import { ParentProps, children } from "solid-js";

import { Footer } from "../components/organisms/footer";
import { Navbar } from "../components/organisms/navbar";

export function Root(props: ParentProps) {
    const resolved = children(() => props.children);

    return (
        <main class="flex min-h-screen flex-col">
            <Navbar />
            {resolved()}
            <Footer />
        </main>
    );
}
