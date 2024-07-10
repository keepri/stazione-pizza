/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
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
