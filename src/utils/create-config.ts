import defu from 'defu'
import { DeepPartial } from 'ts-essentials'
import { Config } from '..'

export function createConfig(config: DeepPartial<Config>) {
    function extendConfig(customConfig: DeepPartial<Config>) {
        return defu(customConfig, config)
    }
    return { config, extendConfig }
}
