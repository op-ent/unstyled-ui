import { DEFAULT_BUTTON_PROPS } from '..'
import type { DefaultButtonGroupProps } from './ButtonGroup.types'

export const DEFAULT_BUTTON_GROUP_PROPS: DefaultButtonGroupProps =
    (function () {
        const props = { ...DEFAULT_BUTTON_PROPS }
        delete props.as
        return props
    })()
