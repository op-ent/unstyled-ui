import React, { createContext, useContext } from 'react';
import merge from 'deepmerge';
import theme from '../theme/index';
import combineMerge from '../utils/combineMerge';
import { Theme, ThemeProviderProps } from '../types/theme';

const UnstyledUiTheme = createContext<Theme>(theme);
UnstyledUiTheme.displayName = 'UnstyledUiThemeProvider';

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  value = theme,
  children,
}) => {
  const mergedValue: Theme = merge(theme, value, { arrayMerge: combineMerge });

  return (
    <UnstyledUiTheme.Provider value={mergedValue}>
      {children}
    </UnstyledUiTheme.Provider>
  );
};

const useTheme = () => useContext(UnstyledUiTheme);

export { UnstyledUiTheme, ThemeProvider, useTheme };
