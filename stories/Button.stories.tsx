import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, ThemeProvider, ButtonProps, useTheme } from '../src'

const meta: Meta = {
    title: 'Welcome',
    component: Button,
    argTypes: {
        children: {
            control: {
                type: 'text',
            },
        },
    },
    parameters: {
        controls: { expanded: true },
    },
}

export default meta

const Tmp = () => {
    const theme = useTheme()
    return (
        <pre style={{ backgroundColor: 'black', color: 'white' }}>
            {JSON.stringify(theme, null, 2)}
        </pre>
    )
}

const Template: Story<ButtonProps> = (args) => (
    <ThemeProvider
        value={{
            button: {
                defaultProps: {
                    color: 'primary',
                    variant: 'solid',
                },
                styles: {
                    variants: {
                        solid: {
                            primary: 'a',
                        },
                    },
                },
            },
        }}
    >
        <Tmp />
        <Button {...args} />
    </ThemeProvider>
)

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {
    children: 'Hello Button',
}
