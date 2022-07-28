/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    test: {
        // Jest like globals
        globals: true,
        environment: 'jsdom',
        include: ['tests/**/*.{test,spec}.{js,jsx,ts,tsx}'],
        // Extend jest-dom matchers
        setupFiles: ['./setupTest.js'],
    },
})
