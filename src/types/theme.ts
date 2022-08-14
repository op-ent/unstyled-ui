import { ButtonTheme } from '../components'
import { UUIColor, DefaultProps } from './base'
import { DeepOverride } from './utils'

export type Theme = {
    button: ButtonTheme
}

/**
 * Default theme config.
 */
export interface DefaultUUIThemeConfig {
    global: {
        colors: string
    }
    components: {
        button: {
            variants: string
            sizes: string
        }
    }
}
/**
 * Override this type to change the theme config.
 *
 * @example
 * ```ts
 * declare module '@op-ent/unstyled-ui' {
 *      export interface UUIThemeConfigOverride {
 *          global: {
 *             colors: "red" | "blue"
 *          }
 *      }
 * }
 * ```
 */
export type UUIThemeConfigOverride = Record<string, never>

/**
 * Theme config that can be overridden using the `UUIThemeConfigOverride` type.
 */
export type UUIThemeConfig = DeepOverride<
    DefaultUUIThemeConfig,
    UUIThemeConfigOverride
>

export interface ComponentStyles<
    Sizes extends string,
    Variants extends string
> {
    base: {
        initial: string
    }
    sizes?: Record<Sizes, string>
    variants?: Record<Variants, Record<UUIColor, string>>
}

export interface ComponentTheme<
    Props extends DefaultProps,
    Styles extends ComponentStyles<S, V>,
    S extends string,
    V extends string
> {
    defaultProps?: Props & { as?: React.ElementType }
    styles: Styles
}
