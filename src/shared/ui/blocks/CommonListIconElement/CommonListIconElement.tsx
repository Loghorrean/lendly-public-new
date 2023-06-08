import {BlockProps, cn} from "@/src/shared/utils";
import {PropsWithChildren, ReactElement, ReactNode} from "react";
import styles from "./CommonListIconElement.module.scss";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";

type Props = BlockProps<HTMLLIElement> & {
    icon: ReactElement;
    heading: ReactNode;
}

const CommonListIconElement = ({ icon, heading, children, ...props }: PropsWithChildren<Props>) => {
    return (
        <li {...props} className={cn(styles.common_list_icon_element, props.className)}>
            <div className={styles.common_list_icon_element__icon}>
                { icon }
            </div>
            <Heading headingType={HEADING_TYPE.H3} className={styles.common_list_icon_element_heading}>
                { heading }
            </Heading>
            <p className={styles.common_list_icon_element_text}>
                { children }
            </p>
        </li>
    );
}

export default CommonListIconElement;
