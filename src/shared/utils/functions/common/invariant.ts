export function invariant(condition: boolean, errorText: string) {
    if (!condition) {
        throw new Error(errorText);
    }
}
