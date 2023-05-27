export const numbersOnly = (str: string): boolean => {
    return !isNaN(Number(str));
};

export const isEmail = (str: string): boolean => {
    return new RegExp(/^.*?@.*?\..*?$/).test(str);
};

export const lengthBetween = (str: string, lowerBound: number, upperBound: number): boolean => {
    const len = str.length;
    return len >= lowerBound && len <= upperBound;
};
