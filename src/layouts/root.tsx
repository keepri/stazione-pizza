import { ParentProps } from "solid-js";

import { Footer } from "../components/organisms/footer";
import { Navbar } from "../components/organisms/navbar";

export function Root(props: ParentProps) {
    return (
        <>
            <Navbar />
            <main class="flex flex-col">{props.children}</main>
            <Footer />
        </>
    );
}
