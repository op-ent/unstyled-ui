import {
    ComponentProps,
    ComponentStyles,
    ComponentTheme,
    DefaultComponentTheme,
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
    /**
     * The button variant, such as `solid` or `outline`.
     * @default undefined
     */
    variant?: UUIButtonVariant
    /**
     * The button size, such as `sm` or `md`.
     * @default undefined
     */
    size?: UUIButtonSize
    /**
     * The button color, such as `primary` or `neutral`.
     * @default undefined
     */
    color?: UUIColor
    /**
     * Allows the button to grow to the width of its container.
     * @default false
     */
    block?: ButtonBlock
    /**
     * Disables the button.
     * @default false
     */
    disabled?: ButtonDisabled
    /**
     * Replaces button text with a spinner, or adds a `loadingText` if set.
     * @default false
     */
    loading?: ButtonLoading
    /**
     * Icon to display to the left of the button content.
     * @default undefined
     */
    leftIcon?: React.ReactElement
    /**
     * Icon to display to the right of the button content.
     * @default undefined
     */
    rightIcon?: React.ReactElement
    /**
     * Spinner shown when `loading` is set to `true`.
     * @default <div>...</div>
     */
    loader?: React.ReactElement
    /**
     * Adds a custom loading text next to the spinner.
     * @default undefined
     */
    loadingText?: string
    /**
     * Sets the spinner placement.
     * @default 'left'
     */
    loaderPlacement?: 'left' | 'right'
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

export type DefaultButtonTheme = DefaultComponentTheme<
    ButtonTheme,
    'leftIcon' | 'rightIcon' | 'loadingText'
>

export type ButtonComponent = <C extends React.ElementType = 'button'>(
    props: ComponentProps<C, ButtonProps>
) => React.ReactElement | null
