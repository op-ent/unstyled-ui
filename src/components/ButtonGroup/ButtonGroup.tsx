import React, { forwardRef } from 'react'
import { useComponentConfig, cloneComponentWithProps } from '../..'
import type {
    ButtonGroupComponent,
    ButtonGroupProps,
} from './ButtonGroup.types'

/**
 * ButtonGroups are used to group buttons together.
 */
export const ButtonGroup: ButtonGroupComponent = forwardRef<
    HTMLSpanElement,
    ButtonGroupProps
>((props, ref) => {
    const { mergeDefaults, getCustomProps, getStyleAttrs } =
        useComponentConfig('buttonGroup')
    const mergedProps = mergeDefaults(props)
    const { children, buttonProps, ...rest } = mergedProps
    const customProps = getCustomProps(mergedProps)
    const styleAttrs = getStyleAttrs({ ...customProps })

    return (
        <span ref={ref} data-part="root" {...styleAttrs} {...rest}>
            {React.Children.map(children as never, (child) =>
                cloneComponentWithProps(child, buttonProps || {})
            )}
        </span>
    )
})
