import { UUIThemeConfig } from './theme'

/**
 * A global color type shared by the entire library.
 */
export type UUIColor = UUIThemeConfig['global']['colors']

export type DefaultProps = {
    /**
     * Disables any applied styles from global configuration.
     */
    unstyled?: boolean
}
