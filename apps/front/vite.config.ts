import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: true,
    outDir: 'dist/client',
    sourcemap: true,
  },
  base: '',
  root: ''
})
