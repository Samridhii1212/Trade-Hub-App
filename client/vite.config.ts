import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 5173, // Use the Render-provided PORT or fallback to 5173
    host: true, // Allow access from the network,
    allowedHosts: ['https://trade-hub-app-frontend.onrender.com'], // Add the Render host

  },
});
