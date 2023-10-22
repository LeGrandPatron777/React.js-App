import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    proxy: {
      '/api/travelpayouts': {
        target: 'https://api.travelpayouts.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/travelpayouts/, ''),
      },
      '/api/hotellook': {
        target: 'https://engine.hotellook.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/hotellook/, '/api'),

      },
    },
  },
  plugins: [react()],
});
