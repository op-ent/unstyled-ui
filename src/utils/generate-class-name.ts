import clsx, { ClassValue } from 'clsx'

/**
 * Generate a class name from a list of class names, the default className prop
 * and the unstyled condition.
 * @param className The default className prop.
 * @param classes The list of class names.
 *
 * @returns A function that takes the `unstyled` parameter. If `unstyled` is true,
 * only `className` is applied. Otherwise, the class names are merged with the
 * default className prop.
 */
export function generateClassName(className: string, ...rest: ClassValue[]) {
    return function (unstyled: boolean) {
        return clsx(unstyled ? className : [className, rest])
    }
}
