import defaultTheme from "tailwindcss/defaultTheme";

import {
    STZ_BACKGROUND,
    STZ_DARK,
    STZ_LIGHT,
    STZ_PRIMARY,
} from "./src/utils/constants";

/** @type {import("tailwindcss").Config} */
export default {
    content: ["index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
                "dm-sans": ["DMSans", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
                dolmen: ["Dolmen", "sans-serif"],
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "4rem",
                    xl: "5rem",
                    "2xl": "6rem",
                },
            },
        },
        colors({ colors }) {
            return {
                ...colors,
                stz: {
                    background: STZ_BACKGROUND,
                    primary: STZ_PRIMARY,
                    dark: STZ_DARK,
                    light: STZ_LIGHT,
                },
            };
        },
    },
    plugins: [],
};
