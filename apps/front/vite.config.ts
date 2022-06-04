import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: true,
    outDir: 'dist/public',
    sourcemap: true,
  },
  base: '',
  root: ''
})
