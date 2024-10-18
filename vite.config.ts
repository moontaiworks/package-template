import { resolve } from "node:path";

import { defineConfig } from "vite";

import packageJson from "./package.json";

const name = packageJson.name.split("/").pop();

export default defineConfig({
  build: {
    lib: {
      entry: resolve(import.meta.dirname, "src/index.ts"),
      fileName: "index",
      name,
    },
  },
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "src"),
    },
  },
});
