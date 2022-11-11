import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Button, ConfigProvider, ButtonProps, ComponentProps } from '../src'
import { defaultArgTypes, parameters } from './utils'

type Props = ComponentProps<'button', ButtonProps>

export default {
    component: Button,
    parameters,
    argTypes: {
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
        ...defaultArgTypes,
    },
    args: {
        children: 'Button',
        disabled: false,
        loading: false,
    },
    render: (args) => (
        <ConfigProvider>
            <Button {...args} />
        </ConfigProvider>
    ),
} as Meta<Props>

export const Default: StoryObj<Props> = {
    args: { type: 'button' },
}
export const Disabled: StoryObj<Props> = { args: { disabled: true } }

export const Loading: StoryObj<Props> = {
    args: {
        loading: true,
    },
}

export const LoadingWithText: StoryObj<Props> = {
    args: {
        loading: true,
        loadingOptions: {
            text: 'Test',
        },
    },
}

export const CustomLoader: StoryObj<Props> = {
    args: {
        loading: true,
        loadingOptions: {
            loader: <div>LOADER</div>,
        },
    },
}

export const CustomLoaderPlacement: StoryObj<Props> = {
    args: {
        loading: true,
        loadingOptions: {
            placement: 'right',
        },
    },
}
