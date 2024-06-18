import { defineConfig } from "vite";
import { resolve } from 'path'

export default defineConfig({
  base: "/PercentleJS/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        countries: resolve(__dirname, 'src/countries.html'),
        NFL: resolve(__dirname, 'src/NFL.html'),
        NBA: resolve(__dirname, 'src/NBA.html'),
      },
    },
  },
});