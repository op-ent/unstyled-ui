import React, { forwardRef } from 'react'
import { useTheme } from '../../theme'
import { ComponentProps, PolymorphicRef } from '../../types'
import { generateClassName } from '../../utils'
import { DefaultButtonTheme } from '../Button/Button.types'
import {
    ButtonGroupComponent,
    ButtonGroupProps,
    DefaultButtonGroupTheme,
} from './ButtonGroup.types'

export const ButtonGroup: ButtonGroupComponent = forwardRef(
    <C extends React.ElementType = 'button'>(
        _: ComponentProps<C, ButtonGroupProps>,
        ref?: PolymorphicRef<C>
    ) => {
        // 1. Initialization
        const theme = useTheme().buttonGroup
        const { base, variants, sizes } = theme.styles
        const defaultProps =
            theme.defaultProps as DefaultButtonGroupTheme['defaultProps']
        const props = { ...defaultProps, ..._ }

        // 2. Props
        const {
            as,
            unstyled,
            buttonProps,
            children,
            className,
            type = as === 'button' ? as : undefined,
            ...rest
        } = props
        const { variant, size, color } = {
            ...defaultProps.buttonProps,
            ...buttonProps,
        } as DefaultButtonTheme['defaultProps']

        // 3. Styles
        const buttonGroupBase = base?.initial
        const buttonGroupVariant = variants?.[variant]?.[color]
        const buttonGroupSize = sizes?.[size]
        const classes = generateClassName(
            className,
            buttonGroupBase,
            buttonGroupVariant,
            buttonGroupSize
        )(unstyled)

        // 4. Render
        const attrs = { ...rest, type }
        const Component = as as React.ElementType
        return (
            <Component ref={ref} className={classes} {...attrs}>
                {React.Children.map(children, (child) => {
                    if (!React.isValidElement(child)) {
                        return child
                    }
                    return React.cloneElement(child, {
                        ...buttonProps,
                        ...child.props,
                    })
                })}
            </Component>
        )
    }
)
