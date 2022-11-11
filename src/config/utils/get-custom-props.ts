import {
    ComponentName,
    Config,
    CustomizableComponentsProps,
    ExcludeEmpty,
} from '../..'

export function getCustomProps<T extends Record<string, unknown>>(
    name: ComponentName,
    config: Config,
    props: T
) {
    const componentCustomProps = config.components[name]?.customProps ?? {}

    type ValidValue = ExcludeEmpty<CustomizableComponentsProps[typeof name]>
    type ValidKey = keyof ValidValue

    const customProps: Partial<Record<ValidKey, unknown>> = {}
    const keys = Object.keys(componentCustomProps)
    for (const key of keys) {
        const value = (componentCustomProps as ValidValue)[key as ValidKey]
        customProps[key as ValidKey] = value
        delete props[key]
    }
    const newCustomProps = customProps as Pick<
        T,
        Exclude<ValidKey, number | symbol>
    >
    return newCustomProps
}
