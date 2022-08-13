/* Global color */

/**
 * Default global color.
 */
export type DefaultUnstyledUiGlobalColor = string
/**
 * Override this type to change the global color.
 *
 * @example
 * ```ts
 * declare module '@op-ent/unstyled-ui' {
 *      export interface UnstyledUiGlobalColorOverride {
 *          color: "primary" | "secondary"
 *      }
 * }
 * ```
 */
export type UnstyledUiGlobalColorOverride = Record<string, never>
/**
 * Global color that can be overridden using the `UnstyledUiGlobalColorOverride` type.
 */
export type UnstyledUiGlobalColor = UnstyledUiGlobalColorOverride extends {
    color: infer CustomColor
}
    ? CustomColor
    : DefaultUnstyledUiGlobalColor

/* Internal */

export type DefaultProps = {
    unstyled?: boolean
}
