import CommonAside, { CommonAsideProps } from "@/src/shared/ui/blocks/CommonAside/CommonAside";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useSyncWithOverlay } from "@/src/shared/ui/layout/overlay/Overlay/useSyncWithOverlay";

const PrimaryCommonAside = ({ ...props }: CommonAsideProps) => {
    useSyncWithOverlay(props.active, props.onClose, props.withOverlay);
    const elRef = useRef<HTMLElement | null>(null);
    const [domReady, setDomReady] = useState(false);

    useEffect(() => {
        setDomReady(true);
        if (elRef.current === null) {
            elRef.current = document.getElementById("common-aside-container");
        }
    }, []);
    return <>{domReady && createPortal(<CommonAside {...props} />, elRef.current!)}</>;
};

export default PrimaryCommonAside;
