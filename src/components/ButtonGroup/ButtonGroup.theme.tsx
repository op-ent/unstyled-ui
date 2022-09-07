import { DEFAULT_BUTTON_THEME } from '../Button/Button.theme'
import { DefaultButtonGroupTheme } from './ButtonGroup.types'

export const DEFAULT_BUTTON_GROUP_THEME: DefaultButtonGroupTheme = {
    defaultProps: {
        as: 'div',
        unstyled: false,
        buttonProps: DEFAULT_BUTTON_THEME.defaultProps,
    },
    styles: {
        base: {
            initial: '',
        },
        sizes: {},
        variants: {},
    },
}
