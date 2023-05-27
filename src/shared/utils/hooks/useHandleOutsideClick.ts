import { MutableRefObject, useCallback } from "react";
import { Nullable } from "../types";

export const useHandleOutsideClick = (
    callback: (...values: any) => any,
    elem: MutableRefObject<HTMLElement | null>
): ((e: MouseEvent) => void) => {
    return useCallback((e: MouseEvent): void => {
        if (e.target instanceof HTMLElement) {
            let element: Nullable<HTMLElement> = e.target;
            while (element && element !== elem.current) {
                element = element.parentElement;
            }
            if (element === null) {
                callback();
            }
        }
    }, []);
};
