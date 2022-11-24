import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ButtonGroup, Button, ConfigProvider } from '../src'
import type { ButtonGroupProps, ComponentProps } from '../src'
import { defaultArgTypes, parameters } from './utils'

type Props = ComponentProps<'button', ButtonGroupProps>

export default {
    component: ButtonGroup,
    parameters,
    argTypes: {
        ...defaultArgTypes,
        children: {
            control: {
                disable: true,
            },
        },
        leftIcon: {
            control: {
                disable: true,
            },
        },
        rightIcon: {
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
        disabled: false,
        loading: false,
        variant: 'solid',
    },
    render: (args) => (
        <ConfigProvider>
            <ButtonGroup {...args} />
        </ConfigProvider>
    ),
} as Meta<Props>

export const Default: StoryObj<Props> = {}

export const WithDefaultProps: StoryObj<Props> = {
    args: {
        disabled: true,
    },
}

export const OverridingDefaultProps: StoryObj<Props> = {
    args: {
        disabled: true,
        children: [
            <Button key="0" disabled={false}>
                Button
            </Button>,
            <Button key="1">Button</Button>,
            <Button key="2">Button</Button>,
        ],
    },
}
