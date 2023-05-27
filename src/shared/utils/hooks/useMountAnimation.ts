"use client";

import { useEffect, useState } from "react";

export const useMountAnimation = (): boolean => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    return mounted;
};
