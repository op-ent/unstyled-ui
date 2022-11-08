import React, { forwardRef, useId } from 'react'
import * as accordion from '@zag-js/accordion'
import type { Context } from '@zag-js/accordion'
import { useMachine, normalizeProps } from '@zag-js/react'
import clsx from 'clsx'

type AccordionCustomizableProps = {
    size: 'sm' | 'md' | 'lg'
    color: 'primary' | 'neutral'
    variant: 'solid' | 'outline'
}

const defaults: AccordionCustomizableProps = {
    size: 'lg',
    color: 'neutral',
    variant: 'outline',
}

function intersection(
    o1: Record<string, unknown>,
    o2: Record<string, unknown>
): string[] {
    const [k1, k2] = [Object.keys(o1), Object.keys(o2)]
    const [first, next] = k1.length > k2.length ? [k2, o1] : [k1, o2]
    return Object.keys(first).filter({}.hasOwnProperty.bind(next))
}

function getData(props: Record<string, unknown>) {
    const keys = intersection(defaults, props)
    const mergedProps: Record<string, unknown> = { ...defaults }
    for (const key of keys) {
        mergedProps[key] = props[key]
        delete props[key]
    }
    const styleAttrs = Object.fromEntries(
        Object.entries(mergedProps).map(([key, value]) => [
            `data-uui-${key}`,
            value,
        ])
    )
    return { styleAttrs, nativeProps: props }
}

function getComponentConfig(
    name: keyof typeof componentIdentifiers,
    props: Record<string, unknown>
) {
    const identifier = componentIdentifiers[name]
    const { styleAttrs, nativeProps } = getData(props)
    return {
        identifier,
        styleAttrs,
        nativeProps: {
            ...nativeProps,
            className: clsx(
                identifier,
                nativeProps.className as string | undefined
            ),
        },
    }
}

export type AccordionItem = {
    title: string
    description?: string
    content: JSX.Element
    chevron?: JSX.Element
    disabled?: boolean
}

export type AccordionProps = {
    data: AccordionItem[]
    controls: Context
    className: string
} & Partial<AccordionCustomizableProps>

const componentIdentifiers = { accordion: 'uui-accordion' }

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
    (props, ref) => {
        const { data, controls: context, ...ownProps } = props

        const { styleAttrs, nativeProps } = getComponentConfig(
            'accordion',
            ownProps
        )

        const [state, send] = useMachine(accordion.machine({ id: useId() }), {
            context,
        })
        const api = accordion.connect(state, send, normalizeProps)

        return (
            <div ref={ref} {...api.rootProps} {...styleAttrs} {...nativeProps}>
                {data.map((item) => (
                    <div
                        key={item.title}
                        {...api.getItemProps({
                            value: item.title,
                            disabled: item.disabled,
                        })}
                    >
                        <h3>
                            <button
                                {...api.getTriggerProps({
                                    value: item.title,
                                    disabled: item.disabled,
                                })}
                            >
                                <div data-part="trigger-title-wrapper">
                                    <div data-part="trigger-title">
                                        {item.title}
                                    </div>
                                    {item.description && (
                                        <div data-part="trigger-description">
                                            {item.description}
                                        </div>
                                    )}
                                </div>
                                {item.chevron && (
                                    <div data-part="trigger-chevron">
                                        {item.chevron}
                                    </div>
                                )}
                            </button>
                        </h3>
                        <div
                            {...api.getContentProps({
                                value: item.title,
                                disabled: item.disabled,
                            })}
                        >
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
)
