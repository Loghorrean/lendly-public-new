import styles from "./DashboardStatContent.module.scss";
import { ReactNode } from "react";
import { cn, ObjectValues } from "@/src/shared/utils";

export const DASHBOARD_STAT_CONTENT_COLOR = {
    PURPLE: "PURPLE",
    GREEN: "GREEN",
    RED: "RED",
} as const;

export type DashboardStatContentColor = ObjectValues<typeof DASHBOARD_STAT_CONTENT_COLOR>;

type Props = {
    amount: ReactNode;
    unit: ReactNode;
    color?: DashboardStatContentColor;
};

const dashboardStatContentColorMap = {
    [DASHBOARD_STAT_CONTENT_COLOR.PURPLE]: styles.dashboard_stat_content___purple,
    [DASHBOARD_STAT_CONTENT_COLOR.RED]: styles.dashboard_stat_content___red,
    [DASHBOARD_STAT_CONTENT_COLOR.GREEN]: styles.dashboard_stat_content___green,
} satisfies Record<DashboardStatContentColor, string>;

const DashboardStatContent = ({ amount, unit, color = DASHBOARD_STAT_CONTENT_COLOR.PURPLE }: Props) => {
    return (
        <div className={cn(styles.dashboard_stat_content, dashboardStatContentColorMap[color])}>
            <span className={styles.dashboard_stat_content__amount}>{amount}</span>
            <span className={styles.dashboard_stat_content__unit}>{unit}</span>
        </div>
    );
};

export default DashboardStatContent;
