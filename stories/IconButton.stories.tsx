import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
    IconButton,
    ConfigProvider,
    IconButtonProps,
    ComponentProps,
} from '../src'
import { defaultArgTypes, parameters } from './utils'

type Props = ComponentProps<'button', IconButtonProps>

export default {
    component: IconButton,
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
        icon: <div>Icon</div>,
        disabled: false,
        loading: false,
        'aria-label': 'Icon',
    },
    render: (args) => (
        <ConfigProvider>
            <IconButton {...args} />
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

export const CustomLoader: StoryObj<Props> = {
    args: {
        loading: true,
        loadingOptions: {
            loader: <div>LOADER</div>,
        },
    },
}
