"use client";

import { useOverlay } from "@/src/shared/ui/layout/overlay/Overlay/store";
import { useEffectOnUpdate } from "@/src/shared/utils";
import { useEffect } from "react";

export const useSyncWithOverlay = (active: boolean, onClose: () => void, closesOverlay = true) => {
    const { overlayActive, setOverlayActive } = useOverlay();
    //Close component, when active overlay is clicked
    useEffectOnUpdate(() => {
        if (!overlayActive && active) {
            onClose();
        }
    }, [overlayActive]);
    useEffect(() => {
        if (closesOverlay) {
            setOverlayActive(active);
        }
    }, [active, closesOverlay]);
};
