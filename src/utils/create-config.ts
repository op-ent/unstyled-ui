import defu from 'defu'
import type { ConfigOverride } from '..'

export function createConfig(config: ConfigOverride): {
    config: ConfigOverride
    extendConfig: (customConfig: ConfigOverride) => ConfigOverride
} {
    function extendConfig(customConfig: ConfigOverride): ConfigOverride {
        return defu(customConfig, config)
    }
    return { config, extendConfig }
}
