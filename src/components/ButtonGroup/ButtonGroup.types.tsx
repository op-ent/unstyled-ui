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
    /**
     * The props to pass to every button in the group.
     * This will be merged with the props passed to each button.
     * @default DEFAULT_BUTTON_THEME.defaultProps
     */
    buttonProps?: ButtonProps
}

export type ButtonGroupStyles = ComponentStyles<UUIButtonSize, UUIButtonVariant>

export type ButtonGroupTheme = ComponentTheme<
    ButtonGroupProps,
    ButtonGroupStyles,
    UUIButtonSize,
    UUIButtonVariant
>

export type DefaultButtonGroupTheme = DefaultComponentTheme<ButtonGroupTheme>

export type ButtonGroupComponent = <C extends React.ElementType = 'span'>(
    props: ComponentProps<C, ButtonGroupProps>
) => React.ReactElement | null
