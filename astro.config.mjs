// @ts-check
import { defineConfig } from 'astro/config';
import astroI18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
  integrations: [
    astroI18next({
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
    })
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "th"]
  }
});