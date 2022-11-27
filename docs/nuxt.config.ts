export default defineNuxtConfig({
    extends: '@nuxt-themes/docus',
    css: ['~/assets/css/main.css'],
    content: {
        highlight: {
            preload: ['jsx', 'tsx'],
        },
    },
})
