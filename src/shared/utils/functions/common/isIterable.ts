export const isIterable = (obj: any): boolean => {
    if (obj === null) {
        return false;
    }
    return typeof obj[Symbol.iterator] === "function";
};
