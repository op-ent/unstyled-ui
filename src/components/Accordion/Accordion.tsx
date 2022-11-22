import React, { forwardRef, useId } from 'react'
import * as accordion from '@zag-js/accordion'
import { useMachine, normalizeProps, mergeProps } from '@zag-js/react'
import type { AccordionComponent, AccordionProps } from './Accordion.types'
import { useComponentConfig } from '../..'

export const Accordion: AccordionComponent = forwardRef<
    HTMLDivElement,
    AccordionProps
>((props, ref) => {
    const { splitProps, getStyleAttrs } = useComponentConfig('accordion')
    const { filteredProps, customProps } = splitProps(props)
    const { data, controls: context, ...rest } = filteredProps
    const styleAttrs = getStyleAttrs(customProps)

    const [state, send] = useMachine(accordion.machine({ id: useId() }), {
        context,
    })
    const api = accordion.connect(state, send, normalizeProps)

    const rootProps = mergeProps(api.rootProps, rest, styleAttrs)

    return (
        <div ref={ref} {...rootProps}>
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
})
