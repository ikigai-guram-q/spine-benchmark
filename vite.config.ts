import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
base: '/spine-benchmark/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        batch: resolve(__dirname, 'src/batch.html'),
      },
    },
  },
})