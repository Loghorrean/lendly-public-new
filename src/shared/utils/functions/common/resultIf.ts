export function resultIf<T = string>(condition: boolean | undefined, result: T) {
    if (condition) {
        return result;
    }
}
