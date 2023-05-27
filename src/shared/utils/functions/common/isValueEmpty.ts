type Empty = null | undefined;

export const isValueEmpty = (value: unknown): value is Empty => {
    return typeof value === "undefined" || value === null;
};
