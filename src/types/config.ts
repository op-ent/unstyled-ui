import { DeepPartial } from 'ts-essentials'
import { AccordionProps, ButtonProps, ButtonGroupProps } from '..'

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
export type CustomProps<T extends {}> = {
    [P in keyof T]: null
}

export type ComponentName = keyof ComponentsConfig

type _ComponentsConfig = {
    accordion: {
        defaultProps: AccordionProps
        customProps: CustomProps<CustomizableComponentsProps['accordion']>
    }
    button: {
        defaultProps: ButtonProps
        customProps: CustomProps<CustomizableComponentsProps['button']>
    }
    buttonGroup: {
        defaultProps: ButtonGroupProps
        customProps: CustomProps<CustomizableComponentsProps['buttonGroup']>
    }
}

export type ComponentsConfig = {
    [P in keyof _ComponentsConfig]: {
        defaultProps: DeepPartial<_ComponentsConfig[P]['defaultProps']>
        customProps: _ComponentsConfig[P]['customProps']
    }
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type DefaultCustomizableComponentsProps = Record<ComponentName, {}>

export type CustomizableComponentsPropsOverride = Record<string, never>

export type CustomizableComponentsProps = DefaultCustomizableComponentsProps &
    CustomizableComponentsPropsOverride
