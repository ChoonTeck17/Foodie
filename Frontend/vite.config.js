import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import path module

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  // base: "/",
  plugins: [react()],
  base: process.VITE_BASE_PATH || "Food-Website",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Use @ as the alias for the src directory
    },
  },
});
