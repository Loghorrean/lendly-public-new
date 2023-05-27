"use client";

import { EffectCallback, useEffect, useRef } from "react";

export const useEffectOnUpdate = (effect: EffectCallback, dependencies: any[] = []) => {
    const mounted = useRef(true);
    useEffect(() => {
        if (mounted.current) {
            mounted.current = false;
            return;
        }
        return effect();
    }, dependencies);
};
