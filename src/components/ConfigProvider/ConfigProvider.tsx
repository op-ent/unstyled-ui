import defu from 'defu'
import React from 'react'
import { DeepPartial } from 'ts-essentials'
import { defaultConfig, Config } from '../..'
import { UnstyledUiConfigContext } from './context'

type ConfigProviderProps = {
    config?: DeepPartial<Config>
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
