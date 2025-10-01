import { defineConfig } from "vite"
import { crx } from "@crxjs/vite-plugin"
import manifest from "./manifest.json"

export default defineConfig({
  plugins: [
    //@ts-expect-error idk why it type errors here but it works and it used to not type error
    crx({ manifest }) // CRXJS auto-parses manifest and wires entries (content scripts, service_worker, pages)
  ],
  build: {
    // optionally tune outDir, rollupOptions if you have multiple HTML pages (popup/options)
    outDir: "dist"
  }
})
