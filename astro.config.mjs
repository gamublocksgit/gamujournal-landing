import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const LOCALES = ["en", "ja", "pt-br", "ru", "fr", "es", "ko"];

export default defineConfig({
  site: "https://gamujournal.gamublocks.com",
  base: "/",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  output: "static",
  integrations: [sitemap()],
  i18n: {
    defaultLocale: "en",
    locales: LOCALES,
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
