import { ErrorBoundary } from "solid-js";

import { AppRoutes } from "./routes";
import { Error } from "./routes/error/error";

export function App() {
    return (
        <ErrorBoundary fallback={Error}>
            <AppRoutes />
        </ErrorBoundary>
    );
}
