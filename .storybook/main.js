const DEPLOY_PREFIX = '/unstyled-ui/'

/** @type {import('@storybook/react-vite').StorybookConfig} */
module.exports = {
    framework: {
        name: '@storybook/react-vite',
    },
    stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-postcss',
        {
            name: 'storybook-dark-mode',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
    typescript: {
        check: true, // type-check stories during Storybook build
    },
    async viteFinal(config, { configType }) {
        if (configType === 'PRODUCTION') {
            config.base = DEPLOY_PREFIX
        }
        return config
    },
    staticDirs: ['./public'],
}
