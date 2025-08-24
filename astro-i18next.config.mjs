/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "th"],
  i18next: {
    debug: false,
    initImmediate: false,
    backend: {
      loadPath: "./public/locales/{{lng}}/{{ns}}.json",
    },
  },
  i18nextPlugins: {
    fsBackend: "i18next-fs-backend",
  },
};