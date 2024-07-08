/** @type {import("prettier").Config} */
module.exports = {
    tabWidth: 4,
    plugins: [
        "@trivago/prettier-plugin-sort-imports",
        // "prettier-plugin-tailwindcss",
    ],
    // @trivago/prettier-plugin-sort-imports
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrder: ["^@/(.*)$", "^[./]"],
};
