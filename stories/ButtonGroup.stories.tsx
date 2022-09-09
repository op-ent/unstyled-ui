import React from 'react'
import {
    Button,
    ButtonGroup,
    ButtonGroupProps,
    ComponentProps,
    ThemeProvider,
} from '../src'
import { defineStory } from './utils'

type Props = ComponentProps<'div', ButtonGroupProps>

const { meta, createStory } = defineStory<Props>(
    ButtonGroup,
    {
        title: 'Form/ButtonGroup',
        argTypes: {
            children: {
                control: {
                    disable: true,
                },
            },
        },
        args: {
            children: [
                <Button key="0">Button</Button>,
                <Button key="1">Button</Button>,
                <Button key="2">Button</Button>,
            ],
        },
    },
    (args) => (
        <ThemeProvider>
            <ButtonGroup {...args} />
        </ThemeProvider>
    )
)

export default meta

export const Default = createStory({})

export const WithDefaultProps = createStory({
    buttonProps: {
        disabled: true,
    },
})

export const OverridingDefaultProps = createStory({
    buttonProps: {
        disabled: true,
    },
    children: [
        <Button key="0" disabled={false}>
            Button
        </Button>,
        <Button key="1">Button</Button>,
        <Button key="2">Button</Button>,
    ],
})

export const Unstyled = createStory({
    unstyled: true,
})
