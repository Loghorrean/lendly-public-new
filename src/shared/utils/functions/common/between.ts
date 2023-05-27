export const between = (num: number, left: number, right: number, inclusive = false): boolean => {
    if (left >= right) {
        throw new Error("Left boundary is more or equal than right");
    }
    return (inclusive ? num >= left : num > left) && (inclusive ? num <= right : num < right);
};
