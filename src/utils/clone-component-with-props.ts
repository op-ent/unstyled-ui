import React from 'react'

export function cloneComponentWithProps(
    component: object,
    props: Record<string, unknown>
) {
    if (!React.isValidElement(component)) {
        return component
    }
    return React.cloneElement(component, {
        ...props,
        ...(component.props as Record<string, unknown>),
    })
}
