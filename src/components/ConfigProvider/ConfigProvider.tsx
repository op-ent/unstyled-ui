import defu from 'defu'
import React from 'react'
import { defaultConfig } from '../../config'
import type { Config, ConfigOverride } from '../..'
import { UnstyledUiConfigContext } from './context'

type ConfigProviderProps = {
    config?: ConfigOverride
    children: React.ReactNode
}

export function ConfigProvider({ config = {}, children }: ConfigProviderProps) {
    const mergedConfig = defu(config, defaultConfig) as Config

    return (
        <UnstyledUiConfigContext.Provider value={mergedConfig}>
            {children}
        </UnstyledUiConfigContext.Provider>
    )
}
