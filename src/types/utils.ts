export interface RecursiveObject<T> {
    [key: string]: T | RecursiveObject<T>
}

export type DeepOverride<T1, T2> = {
    [P in keyof T1]: P extends keyof T2
        ? T2[P] extends object
            ? DeepOverride<T1[P], T2[P]>
            : T2[P]
        : T1[P]
}

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
    U[keyof U]

export type ExcludeEmpty<T> = T extends AtLeastOne<T> ? T : never
