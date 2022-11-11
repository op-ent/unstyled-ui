import React from 'react'
import { DeepPartial } from 'ts-essentials'
import { ComponentProps, ButtonProps, CustomizableComponentsProps } from '../..'

export type ButtonGroupCustomizableProps =
    CustomizableComponentsProps['buttonGroup']

export type ButtonGroupProps = {
    children?: React.ReactNode
    buttonProps?: Omit<ButtonProps, 'children'>
} & DeepPartial<ButtonGroupCustomizableProps>

export type DefaultButtonGroupProps = DeepPartial<ButtonGroupProps>

export type ButtonGroupComponent = (
    props: ComponentProps<'span', ButtonGroupProps>
) => React.ReactElement | null
