import { defineConfig } from 'tsup'
// import fsp from 'fs/promises'
// import { join } from 'path'

// function getFilename(name: string) {
//     return name.split('.')[0]
// }

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
        bundle: true,
        // async onSuccess() {
        //     const BASE_PATH = join(__dirname, './dist/components')
        //     const files = await fsp.readdir(BASE_PATH)
        //     const folders: string[] = []
        //     for (const file of files) {
        //         const filename = getFilename(file)
        //         if (filename !== 'index') {
        //             folders.push(filename)
        //         }
        //     }
        //     for (const folder of folders) {
        //         const filenames = [`${folder}.js`, `${folder}.mjs`]
        //         for (const filename of filenames) {
        //             const filePath = join(BASE_PATH, `${folder}/${filename}`)
        //             const data = await fsp.readFile(filePath, 'utf8')
        //             const newContent = filename.endsWith('.mjs')
        //                 ? `"use client";\n${data}`
        //                 : data.replace(
        //                       `'use strict';`,
        //                       `'use strict';\n"use client";\n`
        //                   )
        //             await fsp.writeFile(filePath, newContent)
        //         }
        //     }
        // },
    },
])
