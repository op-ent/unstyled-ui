import React from 'react'
import { DeepPartial } from 'ts-essentials'
import { ComponentProps, CustomizableComponentsProps } from '../../types'

export type ButtonCustomizableProps = CustomizableComponentsProps['button']

export type ButtonLoadingOptions = {
    loader?: React.ReactElement
    text?: string
    placement?: 'left' | 'right'
}

export type ButtonProps = {
    as?: React.ElementType
    children?: React.ReactNode
    disabled?: boolean
    loading?: boolean
    leftIcon?: React.ReactElement
    rightIcon?: React.ReactElement
    loadingOptions?: ButtonLoadingOptions
} & DeepPartial<ButtonCustomizableProps>

export type DefaultButtonProps = DeepPartial<ButtonProps>

export type ButtonComponent = <C extends React.ElementType = 'button'>(
    props: ComponentProps<C, ButtonProps>
) => React.ReactElement | null
