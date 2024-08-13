import { Meta, MetaProvider, Title } from "@solidjs/meta";
import { render } from "solid-js/web";

import { App } from "./app";
import "./index.css";
import { STZ_BACKGROUND } from "./utils/constants";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
    );
}

render(function renderApp() {
    return (
        <MetaProvider>
            <Title>Stazione Pizza</Title>
            <Meta name="theme-color" content={STZ_BACKGROUND} />
            <App />
        </MetaProvider>
    );
}, root!);
