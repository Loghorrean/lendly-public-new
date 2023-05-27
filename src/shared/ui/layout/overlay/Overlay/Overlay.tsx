"use client";

import React, { useCallback, useEffect } from "react";
import styles from "./Overlay.module.scss";
import { usePathname } from "next/navigation";
import { useOverlay } from "@/src/shared/ui/layout/overlay/Overlay/store";
import { cn, resultIf } from "@/src/shared/utils";

const Overlay = () => {
    const { overlayActive, setOverlayActive } = useOverlay();
    const pathName = usePathname();

    const closeOverlay = useCallback(() => {
        setOverlayActive(false);
    }, []);

    useEffect(() => {
        closeOverlay();
    }, [pathName]);

    return <div className={cn(styles.overlay, resultIf(overlayActive, styles.active))} onClick={closeOverlay} />;
};

export default Overlay;
