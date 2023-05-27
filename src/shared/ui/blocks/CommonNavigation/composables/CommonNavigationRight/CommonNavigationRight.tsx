import styles from "./CommonNavigationRight.module.scss";
import { PropsWithChildren } from "react";

const CommonNavigationRight = ({ children }: PropsWithChildren) => {
    return <div className={styles.common_navigation_right}>{children}</div>;
};

export default CommonNavigationRight;
