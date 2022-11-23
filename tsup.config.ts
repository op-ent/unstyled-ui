import { defineConfig } from 'tsup'

export default defineConfig([
    {
        entry: ['src/index.ts'],
        splitting: true,
        sourcemap: true,
        clean: true,
        dts: true,
        format: ['esm', 'cjs'],
        minify: true,
        treeshake: true,
    },
])
