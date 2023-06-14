import {MutableRefObject, useEffect, useRef, useState} from "react";
import {isNotEmpty} from "@/src/shared/utils";

export function useParallax(heroRef: MutableRefObject<HTMLDivElement | null>, parallaxRef: MutableRefObject<HTMLDivElement | null>) {
    const [isFixed, setIsFixed] = useState(false);
    const fixedRef = useRef(false);
    useEffect(() => {
        const callback = () => {
            const topDiff = parallaxRef.current?.getBoundingClientRect().top;
            if (isNotEmpty(topDiff)) {
                if (topDiff <= 0 && fixedRef.current) {
                    heroRef.current!.style.position = "initial";
                    heroRef.current!.style.width = "calc(100% - 1rem)"
                    parallaxRef.current!.style.marginTop = "initial";
                    setIsFixed(false);
                    fixedRef.current = false;
                    return;
                }
                if (topDiff > 0 && !fixedRef.current) {
                    heroRef.current!.attributes.removeNamedItem("style");
                    parallaxRef.current!.attributes.removeNamedItem("style");
                    setIsFixed(true);
                    fixedRef.current = true;
                }
            }
        }
        callback();
        window.addEventListener("scroll", callback);
        return () => {
            window.removeEventListener("scroll", callback);
        }
    }, [parallaxRef, heroRef]);
    return isFixed;
}