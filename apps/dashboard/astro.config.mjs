// @ts-check
import { defineConfig } from "astro/config"

import cloudflare from "@astrojs/cloudflare"

// https://astro.build/config
export default defineConfig({
  site: "https://dash.smc.lodine.xyz",
  server: {
    port: 5000
  },
  output: "server",
  adapter: cloudflare()
})
