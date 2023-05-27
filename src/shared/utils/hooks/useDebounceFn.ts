import debounce from "@/src/shared/utils/functions/common/debounce";

export const useDebounceFn = (fn: (...args: any) => any, timeout = 350) => {
    return debounce(fn, timeout);
};
