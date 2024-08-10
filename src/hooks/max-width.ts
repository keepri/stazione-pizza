import { createSignal, onCleanup, onMount } from "solid-js";

const DEFAULT_WIDTH = 448;

export function useMaxWidth(maxWidth: number = DEFAULT_WIDTH) {
    const [isLower, setIsLower] = createSignal<boolean>(
        window.innerWidth <= maxWidth,
    );

    onMount(() => {
        window.addEventListener("resize", handler);
    });

    onCleanup(() => {
        window.removeEventListener("resize", handler);
    });

    function handler() {
        const isLowerMatched = isLower();

        if (window.innerWidth <= maxWidth) {
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
