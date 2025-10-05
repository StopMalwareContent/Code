// @ts-check
import { defineConfig, envField } from "astro/config"

import cloudflare from "@astrojs/cloudflare"

// https://astro.build/config
export default defineConfig({
  site: "https://dash.smc.lodine.xyz",
  server: {
    port: 5000
  },
  env: {
    schema: {
      CF_PAGES_COMMIT_SHA: envField.string({
        context: "client",
        access: "public",
        default: "a1b2c3d"
      })
    }
  },
  output: "server",
  adapter: cloudflare()
})
