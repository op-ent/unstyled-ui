import {
    ComponentName,
    Config,
    CustomizableComponentsProps,
    ExcludeEmpty,
} from '../..'

export type GetCustomProps<T extends Record<string, unknown>> = {
    name: ComponentName
    config: Config
    props: T
}

export function getCustomProps<T extends Record<string, unknown>>({
    name,
    config,
    props,
}: GetCustomProps<T>) {
    const keys = config.components[name]?.customProps ?? []

    type ValidValue = ExcludeEmpty<CustomizableComponentsProps[typeof name]>
    type ValidKey = keyof ValidValue

    const customProps: Partial<Record<ValidKey, unknown>> = {}
    for (const key of keys) {
        const value = props[key]
        customProps[key as ValidKey] = value
        delete props[key]
    }
    const newCustomProps = customProps as Pick<
        T,
        Exclude<ValidKey, number | symbol>
    >
    return newCustomProps
}
