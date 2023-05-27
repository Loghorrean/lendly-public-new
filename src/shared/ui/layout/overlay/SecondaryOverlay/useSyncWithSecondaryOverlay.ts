"use client";

import { useEffectOnUpdate } from "@/src/shared/utils";
import { useEffect } from "react";
import { useSecondaryOverlay } from "@/src/shared/ui/layout/overlay/SecondaryOverlay/store";

export const useSyncWithSecondaryOverlay = (active: boolean, onClose: () => void, closesOverlay = true) => {
    const { secondaryOverlayActive, setSecondaryOverlayActive } = useSecondaryOverlay();
    //Close component, when active overlay is clicked
    useEffectOnUpdate(() => {
        if (!secondaryOverlayActive && active) {
            onClose();
        }
    }, [secondaryOverlayActive]);
    useEffect(() => {
        if (closesOverlay) {
            setSecondaryOverlayActive(active);
        }
    }, [active, closesOverlay]);
};
