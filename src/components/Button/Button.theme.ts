import { DeepRequired } from 'ts-essentials'
import { ColorsMap } from '../../types/base'
import { ButtonTheme } from './Button.types'

const buttonSolid: ColorsMap = {
    primary: '',
    secondary: '',
    tertiary: '',
    success: '',
    danger: '',
    warning: '',
    info: '',
    neutral: '',
}
const buttonOutline: ColorsMap = {
    primary: '',
    secondary: '',
    tertiary: '',
    success: '',
    danger: '',
    warning: '',
    info: '',
    neutral: '',
}
const buttonGhost: ColorsMap = {
    primary: '',
    secondary: '',
    tertiary: '',
    success: '',
    danger: '',
    warning: '',
    info: '',
    neutral: '',
}

export const buttonTheme: DeepRequired<ButtonTheme> = {
    defaultProps: {
        as: 'button',
        variant: 'solid',
        size: 'md',
        color: 'neutral',
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
        sizes: {
            sm: '',
            md: '',
            lg: '',
        },
        variants: {
            solid: buttonSolid,
            outline: buttonOutline,
            ghost: buttonGhost,
        },
    },
}
