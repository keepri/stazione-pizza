import { createSignal, onCleanup, onMount } from "solid-js";

const HIDE_LOGO_SCROLL_Y = 130;
const HIDE_LOGO_WIDTH = 448;

export function useShowLogo() {
    const [show, setShow] = createSignal<boolean>(true);

    onMount(() => {
        window.addEventListener("scroll", handler);
        window.addEventListener("resize", handler);
    });

    onCleanup(() => {
        window.removeEventListener("scroll", handler);
        window.removeEventListener("resize", handler);
    });

    function handler() {
        const isShowing = show();

        if (!(window.innerWidth <= HIDE_LOGO_WIDTH)) {
            if (!isShowing) {
                setShow(true);
            }

            return;
        }

        const isScrollPassed = window.scrollY >= HIDE_LOGO_SCROLL_Y;

        if (isScrollPassed && isShowing) {
            setShow(false);
        } else if (!isScrollPassed && !isShowing) {
            setShow(true);
        }
    }

    return show;
}
