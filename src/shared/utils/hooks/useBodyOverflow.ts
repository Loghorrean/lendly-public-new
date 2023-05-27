"use client";

import { useEffect } from "react";

const useBodyOverflow = (active = true) => {
    useEffect(() => {
        if (active) {
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = "";
            };
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [active]);
};

export default useBodyOverflow;
