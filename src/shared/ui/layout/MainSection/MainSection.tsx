import styles from "./MainSection.module.scss";
import React, {ForwardedRef, PropsWithChildren} from "react";
import {BlockProps, cn} from "@/src/shared/utils";

const MainSection = ({ children, className, ...props }: PropsWithChildren<BlockProps>, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <section {...props} className={cn(styles.main_section, className)} ref={ref}>
            { children }
        </section>
    );
}

export default React.forwardRef(MainSection);
