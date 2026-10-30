import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

/**
 * Pré-carrega as fontes usadas acima da dobra (Instrument Serif e Geist, latin). Sem isso a fonte
 * só começa a baixar depois do JS, e o título do hero "pula" quando ela chega.
 */
function preloadFontes(): Plugin {
  return {
    name: "preload-fontes",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      handler(_html, ctx) {
        return Object.keys(ctx.bundle ?? {})
          .filter((arquivo) => /(instrument-serif-latin-400-(normal|italic)|geist-latin-wght-normal)-[\w-]+\.woff2$/.test(arquivo))
          .map((arquivo) => ({
            tag: "link",
            attrs: { rel: "preload", href: `/${arquivo}`, as: "font", type: "font/woff2", crossorigin: "" },
            injectTo: "head" as const,
          }));
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), preloadFontes()],
  resolve: { alias: { "@": path.resolve(import.meta.dirname, "src") } },
  build: { target: "es2022", sourcemap: false },
});
