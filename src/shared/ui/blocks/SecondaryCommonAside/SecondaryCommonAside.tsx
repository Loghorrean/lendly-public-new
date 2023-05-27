import CommonAside, { CommonAsideProps } from "@/src/shared/ui/blocks/CommonAside/CommonAside";
import { useSyncWithSecondaryOverlay } from "@/src/shared/ui/layout/overlay/SecondaryOverlay/useSyncWithSecondaryOverlay";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const SecondaryCommonAside = ({ ...props }: CommonAsideProps) => {
    useSyncWithSecondaryOverlay(props.active, props.onClose, props.withOverlay);
    const elRef = useRef<HTMLElement | null>(null);
    const [domReady, setDomReady] = useState(false);

    useEffect(() => {
        setDomReady(true);
        if (elRef.current === null) {
            elRef.current = document.getElementById("secondary-aside-container");
        }
    }, []);
    return (
        <>
            {domReady &&
                createPortal(<CommonAside {...props} needExpanding={false} style={{ zIndex: 80 }} />, elRef.current!)}
        </>
    );
};

export default SecondaryCommonAside;
