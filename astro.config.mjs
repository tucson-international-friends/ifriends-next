// @ts-check
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Static by default. The two Notion-backed routes (about, newsletters)
  // opt into on-demand rendering via `export const prerender = false`.
  output: "static",
  adapter: vercel(),
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
});
