export const hexIdToDec = (id: string): string => {
    return parseInt(id.slice(0, 8), 16).toString();
};
