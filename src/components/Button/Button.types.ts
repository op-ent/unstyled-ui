import { DeepRequired } from 'ts-essentials'
import { ComponentProps, ComponentStyles, ComponentTheme } from '../../types'
import type { UnstyledUiGlobalColor, DefaultProps } from '../../types/base'

/* Button variant */

/**
 * Default button variant.
 */
export type DefaultUnstyledUiButtonVariant = string
/**
 * Override this type to change the button variant.
 *
 * @example
 * ```ts
 * declare module '@op-ent/unstyled-ui' {
 *      export interface UnstyledUiButtonVariantOverride {
 *          variant: "solid" | "outline"
 *      }
 * }
 * ```
 */
export type UnstyledUiButtonVariantOverride = Record<string, never>
/**
 * Button variant that can be overridden using the `UnstyledUiButtonVariantOverride` type.
 */
export type UnstyledUiButtonVariant = UnstyledUiButtonVariantOverride extends {
    variant: infer CustomVariant
}
    ? CustomVariant
    : DefaultUnstyledUiButtonVariant

/* Button size */

/**
 * Default button size.
 */
export type DefaultUnstyledUiButtonSize = string
/**
 * Override this type to change the button size.
 *
 * @example
 * ```ts
 * declare module '@op-ent/unstyled-ui' {
 *      export interface UnstyledUiButtonSizeOverride {
 *          size: "sm" | "md"
 *      }
 * }
 * ```
 */
export type UnstyledUiButtonSizeOverride = Record<string, never>
/**
 * Button size that can be overridden using the `UnstyledUiButtonSizeOverride` type.
 */
export type UnstyledUiButtonSize = UnstyledUiButtonSizeOverride extends {
    size: infer CustomSize
}
    ? CustomSize
    : DefaultUnstyledUiButtonSize

export type ButtonBlock = boolean
export type ButtonDisabled = boolean
export type ButtonLoading = boolean

export interface ButtonProps extends DefaultProps {
    variant?: UnstyledUiButtonVariant
    size?: UnstyledUiButtonSize
    color?: UnstyledUiGlobalColor
    block?: ButtonBlock
    disabled?: ButtonDisabled
    loading?: ButtonLoading
}

export type ButtonStyles = ComponentStyles<
    UnstyledUiButtonSize,
    UnstyledUiButtonVariant
> & {
    base?: {
        block?: string
    }
}

export type ButtonTheme = ComponentTheme<
    ButtonProps,
    ButtonStyles,
    UnstyledUiButtonSize,
    UnstyledUiButtonVariant
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
