import {
    Config,
    DEFAULT_ACCORDION_PROPS,
    DEFAULT_BUTTON_PROPS,
    DEFAULT_BUTTON_GROUP_PROPS,
    kebabize,
    DEFAULT_ICON_BUTTON_PROPS,
} from '..'

export const defaultConfig: Config = {
    prefix: 'uui',
    identifierTemplate: ({ prefix, id }) => `${prefix}-${kebabize(id)}`,
    dataPropTemplate: ({ prop }) => `data-${prop}`,
    components: {
        accordion: {
            defaultProps: DEFAULT_ACCORDION_PROPS,
            customProps: {},
        },
        button: {
            defaultProps: DEFAULT_BUTTON_PROPS,
            customProps: {},
        },
        buttonGroup: {
            defaultProps: DEFAULT_BUTTON_GROUP_PROPS,
            customProps: {},
        },
        iconButton: {
            defaultProps: DEFAULT_ICON_BUTTON_PROPS,
            customProps: {},
        },
    },
}
