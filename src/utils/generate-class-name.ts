import clsx, { ClassValue } from 'clsx'

export const generateClassName =
    (className: string, ...rest: ClassValue[]) =>
    (unstyled: boolean) =>
        clsx(unstyled && rest, className)
