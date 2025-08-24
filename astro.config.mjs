// @ts-check
import { defineConfig } from 'astro/config';
import astroI18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
  integrations: [astroI18next()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "th"]
  }
});
