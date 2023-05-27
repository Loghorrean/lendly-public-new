"use client";

import { usePathname } from "next/navigation";
import React, { useCallback, useEffect } from "react";
import { useSecondaryOverlay } from "@/src/shared/ui/layout/overlay/SecondaryOverlay/store";
import { cn, resultIf } from "@/src/shared/utils";
import styles from "./SecondaryOverlay.module.scss";

const SecondaryOverlay = () => {
    const { secondaryOverlayActive, setSecondaryOverlayActive } = useSecondaryOverlay();
    const pathName = usePathname();

    const closeOverlay = useCallback(() => {
        setSecondaryOverlayActive(false);
    }, []);

    useEffect(() => {
        closeOverlay();
    }, [pathName]);

    return (
        <div
            className={cn(styles.secondary_overlay, resultIf(secondaryOverlayActive, styles.active))}
            onClick={closeOverlay}
        />
    );
};

export default SecondaryOverlay;
