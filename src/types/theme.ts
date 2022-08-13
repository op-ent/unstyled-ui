import { DeepPartial } from 'ts-essentials'
import { ButtonTheme } from '../components'
import { UnstyledUiGlobalColor, DefaultProps } from './base'

export type Theme = {
    button: ButtonTheme
}

export interface ThemeProviderProps {
    value?: DeepPartial<Theme>
    children: React.ReactNode
}

export interface ComponentStyles<
    Sizes extends string,
    Variants extends string
> {
    base: {
        initial: string
    }
    sizes?: Record<Sizes, string>
    variants?: Record<Variants, Record<UnstyledUiGlobalColor, string>>
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
