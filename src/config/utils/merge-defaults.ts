import defu from 'defu'
import { ComponentName, useConfig } from '../..'

export function mergeDefaults<T extends Record<string, unknown>>(
    name: ComponentName,
    props: T
): T {
    const defaultProps = useConfig().components[name]?.defaultProps
    const mergedProps = defu(props, defaultProps || {}) as T
    return mergedProps
}
