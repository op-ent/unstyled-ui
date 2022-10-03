/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { withTheme } = require('@op-ent/unstyled-ui-theme')

/** @type {import('tailwindcss').Config} */
module.exports = withTheme({
    content: ['./stories/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
    theme: {
        extend: {},
    },
    plugins: [],
})
