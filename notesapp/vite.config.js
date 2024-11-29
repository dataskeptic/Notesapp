import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // Ensures React-specific features work properly
  build: {
    outDir: 'dist', // Output directory
  },
});