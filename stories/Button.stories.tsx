import React from 'react'
import { Button, ThemeProvider, ButtonProps, ComponentProps } from '../src'
import { defineStory } from './utils'

type Props = ComponentProps<'button', ButtonProps>

const { meta, createStory } = defineStory<Props>(
    Button,
    {
        title: 'Form/Button',
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
            loader: {
                control: {
                    disable: true,
                },
            },
            loaderPlacement: {
                control: {
                    type: 'inline-radio',
                },
            },
        },
        args: {
            children: 'Button',
            block: false,
            disabled: false,
            loading: false,
            loaderPlacement: 'left',
        },
    },
    (args) => (
        <ThemeProvider>
            <Button {...args} />
        </ThemeProvider>
    )
)

export default meta

export const Default = createStory({})

export const Disabled = createStory({
    disabled: true,
})

export const Block = createStory({
    block: true,
})

export const Loading = createStory({
    loading: true,
})

export const LoadingWithText = createStory({
    loading: true,
    loadingText: 'Loading',
})

export const CustomLoader = createStory({
    loading: true,
    loader: <div>Loading...</div>,
})

export const CustomLoaderPlacement = createStory({
    loading: true,
    loader: <div>Loading...</div>,
    loaderPlacement: 'right',
})

export const Unstyled = createStory({
    unstyled: true,
})
