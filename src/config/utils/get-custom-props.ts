import type {
    ComponentName,
    Config,
    CustomizableComponentsProps,
    ExcludeEmpty,
} from '../..'

export type GetCustomProps<T extends Record<string, unknown>> = {
    name: ComponentName
    config: Config
    props: T
    inheritedNames?: ComponentName[]
}

export function getCustomProps<T extends Record<string, unknown>>({
    name,
    config,
    props,
    inheritedNames,
}: GetCustomProps<T>) {
    function getKeys() {
        const names = [name, ...(inheritedNames || [])]
        const keys = names.reduce((acc, name) => {
            const _keys = config.components[name].customProps || []
            return [...acc, ..._keys]
        }, [] as string[])
        return [...new Set(keys)]
    }
    const keys = getKeys()

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
    const filteredProps = props as T
    return { customProps: newCustomProps, filteredProps }
}
