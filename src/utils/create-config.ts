import defu from 'defu'
import type { DeepPartial } from 'ts-essentials'
import type { Config } from '..'

export function createConfig(config: DeepPartial<Config>) {
    function extendConfig(customConfig: DeepPartial<Config>) {
        return defu(customConfig, config)
    }
    return { config, extendConfig }
}
