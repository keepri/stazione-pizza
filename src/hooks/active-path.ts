import { useLocation } from "@solidjs/router";
import { Accessor, createMemo } from "solid-js";

import { Path } from "../routes/utils";

export type TOptions = {
    enabled?: boolean;
};

export function useActivePath(
    pathname: `${Path}`,
    options?: TOptions,
): Accessor<boolean> {
    if (!options?.enabled) {
        return function () {
            return false;
        };
    }

    const location = useLocation();

    const isActive = createMemo<boolean>(
        function handleActivePath() {
            const isOnPath = matchPath({
                activePathname: location.pathname,
                matchPathname: pathname,
            });

            return isOnPath;
        },
        matchPath({
            activePathname: location.pathname,
            matchPathname: pathname,
        }),
    );

    return isActive;
}

type TPathnames = Record<"activePathname" | "matchPathname", string>;

function matchPath({ activePathname, matchPathname }: TPathnames) {
    return activePathname === matchPathname;
}
