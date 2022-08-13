import { DefaultButtonTheme } from './Button.types'

export const DEFAULT_BUTTON_THEME: DefaultButtonTheme = {
    defaultProps: {
        as: 'button',
        variant: '',
        size: '',
        color: '',
        block: false,
        disabled: false,
        loading: false,
        unstyled: false,
    },
    styles: {
        base: {
            initial: '',
            block: '',
        },
        sizes: {},
        variants: {},
    },
}
