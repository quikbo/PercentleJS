import { defineConfig } from "vite";

export default defineConfig({
  base: "/PercentleJS/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        src: resolve(__dirname, 'src/countries.html'),
        src: resolve(__dirname, 'src/NFL.html'),
        src: resolve(__dirname, 'src/NBA.html'),
      },
    },
  },
});