/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        include: ['tests/**/*.{test,spec}.{js,jsx,ts,tsx}'],
        setupFiles: ['./tests.setup.js'],
    },
})
