import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true, // Allows using `describe`, `it`, `expect` without imports
        environment: 'jsdom', // Simulates a browser environment
        setupFiles: './src/setupTests.ts', // File for test setup (see below)
        css: false, // Optional: Include CSS in tests if needed
    },
})