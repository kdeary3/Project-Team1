/// <reference types="vitest"  />
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
    hmr: {
      clientPort: 3000,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
  plugins: [
    !process.env.VITEST && reactRouter(),
    tailwindcss(),


  ],
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    outDir: 'build',
  },
  test: {
    globals: true, // Allows using `describe`, `it`, `expect` without imports
    environment: 'jsdom', // Simulates a browser environment
    setupFiles: './app/setupTests.ts', // File for test setup (see below)
    css: false, // Optional: Include CSS in tests if needed
  },
});
