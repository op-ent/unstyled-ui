import type { DeepPartial } from 'ts-essentials'
import type {
    AccordionProps,
    ButtonProps,
    ButtonGroupProps,
    IconButtonProps,
} from '..'

export type ConfigOverride = DeepPartial<Config>

export type Config = {
    /**
     * Used in {identifierTemplate}
     */
    prefix: string
    /**
     * @default `${prefix}-${id}`
     */
    identifierTemplate: (ctx: { prefix: string; id: string }) => string
    /**
     * @default `data-${prefix}-${prop}`
     */
    dataPropTemplate: (ctx: { prefix: string; prop: string }) => string
    components: ComponentsConfig
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type CustomProps<T extends {}> = (keyof T extends never
    ? string
    : keyof T)[]

export type ComponentName = keyof ComponentsConfig

export type ComponentsConfig = {
    accordion: {
        defaultProps: DeepPartial<AccordionProps>
        customProps: CustomProps<CustomizableComponentsProps['accordion']>
    }
    button: {
        defaultProps: DeepPartial<ButtonProps>
        customProps: CustomProps<CustomizableComponentsProps['button']>
    }
    buttonGroup: {
        defaultProps: DeepPartial<ButtonGroupProps>
        customProps: CustomProps<CustomizableComponentsProps['buttonGroup']>
    }
    iconButton: {
        defaultProps: DeepPartial<IconButtonProps>
        customProps: CustomProps<CustomizableComponentsProps['iconButton']>
    }
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type DefaultCustomizableComponentsProps = Record<ComponentName, {}>

export type CustomizableComponentsPropsOverride = Record<string, never>

export type CustomizableComponentsProps = DefaultCustomizableComponentsProps &
    CustomizableComponentsPropsOverride
