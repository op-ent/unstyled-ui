import { Config } from '../types'
import { kebabize } from '../utils'
import { DEFAULT_ACCORDION_PROPS } from '../components/Accordion/Accordion.config'
import { DEFAULT_BUTTON_PROPS } from '../components/Button/Button.config'
import { DEFAULT_BUTTON_GROUP_PROPS } from '../components/ButtonGroup/ButtonGroup.config'
import { DEFAULT_ICON_BUTTON_PROPS } from '../components/IconButton/IconButton.config'

export const defaultConfig: Config = {
    prefix: 'uui',
    identifierTemplate: ({ prefix, id }) => `${prefix}-${kebabize(id)}`,
    dataPropTemplate: ({ prop }) => `data-${prop}`,
    components: {
        accordion: {
            defaultProps: DEFAULT_ACCORDION_PROPS,
            customProps: [],
        },
        button: {
            defaultProps: DEFAULT_BUTTON_PROPS,
            customProps: [],
        },
        buttonGroup: {
            defaultProps: DEFAULT_BUTTON_GROUP_PROPS,
            customProps: [],
        },
        iconButton: {
            defaultProps: DEFAULT_ICON_BUTTON_PROPS,
            customProps: [],
        },
    },
}
