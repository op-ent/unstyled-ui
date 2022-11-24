export default defineAppConfig({
    docus: {
        title: 'Unstyled UI Docs',
        description: 'Learn how to use Unstyled UI',
        url: 'https://unstyled-ui.docs.op-ent.fr',
        layout: 'default',
        image: '/preview.png',
        socials: {
            twitter: '@opent_oss',
            github: 'op-ent/unstyled-ui',
        },
        github: {
            root: 'docs/content',
            edit: true,
        },
        aside: {
            level: 1,
        },
        header: {
            title: 'Unstyled UI',
            logo: true,
        },
    },
})
