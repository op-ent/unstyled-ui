import defu from 'defu'
import { useConfig } from '../..'
import type { ComponentName } from '../..'

export type MergeDefaultsProps<T extends Record<string, unknown>> = {
    name: ComponentName
    props: T
}

export function mergeDefaults<T extends Record<string, unknown>>({
    name,
    props,
}: MergeDefaultsProps<T>): T {
    const defaultProps = useConfig().components[name]?.defaultProps
    const mergedProps = defu(props, defaultProps || {}) as T
    return mergedProps
}
