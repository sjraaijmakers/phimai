// @ts-check
import { defineConfig } from 'astro/config';
import astroI18next from 'astro-i18next';
import { i18nConfig } from './src/config/i18n.js';

// https://astro.build/config
export default defineConfig({
  integrations: [astroI18next(i18nConfig)]
});