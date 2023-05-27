import styles from "./Container.module.scss";
import { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};

export default Container;
