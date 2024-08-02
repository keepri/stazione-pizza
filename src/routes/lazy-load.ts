import { lazy } from "solid-js";

export const Contact = lazy(async function load() {
    return { default: (await import("./contact/contact")).Contact };
});

export const About = lazy(async function load() {
    return { default: (await import("./about/about")).About };
});

export const NotFound = lazy(async function load() {
    return { default: (await import("./not-found/not-found")).NotFound };
});
