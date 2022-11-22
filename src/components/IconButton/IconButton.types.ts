import type React from 'react'
import type { DeepPartial } from 'ts-essentials'
import type {
    CustomizableComponentsProps,
    ButtonLoadingOptions,
    ComponentProps,
    ButtonProps,
    DefaultButtonProps,
} from '../..'

export type IconButtonCustomizableProps =
    CustomizableComponentsProps['iconButton']

export type ButtonOmittedProps = 'leftIcon' | 'rightIcon' | 'loadingOptions'

export type ButtonLoadingOmittedOptions = 'text' | 'placement'

export type BaseButtonProps = Omit<ButtonProps, ButtonOmittedProps> & {
    loadingOptions: Omit<ButtonLoadingOptions, ButtonLoadingOmittedOptions>
}

export type IconButtonProps = BaseButtonProps & {
    icon?: React.ReactNode
    'aria-label': string
} & DeepPartial<IconButtonCustomizableProps>

export type DefaultIconButtonProps = DefaultButtonProps

export type IconButtonComponent = <C extends React.ElementType = 'button'>(
    props: ComponentProps<C, IconButtonProps>
) => React.ReactElement | null
