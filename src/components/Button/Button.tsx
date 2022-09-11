import React, { forwardRef } from 'react'
import {
    ButtonComponent,
    ButtonProps,
    DefaultButtonTheme,
} from './Button.types'
import { ComponentProps, PolymorphicRef } from '../../types/polymorphic'
import { useTheme } from '../../theme'
import { generateClassName } from '../../utils/generate-class-name'

/**
 * Buttons are used primarily for actions. Depending on its variant, its value varies.
 */
export const Button: ButtonComponent = forwardRef(
    <C extends React.ElementType = 'button'>(
        _: ComponentProps<C, ButtonProps>,
        ref?: PolymorphicRef<C>
    ) => {
        // 1. Initialization
        const theme = useTheme().button
        const { base, variants, sizes } = theme.styles
        const defaultProps =
            theme.defaultProps as DefaultButtonTheme['defaultProps']
        const props = { ...defaultProps, ..._ }

        // 2. Props
        const {
            as,
            variant,
            size,
            color,
            block,
            disabled,
            loading,
            unstyled,
            leftIcon,
            rightIcon,
            loader,
            loadingText,
            loaderPlacement,
            children,
            className,
            type = as === 'button' ? as : undefined,
            ...rest
        } = props

        // 3. styles
        const buttonBase = base?.initial
        const buttonBlock = block && base?.block
        const buttonVariant = variants?.[variant]?.[color]
        const buttonSize = sizes?.[size]
        const classes = generateClassName(
            className,
            buttonBase,
            buttonBlock,
            buttonVariant,
            buttonSize
        )(unstyled)

        // 4. Render
        const attrs = { ...rest, disabled: disabled || loading, type }
        const Component = as as React.ElementType
        const childrenSpan = (
            <span style={{ opacity: loading ? 0 : 100 }}>{children}</span>
        )
        return (
            <Component ref={ref} className={classes} {...attrs}>
                {loading && loaderPlacement === 'left' && loader}
                {leftIcon}
                {loading ? loadingText || childrenSpan : childrenSpan}
                {rightIcon}
                {loading && loaderPlacement === 'right' && loader}
            </Component>
        )
    }
)
