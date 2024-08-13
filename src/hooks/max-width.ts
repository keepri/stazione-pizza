import { createSignal, onCleanup, onMount } from "solid-js";

const DEFAULT_WIDTH = 448;

export function useMaxWidth(maxWidth: number = DEFAULT_WIDTH) {
    const isWidthLower = checkWidthIsLower(maxWidth);

    const [isLower, setIsLower] = createSignal<boolean>(isWidthLower);

    onMount(() => window.addEventListener("resize", handler));
    onCleanup(() => window.removeEventListener("resize", handler));

    function handler() {
        const isWidthLower = checkWidthIsLower(maxWidth);
        const isLowerMatched = isLower();

        if (isWidthLower) {
            if (isLowerMatched) {
                return;
            }

            setIsLower(true);
        } else if (isLowerMatched) {
            setIsLower(false);
        }
    }

    return isLower;
}

function checkWidthIsLower(maxWidth: number) {
    return window.innerWidth <= maxWidth;
}
