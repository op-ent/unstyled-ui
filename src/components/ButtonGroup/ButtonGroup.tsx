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
    const { splitProps, getStyleAttrs } = useComponentConfig('buttonGroup')
    const { filteredProps, customProps } = splitProps(props, ['button'])
    const {
        children,
        leftIcon,
        rightIcon,
        loadingOptions,
        loading,
        disabled,
        ...rest
    } = filteredProps
    const styleAttrs = getStyleAttrs({
        ...customProps,
        disabled,
        loading,
    })
    const buttonProps = {
        disabled,
        loading,
        leftIcon,
        rightIcon,
        loadingOptions,
        ...customProps,
    }

    return (
        <span ref={ref} data-part="root" {...styleAttrs} {...rest}>
            {React.Children.map(children, (child) =>
                cloneComponentWithProps(child, buttonProps || {})
            )}
        </span>
    )
})
