import { ComponentMeta, Meta, Story } from '@storybook/react'
import defu from 'defu'

export function defineTemplate<P>(template: Story<P>) {
    return function (args: P) {
        const story = template.bind({})
        story.args = args
        return story
    }
}

export const DEFAULT_META: Meta = {
    argTypes: {
        children: {
            control: {
                type: 'text',
            },
        },
        as: {
            control: {
                disable: true,
            },
        },
        ref: {
            control: {
                disable: true,
            },
        },
    },
    args: {
        unstyled: false,
    },
    parameters: {
        controls: { expanded: true, sort: 'alpha' },
    },
}

export function defineMeta<P>(
    component,
    meta: Meta<P>
): ComponentMeta<typeof component> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return defu(meta, DEFAULT_META, { component }) as any
}

export function defineStory<P>(component, meta: Meta<P>, template: Story<P>) {
    const _meta = defineMeta(component, meta)
    const createStory = defineTemplate(template)
    return { meta: _meta, createStory }
}
