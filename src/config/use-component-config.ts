import { ComponentName } from '..'
import { getStyleAttrs, mergeDefaults, getCustomProps, useConfig } from '.'

export function useComponentConfig(name: ComponentName) {
    const config = useConfig()

    const identifier = config.identifierTemplate({
        prefix: config.prefix,
        id: name,
    })

    return {
        identifier,
        mergeDefaults: <T extends Record<string, unknown>>(props: T) =>
            mergeDefaults({ name, props }),
        getCustomProps: <T extends Record<string, unknown>>(props: T) =>
            getCustomProps({ name, config, props }),
        getStyleAttrs: <T extends Record<string, unknown>>(
            props: T,
            className?: string
        ) => getStyleAttrs({ config, name, identifier, props, className }),
    }
}
