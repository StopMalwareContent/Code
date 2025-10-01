import { defineCollection } from "astro:content"
import { docsLoader } from "@astrojs/starlight/loaders"
import { docsSchema } from "@astrojs/starlight/schema"
import { changelogsLoader } from "starlight-changelogs/loader"

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  changelogs: defineCollection({
    loader: changelogsLoader([
      {
        title: "Dashboard Changelog",
        provider: "changeset",
        base: "changelog/dashboard",
        changelog: "../dashboard/CHANGELOG.md"
      },
      {
        title: "API Changelog",
        provider: "changeset",
        base: "changelog/api",
        changelog: "../api/CHANGELOG.md"
      },
      {
        title: "Extension Changelog",
        provider: "changeset",
        base: "changelog/extension",
        changelog: "../extension/CHANGELOG.md"
      }
    ])
  })
}
