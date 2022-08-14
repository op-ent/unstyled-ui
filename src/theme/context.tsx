import React, { createContext, useContext } from 'react'
import defu from 'defu'
import theme from './theme'
import { Theme } from '../types/theme'
import { DeepPartial } from 'ts-essentials'

export const UnstyledUiTheme = createContext<Theme>(theme)
UnstyledUiTheme.displayName = 'UnstyledUiThemeProvider'

export interface ThemeProviderProps {
    value?: DeepPartial<Theme>
    children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    value = {},
    children,
}) => {
    const mergedValue = defu(value, theme) as Theme

    return (
        <UnstyledUiTheme.Provider value={mergedValue}>
            {children}
        </UnstyledUiTheme.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(UnstyledUiTheme)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
