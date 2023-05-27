type Options = {
    decimal?: boolean;
    thousands?: boolean;
    decimalDelimiter?: string;
    thousandsDelimiter?: string;
};

const defaultOptions: Options = {
    decimal: true,
    thousands: true,
    decimalDelimiter: ".",
    thousandsDelimiter: " ",
};

export function formatAmount(amount: number, options?: Options): string {
    const { decimal, thousands, decimalDelimiter, thousandsDelimiter } = {
        ...defaultOptions,
        ...options,
    };
    const stringAmount = Math.floor(amount).toString();
    let i = stringAmount.length % 3;
    const results = [];

    if (thousands) {
        if (i > 0) {
            results.push(stringAmount.substr(0, i));
        }

        for (i; i < stringAmount.length; i += 3) {
            results.push(stringAmount.substr(i, 3));
        }
    } else {
        results.push(stringAmount);
    }

    const parts = [];
    parts.push(results.join(thousandsDelimiter));
    if (decimal) {
        parts.push((amount - Math.floor(amount)).toFixed(2).substr(-2));
    }

    return parts.join(decimalDelimiter);
}
