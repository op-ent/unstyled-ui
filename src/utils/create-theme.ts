import defu from 'defu'
import { DeepPartial } from 'ts-essentials'
import { Theme } from '../types'

export function createTheme(theme: DeepPartial<Theme>) {
    function extendTheme(customTheme: DeepPartial<Theme>) {
        return defu(customTheme, theme)
    }

    return { theme, extendTheme }
}
