import React from 'react'
import type { Context } from '@zag-js/accordion'
import { DeepPartial } from 'ts-essentials'
import { ComponentProps, CustomizableComponentsProps } from '../..'

export type AccordionCustomizableProps =
    CustomizableComponentsProps['accordion']

export type AccordionItem = {
    title: string
    description?: string
    content: JSX.Element
    chevron?: JSX.Element
    disabled?: boolean
}

export type AccordionProps = {
    data: AccordionItem[]
    controls: Context
    className: string
} & Partial<AccordionCustomizableProps>

export type DefaultAccordionProps = DeepPartial<AccordionProps>

export type AccordionComponent = (
    props: ComponentProps<'div', AccordionProps>
) => React.ReactElement | null
