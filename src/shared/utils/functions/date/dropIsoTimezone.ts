export const dropIsoTimezone = (value: Date | string): string => {
    if (typeof value === "string" && new RegExp(/^\d{4}-\d{2}-\d{2}.*?$/).test(value)) {
        return value.slice(0, 10);
    }
    return new Date(value).toISOString().slice(0, 10);
};
