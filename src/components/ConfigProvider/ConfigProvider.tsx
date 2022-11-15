import defu from 'defu'
import React, { useMemo } from 'react'
import { defaultConfig, Config, ConfigOverride } from '../..'
import { UnstyledUiConfigContext } from './context'

type ConfigProviderProps = {
    config?: ConfigOverride
    children: React.ReactNode
}

export function ConfigProvider({ config = {}, children }: ConfigProviderProps) {
    const mergedConfig = defu(config, defaultConfig) as Config

    const memoizedValue = useMemo(() => mergedConfig, [config])

    return (
        <UnstyledUiConfigContext.Provider value={memoizedValue}>
            {children}
        </UnstyledUiConfigContext.Provider>
    )
}
