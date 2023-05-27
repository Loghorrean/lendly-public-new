export const formatLongStr = (str: string, length = 55): string => {
    if (str.length >= length) {
        return str.trim().slice(0, length) + "...";
    }
    return str;
};
