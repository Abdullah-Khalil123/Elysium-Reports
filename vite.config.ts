// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Your Express server address
        changeOrigin: true,
        ws: true,
      },
    },
  },
});
