import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import solidSvg from "vite-plugin-solid-svg";

export default defineConfig({
    plugins: [solidPlugin(), solidSvg({ defaultAsComponent: true })],
    server: {
        port: 3000,
    },
    build: {
        assetsDir: "src/assets",
        target: "esnext",
    },
});
