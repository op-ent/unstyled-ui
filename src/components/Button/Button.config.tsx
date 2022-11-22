import React from 'react'
import type { DefaultButtonProps } from './Button.types'

export const DEFAULT_BUTTON_PROPS: DefaultButtonProps = {
    as: 'button',
    disabled: false,
    loading: false,
    loadingOptions: {
        loader: <div>...</div>,
        text: 'Loading',
        placement: 'left',
    },
}
