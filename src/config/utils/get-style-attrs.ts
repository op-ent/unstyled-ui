import clsx from 'clsx'
import type { ComponentName, Config } from '../..'

export type GetStyleAttrsProps<T extends Record<string, unknown>> = {
    config: Config
    name: ComponentName
    identifier: string
    props: T
    className?: string
}

export function getStyleAttrs<T extends Record<string, unknown>>({
    config,
    name,
    identifier,
    props,
    className,
}: GetStyleAttrsProps<T>): { className: string; [key: string]: unknown } {
    const keys = config.components[name].customProps
    const mergedProps: Record<string, unknown> = { ...props }
    for (const key of keys) {
        const value = (() => {
            const _value = props[key]
            switch (_value) {
                case true:
                    return ''
                case false:
                    return undefined
                default:
                    return _value
            }
        })()
        mergedProps[key] = value
    }
    const styleAttrs = Object.fromEntries(
        Object.entries(mergedProps).map(([key, value]) => [
            config.dataPropTemplate({ prefix: config.prefix, prop: key }),
            value,
        ])
    )
    return { ...styleAttrs, className: clsx(identifier, className) }
}
