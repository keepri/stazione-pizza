import { Route, Router } from "@solidjs/router";

import { Root } from "../layouts/root";
import { Home } from "./home/home";
import { About, Contact, NotFound } from "./lazy-load";
import { Menu } from "./menu/menu";
import { Path } from "./utils";

export function AppRoutes() {
    return (
        <Router root={Root}>
            <Route path={Path.Home} component={Home} />
            <Route path={Path.Menu} component={Menu} />
            <Route path={Path.About} component={About} />
            <Route path={Path.Contact} component={Contact} />
            <Route path={Path.NotFound} component={NotFound} />
            <Route path="*" component={NotFound} />
        </Router>
    );
}
