import {MutableRefObject, useEffect, useRef} from "react";

export function useParallax(heroRef: MutableRefObject<HTMLDivElement | null>, parallaxRef: MutableRefObject<HTMLDivElement | null>) {
    const fixed = useRef(false);
    useEffect(() => {
        const callback = () => {
            const topDiff = parallaxRef.current!.getBoundingClientRect().top;
            if (topDiff <= 0 && fixed.current) {
                heroRef.current!.style.position = "initial";
                parallaxRef.current!.style.marginTop = "initial";
                fixed.current = false;
                return;
            }
            if (topDiff > 0 && !fixed.current) {
                heroRef.current!.attributes.removeNamedItem("style");
                parallaxRef.current!.attributes.removeNamedItem("style");
                fixed.current = true;
            }
        }
        callback();
        window.addEventListener("scroll", callback);
        return () => {
            window.removeEventListener("scroll", callback);
        }
    }, []);
}