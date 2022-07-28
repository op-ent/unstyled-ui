import React, { createContext, useContext } from 'react'
import defu from 'defu'
import theme from '../theme/index'
import { Theme, ThemeProviderProps } from '../types/theme'

const UnstyledUiTheme = createContext<Theme>(theme)
UnstyledUiTheme.displayName = 'UnstyledUiThemeProvider'

const ThemeProvider: React.FC<ThemeProviderProps> = ({
    value = theme,
    children,
}) => {
    const mergedValue: Theme = defu(theme, value)

    return (
        <UnstyledUiTheme.Provider value={mergedValue}>
            {children}
        </UnstyledUiTheme.Provider>
    )
}

const useTheme = () => useContext(UnstyledUiTheme)

export { UnstyledUiTheme, ThemeProvider, useTheme }
