import styles from "./CommonNavigationElement.module.scss";
import { CommonText } from "@/src/shared/ui/typography";
import { COMMON_TEXT_COLOR } from "@/src/shared/ui/typography/CommonText/CommonText";
import { PropsWithChildren } from "react";

type Props = {
    active: boolean;
    onSelect: () => void;
};

const CommonNavigationElement = ({ active, onSelect, children }: PropsWithChildren<Props>) => {
    return (
        <li className={styles.common_navigation_element} aria-selected={active} role="tab" onClick={onSelect}>
            <CommonText color={active ? COMMON_TEXT_COLOR.PURPLE : COMMON_TEXT_COLOR.DARK}>{children}</CommonText>
        </li>
    );
};

export default CommonNavigationElement;
