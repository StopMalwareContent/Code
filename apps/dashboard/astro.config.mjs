// @ts-check
import { defineConfig } from "astro/config"

import node from "@astrojs/node"

// https://astro.build/config
export default defineConfig({
  server: {
    port: 5000
  },

  adapter: node({
    mode: "standalone"
  })
})
