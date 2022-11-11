import React, { forwardRef } from 'react'
import { useComponentConfig, ComponentProps, PolymorphicRef } from '../..'
import { ButtonComponent, ButtonProps } from './Button.types'

export const Button: ButtonComponent = forwardRef(
    <C extends React.ElementType = 'button'>(
        props: ComponentProps<C, ButtonProps>,
        ref?: PolymorphicRef<C>
    ) => {
        const { mergeDefaults, getCustomProps, getStyleAttrs } =
            useComponentConfig('button')
        const mergedProps = mergeDefaults(props)
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
        } = mergedProps
        const customProps = getCustomProps(mergedProps)
        const styleAttrs = getStyleAttrs({ ...customProps, disabled, loading })

        const Component = as as React.ElementType
        const _loader = (
            <span data-part="loader" data-placement={loadingOptions?.placement}>
                {loadingOptions?.loader}
            </span>
        )
        const _leftIcon = <span data-part="left-icon">{leftIcon}</span>
        const _rightIcon = <span data-part="right-icon">{rightIcon}</span>
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
                {loading && loadingOptions?.text ? _loadingText : _children}
                {_rightIcon}
                {loading && loadingOptions?.placement === 'right' && _loader}
            </Component>
        )
    }
)
