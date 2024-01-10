import path from 'path'
import url from 'url'
import glsl from "vite-plugin-glsl";
import { defineConfig } from 'astro/config'
import { SITE_URL } from './src/site.config'

const DIR_NAME = path.dirname(url.fileURLToPath(import.meta.url))

export default defineConfig({
  site: SITE_URL,
  base: '/',
  server: {
    port: 3000,
    host: true,
  },
  outDir: './htdocs',
  compressHTML: true,
  build: {
    assets: 'assets',
    inlineStylesheets: 'never',
  },
  vite: {
    plugins: [glsl()],
    css: {
      preprocessorOptions: {
        stylus: {
          imports: [
            path.resolve(DIR_NAME, './src/styles/imports/variables'),
            path.resolve(DIR_NAME, './src/styles/imports/tools/'),
          ],
        },
      },
    },
  },
})
