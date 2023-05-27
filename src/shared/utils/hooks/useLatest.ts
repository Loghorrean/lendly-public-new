"use client";

import { useLayoutEffect, useRef } from "react";

export function useLatest<Value>(value: Value) {
    const ref = useRef(value);

    useLayoutEffect(() => {
        ref.current = value;
    }, [value]);

    return ref;
}
