import { defineConfig } from "vite";
import path from "path";
import glsl from "vite-plugin-glsl";

export default defineConfig({
  root: "./src",
  server: {
    host: true,
  },
  build: {
    outDir: "../dist",
    minify: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    glsl({
      compress: true,
    }),
  ],
});
