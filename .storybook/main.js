/** @type {import('@storybook/builder-vite').StorybookViteConfig} */
module.exports = {
    core: {
        builder: '@storybook/builder-vite',
    },
    stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        'storybook-dark-mode',
    ],
    // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
    typescript: {
        check: true, // type-check stories during Storybook build
    },
    async viteFinal(config, {}) {
        return config
    },
    staticDirs: ['./public'],
}
