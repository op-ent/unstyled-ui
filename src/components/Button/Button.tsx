import React, { forwardRef } from 'react'
import type { ComponentProps, PolymorphicRef } from '../..'
import { useComponentConfig } from '../..'
import type { ButtonComponent, ButtonProps } from './Button.types'

export const Button: ButtonComponent = forwardRef(
    <C extends React.ElementType = 'button'>(
        props: ComponentProps<C, ButtonProps>,
        ref?: PolymorphicRef<C>
    ) => {
        const { splitProps, getStyleAttrs } = useComponentConfig('button')
        const { filteredProps, customProps } = splitProps(props)
        const {
            children,
            as,
            leftIcon,
            rightIcon,
            loadingOptions,
            loading,
            disabled,
            type,
            ...rest
        } = filteredProps
        const styleAttrs = getStyleAttrs({ ...customProps, disabled, loading })

        const Component = as as React.ElementType
        const _loader = (
            <span data-part="loader" data-placement={loadingOptions?.placement}>
                {loadingOptions?.loader}
            </span>
        )
        const _leftIcon = (
            <span data-part="left-icon" aria-hidden>
                {leftIcon}
            </span>
        )
        const _rightIcon = (
            <span data-part="right-icon" aria-hidden>
                {rightIcon}
            </span>
        )
        const _children = <span data-part="children">{children}</span>
        const _loadingText = (
            <span data-part="loading-text">{loadingOptions?.text}</span>
        )

        return (
            <Component
                ref={ref}
                data-part="root"
                disabled={disabled || loading}
                type={type || (as === 'button' ? as : undefined)}
                {...styleAttrs}
                {...rest}
            >
                {loading && loadingOptions?.placement === 'left' && _loader}
                {_leftIcon}
                {loading &&
                loadingOptions?.text !== false &&
                loadingOptions?.text
                    ? _loadingText
                    : _children}
                {_rightIcon}
                {loading && loadingOptions?.placement === 'right' && _loader}
            </Component>
        )
    }
)
