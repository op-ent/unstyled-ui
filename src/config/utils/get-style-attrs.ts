import clsx from 'clsx'
import { Config } from '../..'

export function getStyleAttrs<T extends Record<string, unknown>>(
    config: Config,
    identifier: string,
    props: T,
    className?: string
): { className: string; [key: string]: unknown } {
    const keys = Object.keys(props)
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
