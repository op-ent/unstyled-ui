export interface RecursiveObject<T> {
    [key: string]: T | RecursiveObject<T>
}
