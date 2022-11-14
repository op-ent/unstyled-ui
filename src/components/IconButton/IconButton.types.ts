import React from 'react'
import { DeepPartial } from 'ts-essentials'
import {
    CustomizableComponentsProps,
    ButtonLoadingOptions,
    ComponentProps,
    ButtonProps,
} from '../..'

export type IconButtonCustomizableProps =
    CustomizableComponentsProps['iconButton']

export type ButtonOmittedProps = 'leftIcon' | 'rightIcon' | 'loadingOptions'

export type ButtonLoadingOmittedOptions = 'text' | 'placement'

export type BaseButtonProps = Omit<ButtonProps, ButtonOmittedProps> & {
    loadingOptions: Omit<ButtonLoadingOptions, ButtonLoadingOmittedOptions>
}

export type IconButtonProps = BaseButtonProps & {
    icon?: React.ReactElement
    'aria-label': string
} & DeepPartial<IconButtonCustomizableProps>

export type DefaultIconButtonProps = DeepPartial<IconButtonProps>

export type IconButtonComponent = <C extends React.ElementType = 'button'>(
    props: ComponentProps<C, IconButtonProps>
) => React.ReactElement | null
