import { DeepPartial } from 'ts-essentials'
import { theme } from '../theme'
import { Color, DefaultProps } from './base'

export type Theme = typeof theme

export interface ThemeProviderProps {
    value?: DeepPartial<Theme>
    children: React.ReactNode
}

export interface ComponentStyles<
    Sizes extends string,
    Variants extends string
> {
    base?: {
        initial?: string
    }
    sizes?: Record<Sizes, string>
    variants?: Record<Variants, Record<Color, string>>
}

export interface ComponentTheme<
    Props extends DefaultProps,
    Styles extends ComponentStyles<S, V>,
    S extends string,
    V extends string
> {
    defaultProps?: Props & { as?: React.ElementType }
    styles?: Styles
}
