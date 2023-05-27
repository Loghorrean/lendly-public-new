import styles from "./ContentSeparator.module.scss";
import { FC, PropsWithChildren } from "react";

const ContentSeparator: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.content_separator}>
            <span className={styles.content_separator__text}>{children}</span>
        </div>
    );
};

export default ContentSeparator;
