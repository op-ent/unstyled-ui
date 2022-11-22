import React, { forwardRef, isValidElement, cloneElement } from 'react'
import { useComponentConfig, Button } from '../..'
import type { ComponentProps, PolymorphicRef } from '../..'
import type { IconButtonComponent, IconButtonProps } from './IconButton.types'

export const IconButton: IconButtonComponent = forwardRef(
    <C extends React.ElementType = 'button'>(
        props: ComponentProps<C, IconButtonProps>,
        ref?: PolymorphicRef<C>
    ) => {
        const { splitProps, getStyleAttrs } = useComponentConfig('iconButton')
        const { filteredProps, customProps } = splitProps(props)
        const {
            children,
            icon,
            'aria-label': ariaLabel,
            ...rest
        } = filteredProps
        const styleAttrs = getStyleAttrs(customProps)

        const element = icon || children
        const _children = isValidElement(element)
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
              cloneElement(element as any, {
                  'aria-hidden': true,
              })
            : null

        return (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <Button ref={ref} aria-label={ariaLabel} {...styleAttrs} {...rest}>
                {_children}
            </Button>
        )
    }
)
