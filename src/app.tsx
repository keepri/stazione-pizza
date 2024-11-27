import { ErrorBoundary } from "solid-js";

import { AppRoutes } from "./routes";
import { Error } from "./routes/error/error";
import { RedirectGuard } from "./routes/redirect";

export function App() {
    return (
        <ErrorBoundary fallback={Error}>
            <RedirectGuard>
                <AppRoutes />
            </RedirectGuard>
        </ErrorBoundary>
    );
}
