"use client";

import { Dispatch, SetStateAction, useCallback, useState } from "react";

export const useToggle = (initial = false): [boolean, () => void, Dispatch<SetStateAction<boolean>>] => {
    const [state, setState] = useState(initial);
    const toggle = useCallback((): void => {
        setState((state: boolean) => !state);
    }, []);
    return [state, toggle, setState];
};
