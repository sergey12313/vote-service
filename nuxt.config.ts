import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  eslint: {
    config: {
      standalone: false,
    },
  },
  devtools: { enabled: true },
  css: ["./app/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
  ],
});
