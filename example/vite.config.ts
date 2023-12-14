import {defineConfig} from 'vite';

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    minify: false,
    emptyOutDir: true
  },
  server: {
    host: true,
    port: 5173
  }
});
