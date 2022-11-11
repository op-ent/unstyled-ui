import { useContext } from 'react'
import { UnstyledUiConfigContext } from '..'

export function useConfig() {
    const context = useContext(UnstyledUiConfigContext)
    if (context === undefined) {
        throw new Error('useConfig must be used within a ConfigProvider')
    }
    return context
}
