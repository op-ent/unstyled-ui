import React from 'react'
import { Button, ThemeProvider, ButtonProps, ComponentProps } from '../src'
import { defineStory } from './utils'
import { extendTheme, theme as defaultTheme } from '@op-ent/unstyled-ui-theme'

const theme = extendTheme({
    button: {
        defaultProps: {
            color: 'primary',
            loader: (
                <svg
                    className="animate-spin h-5 w-5 text-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
            ),
        },
        styles: {
            variants: {
                solid: {
                    primary: `${defaultTheme.button?.styles?.variants?.solid?.primary} disabled:opacity-50 disabled:cursor-not-allowed justify-center relative [&>svg]:absolute`,
                }, // space-x-2
            },
        },
    },
})

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
        <ThemeProvider value={theme}>
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
    className: 'w-32',
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
    loader: <div>...</div>,
})

export const CustomLoaderPlacement = createStory({
    loading: true,
    loaderPlacement: 'right',
})

export const Unstyled = createStory({
    unstyled: true,
})
