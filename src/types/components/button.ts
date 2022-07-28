import type { Color } from '../../types/base'
import { PolymorphicComponentPropsWithRef } from '../../types/polymorphic'

export type ButtonVariant = 'solid' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonColor = Color
export type ButtonBlock = boolean
export type ButtonDisabled = boolean
export type ButtonLoading = boolean

export interface ButtonProps {
    children: React.ReactNode
    variant?: ButtonVariant
    size?: ButtonSize
    color?: ButtonColor
    block?: ButtonBlock
    disabled?: ButtonDisabled
    loading?: ButtonLoading
}

export type FullButtonProps<C extends React.ElementType> =
    PolymorphicComponentPropsWithRef<C, ButtonProps>

export type ButtonComponent = <C extends React.ElementType = 'button'>(
    props: FullButtonProps<C>
) => React.ReactElement | null
