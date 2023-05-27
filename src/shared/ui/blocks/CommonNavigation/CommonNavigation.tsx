import styles from "./CommonNavigation.module.scss";
import CommonNavigationElement from "@/src/shared/ui/blocks/CommonNavigation/composables/CommonNavigationElement";
import { PropsWithChildren, ReactNode } from "react";
import { isNotEmpty } from "@/src/shared/utils";
import CommonNavigationRight from "@/src/shared/ui/blocks/CommonNavigation/composables/CommonNavigationRight";

type Props = {
    right?: ReactNode;
};

const CommonNavigation = ({ right, children }: PropsWithChildren<Props>) => {
    return (
        <nav className={styles.common_navigation}>
            <ul className={styles.common_navigation__elements}>{children}</ul>
            {isNotEmpty(right) && <CommonNavigationRight>{right}</CommonNavigationRight>}
        </nav>
    );
};

CommonNavigation.Element = CommonNavigationElement;

export default CommonNavigation;
