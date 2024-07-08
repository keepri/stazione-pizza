import { Route, Router } from "@solidjs/router";

import { RootLayout } from "../layouts/root";
import { About, Contact, Home, Menu, NotFound } from "./lazy-load";

export function AppRoutes() {
    return (
        <Router root={RootLayout}>
            <Route path="/" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={NotFound} />
        </Router>
    );
}
