import type { StorybookViteConfig } from '@storybook/builder-vite'

const config: StorybookViteConfig = {
    core: {
        builder: '@storybook/builder-vite',
    },
    stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
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
}

module.exports = config
