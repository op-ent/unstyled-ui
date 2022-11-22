import React from 'react'
import type { DefaultIconButtonProps } from './IconButton.types'

export const DEFAULT_ICON_BUTTON_PROPS: DefaultIconButtonProps = {
    as: 'button',
    disabled: false,
    loading: false,
    loadingOptions: {
        loader: <div>....</div>,
        text: false,
    },
}
