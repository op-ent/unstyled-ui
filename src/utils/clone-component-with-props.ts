import React from 'react'

export function cloneComponentWithProps(
    component: object | React.ReactNode,
    props: Record<string, unknown>
): React.ReactNode {
    if (!React.isValidElement(component)) {
        return null
    }
    return React.cloneElement(component, {
        ...props,
        ...(component.props as Record<string, unknown>),
    })
}
