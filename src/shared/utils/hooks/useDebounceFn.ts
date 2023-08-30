import debounce from "@/src/shared/utils/functions/common/debounce";
import {useCallback} from "react";

export const useDebounceFn = (fn: (...args: any) => any, timeout = 350) => {
    return useCallback(debounce(fn, timeout), [fn, timeout]);
};
