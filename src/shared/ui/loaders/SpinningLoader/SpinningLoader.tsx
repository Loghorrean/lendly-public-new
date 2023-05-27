import { cn, ObjectValues } from "@/src/shared/utils";
import { FC } from "react";
import styles from "./SpinningLoader.module.scss";

export const SPINNING_LOADER_SIZE = {
    SMALL: "SMALL",
    MEDIUM: "MEDIUM",
    HIGH: "HIGH",
} as const;

export type SpinningLoaderSize = ObjectValues<typeof SPINNING_LOADER_SIZE>;

const loaderSizeClasses: Record<SpinningLoaderSize, string> = {
    [SPINNING_LOADER_SIZE.SMALL]: styles.spinning_loader___small,
    [SPINNING_LOADER_SIZE.MEDIUM]: styles.spinning_loader___medium,
    [SPINNING_LOADER_SIZE.HIGH]: styles.spinning_loader___high,
};

type Props = {
    size?: SpinningLoaderSize;
};

const SpinningLoader: FC<Props> = ({ size = SPINNING_LOADER_SIZE.HIGH }) => {
    return (
        <div className={cn(styles.spinning_loader, loaderSizeClasses[size])}>
            <span className={styles.spinning_loader__dot}>
                <i className={styles.spinning_loader__dot_item}></i>
                <i className={styles.spinning_loader__dot_item}></i>
                <i className={styles.spinning_loader__dot_item}></i>
                <i className={styles.spinning_loader__dot_item}></i>
            </span>
        </div>
    );
};

export default SpinningLoader;
