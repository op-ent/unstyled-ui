import theme from '../theme'

export type Theme = typeof theme

export interface ThemeProviderProps {
    value?: Theme
    children: React.ReactNode
}
