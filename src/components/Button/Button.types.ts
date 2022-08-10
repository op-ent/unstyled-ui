import { ComponentStyles, ComponentTheme } from '../../types'
import type { Color, DefaultProps } from '../../types/base'

export type ButtonVariant = 'solid' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonColor = Color
export type ButtonBlock = boolean
export type ButtonDisabled = boolean
export type ButtonLoading = boolean

export interface ButtonProps extends DefaultProps {
    variant?: ButtonVariant
    size?: ButtonSize
    color?: ButtonColor
    block?: ButtonBlock
    disabled?: ButtonDisabled
    loading?: ButtonLoading
}

export type ButtonStyles = ComponentStyles<ButtonSize, ButtonVariant> & {
    base?: {
        block?: string
    }
}

export type ButtonTheme = ComponentTheme<
    ButtonProps,
    ButtonStyles,
    ButtonSize,
    ButtonVariant
>
