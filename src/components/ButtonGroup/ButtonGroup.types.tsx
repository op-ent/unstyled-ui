import React from 'react'
import {
    ComponentProps,
    ComponentStyles,
    ComponentTheme,
    DefaultComponentTheme,
    DefaultProps,
} from '../../types'
import {
    ButtonProps,
    UUIButtonSize,
    UUIButtonVariant,
} from '../Button/Button.types'

export interface ButtonGroupProps extends DefaultProps {
    children?: React.ReactNode
    buttonProps?: ButtonProps
}

export type ButtonGroupStyles = ComponentStyles<UUIButtonSize, UUIButtonVariant>

export type ButtonGroupTheme = ComponentTheme<
    ButtonGroupProps,
    ButtonGroupStyles,
    UUIButtonSize,
    UUIButtonVariant
>

export type DefaultButtonGroupTheme = DefaultComponentTheme<
    ButtonGroupTheme,
    'children'
>

export type ButtonGroupComponent = <C extends React.ElementType = 'span'>(
    props: ComponentProps<C, ButtonGroupProps>
) => React.ReactElement | null
