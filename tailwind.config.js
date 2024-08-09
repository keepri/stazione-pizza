import defaultTheme from "tailwindcss/defaultTheme";

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
                    background: "#F6EAD8",
                    primary: "#CD5140",
                    dark: "#401211",
                    light: "#FFFFFF",
                },
            };
        },
    },
    plugins: [],
};
