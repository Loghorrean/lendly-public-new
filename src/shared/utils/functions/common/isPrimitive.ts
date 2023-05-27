type Primitive = number | string | boolean | bigint | null | undefined | symbol;

export const isPrimitive = (value: unknown): value is Primitive => {
    return ["number", "string", "boolean", "bigint", "null", "undefined", "symbol"].includes(typeof value);
};
