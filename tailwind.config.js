const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
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
                padding: "1rem",
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
