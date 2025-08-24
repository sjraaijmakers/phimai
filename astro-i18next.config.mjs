/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
    defaultLocale: "en",
    locales: ["en", "th", "fr"],
    i18nextPlugins: {
      fsBackend: "i18next-fs-backend",
    },
  };