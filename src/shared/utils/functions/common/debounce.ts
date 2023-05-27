const debounce = (fn: (...args: any) => any, timeout = 350) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, timeout);
    };
};

export default debounce;
