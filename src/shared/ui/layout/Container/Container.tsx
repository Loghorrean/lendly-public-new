import styles from "./Container.module.scss";
import {FC, PropsWithChildren, useEffect, useRef} from "react";

type Props = {
    needsDisabling?: boolean;
}

const Container: FC<PropsWithChildren<Props>> = ({ children, needsDisabling }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const isDisabled = useRef(false);
    useEffect(() => {
        const callback = () => {
            if (needsDisabling) {
                const requiredWidth = 90 * 16;
                if (window.innerWidth >= requiredWidth && isDisabled.current) {
                    containerRef.current!.attributes.removeNamedItem("style");
                    isDisabled.current = false;
                    return;
                }
                if (window.innerWidth < requiredWidth && !isDisabled.current) {
                    containerRef.current!.style.paddingInline = "0";
                }
            }
        }
        callback();
        window.addEventListener("resize", callback);
        return () => {
            window.removeEventListener("resize", callback);
        }
    }, [needsDisabling]);
    return <div ref={containerRef} className={styles.container}>{children}</div>;
};

export default Container;
