"use client";

import { useEvent } from "@/src/shared/utils";
import { useEffect } from "react";

function useWindowEvent(type: keyof WindowEventHandlersEventMap, cb: (event: Event) => void) {
    const eventCb = useEvent(cb);

    useEffect(() => {
        window.addEventListener(type, eventCb);

        return () => window.removeEventListener(type, eventCb);
    }, [eventCb]);
}

export default useWindowEvent;
