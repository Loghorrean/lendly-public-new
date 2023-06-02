import styles from "./MainSection.module.scss";
import {PropsWithChildren} from "react";
import {BlockProps, cn} from "@/src/shared/utils";

const MainSection = ({ children, className, ...props }: PropsWithChildren<BlockProps>) => {
    return (
        <section {...props} className={cn(styles.main_section, className)}>
            { children }
        </section>
    );
}

export default MainSection;
