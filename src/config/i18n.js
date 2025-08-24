/** @type {import('astro-i18next').AstroI18nextConfig} */
export const i18nConfig = {
    defaultLocale: "en",
    locales: ["en", "th"],
    i18nextPlugins: {
      fsBackend: "i18next-fs-backend",
    },
};
