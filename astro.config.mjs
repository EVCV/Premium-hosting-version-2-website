import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://premium-hosting.co.uk",
  integrations: [
    tailwind({ configFile: "./tailwind.config.mjs" }),
    mdx(),
    sitemap()
  ],
  experimental: {
    contentIntellisense: true,
  },
});
