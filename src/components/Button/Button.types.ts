import { DeepRequired } from 'ts-essentials'
import {
    ComponentProps,
    ComponentStyles,
    ComponentTheme,
    UUIThemeConfig,
} from '../../types'
import type { UUIColor, DefaultProps } from '../../types/base'

export type UUIButtonVariant =
    UUIThemeConfig['components']['button']['variants']

export type UUIButtonSize = UUIThemeConfig['components']['button']['sizes']

export type ButtonBlock = boolean
export type ButtonDisabled = boolean
export type ButtonLoading = boolean

export interface ButtonProps extends DefaultProps {
    variant?: UUIButtonVariant
    size?: UUIButtonSize
    color?: UUIColor
    block?: ButtonBlock
    disabled?: ButtonDisabled
    loading?: ButtonLoading
}

export type ButtonStyles = ComponentStyles<UUIButtonSize, UUIButtonVariant> & {
    base?: {
        block?: string
    }
}

export type ButtonTheme = ComponentTheme<
    ButtonProps,
    ButtonStyles,
    UUIButtonSize,
    UUIButtonVariant
>

export type DefaultButtonTheme = DeepRequired<Omit<ButtonTheme, 'styles'>> & {
    styles: ButtonStyles & {
        base: {
            initial: string
            block: string
        }
    }
}

export type ButtonComponent = <C extends React.ElementType = 'button'>(
    props: ComponentProps<C, ButtonProps>
) => React.ReactElement | null
