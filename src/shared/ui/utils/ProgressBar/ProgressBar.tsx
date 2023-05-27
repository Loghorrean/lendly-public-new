"use client";

import styles from "./ProgressBar.module.scss";
import { BlockProps, cn, resultIf } from "@/src/shared/utils";
import { useRef } from "react";

type Props = BlockProps & {
    amount: number;
};

const ProgressBar = ({ amount, ...props }: Props) => {
    const ref = useRef<HTMLDivElement | null>(null);
    return (
        <div
            {...props}
            className={cn(styles.progress_bar, props.className)}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={amount}
        >
            <div
                ref={ref}
                style={{ width: `${amount}%` }}
                className={cn(
                    styles.progress_bar__filled,
                    resultIf(amount === 100, styles.progress_bar__filled___finished)
                )}
            ></div>
        </div>
    );
};

export default ProgressBar;
