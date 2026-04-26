import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import "@tanstack/react-start/server-only";
import "@tanstack/react-start/client-only";

export default defineConfig({
  plugins: [
    tanstackStart(),
    react(),
    tailwindcss(),
    tsConfigPaths(),
  ],
  base: "/floaraya.github.io/",
  build: {
    outDir: "dist",
  },
  server: {
    port: 3000,
    host: true,
  },
});