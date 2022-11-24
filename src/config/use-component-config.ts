import type { ComponentName } from '..'
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
        splitProps: <T extends Record<string, unknown>>(
            props: T,
            inheritedNames?: ComponentName[]
        ) => {
            const mergedProps = mergeDefaults({ name, props })
            const result = getCustomProps({
                name,
                config,
                props: mergedProps,
                inheritedNames,
            })
            return { mergedProps, ...result }
        },
        getStyleAttrs: <T extends Record<string, unknown>>(
            props: T,
            className?: string
        ) => getStyleAttrs({ config, name, identifier, props, className }),
    }
}
