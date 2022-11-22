import type React from 'react'
import type { DeepPartial } from 'ts-essentials'
import type {
    ComponentProps,
    ButtonProps,
    CustomizableComponentsProps,
} from '../..'

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
