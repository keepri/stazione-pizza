import { ParentProps, children } from "solid-js";

import { Footer } from "../components/organisms/footer";
import { Navbar } from "../components/organisms/navbar";

export function Root(props: ParentProps) {
    const resolved = children(() => props.children);

    return (
        <>
            <Navbar />
            <main class="flex flex-col">{resolved()}</main>
            <Footer />
        </>
    );
}
