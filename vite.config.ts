import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/zustand-presentation/",
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
