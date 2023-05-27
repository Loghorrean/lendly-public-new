"use client";

import { useRef } from "react";

export const useOneTimeAction = (callback: (...args: any) => unknown) => {
    const isDone = useRef(false);
    return () => {
        if (!isDone.current) {
            callback();
        }
        isDone.current = true;
    };
};
