export type Color =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'neutral'

export type DefaultProps = {
    unstyled?: boolean
}

export type ColorsMap = Record<Color, string>
