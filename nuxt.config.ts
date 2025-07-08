// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    future: {
        compatibilityVersion: 4,
    },
    css: ["~/assets/css/main.css"],
    devtools: { enabled: true },
    modules: ["@nuxt/ui", "@nuxtjs/i18n", "@nuxt/eslint", "@vueuse/nuxt"],

    colorMode: {
        preference: "dark",
        fallback: "dark",
    },

    imports: {
        dirs: ["./types"],
    },

    i18n: {
        bundle: {
            optimizeTranslationDirective: false,
        },
        locales: [
            { code: "de", name: "Deutsch", file: "de.json" },
            { code: "en", name: "English", file: "en.json" },
        ],
        defaultLocale: "de",
    },
});
