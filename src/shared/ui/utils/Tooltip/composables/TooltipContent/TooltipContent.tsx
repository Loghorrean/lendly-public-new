"use client";

import { PropsWithChildren } from "react";
import styles from "./TooltipContent.module.scss";
import {useTooltipContext} from "@/src/shared/ui/utils/Tooltip/context/TooltipContext";

const TooltipContent = ({ children }: PropsWithChildren) => {
    const { direction } = useTooltipContext();
    return (
        <div className={styles.tooltip_content}>
            <span>{children}</span>
            {/*<svg*/}
            {/*    className={styles.tooltip_content__arrow}*/}
            {/*    width="16"*/}
            {/*    height="8"*/}
            {/*    viewBox="0 0 16 8"*/}
            {/*    fill="none"*/}
            {/*    xmlns="http://www.w3.org/2000/svg"*/}
            {/*>*/}
            {/*    <path*/}
            {/*        d="M0 0H8H16L9.41421 6.58579C8.63316 7.36684 7.36684 7.36684 6.58579 6.58579L0 0Z"*/}
            {/*        fill="#050505"*/}
            {/*        fillOpacity="0.88"*/}
            {/*    />*/}
            {/*</svg>*/}
        </div>
    );
};

export default TooltipContent;
