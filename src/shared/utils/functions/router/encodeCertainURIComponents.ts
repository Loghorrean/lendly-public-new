function escapeChars(uri: string, values: Array<string>): string {
    values.forEach(value => {
        uri = uri.replaceAll(value, encodeURIComponent(value));
    });
    return uri;
}

export const encodeCertainURIComponents = (uri: string, values: Array<string> | string): string => {
    if (typeof values === "string") {
        const newValues = values.split("");
        return escapeChars(uri, newValues);
    }
    return escapeChars(uri, values);
};
