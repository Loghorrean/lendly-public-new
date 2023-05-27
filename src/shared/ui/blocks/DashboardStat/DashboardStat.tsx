import styles from "./DashboardStat.module.scss";
import { cn, ObjectValues } from "@/src/shared/utils";
import DashboardStatHeader from "@/src/shared/ui/blocks/DashboardStat/composables/DashboardStatHeader";
import DashboardStatContent from "@/src/shared/ui/blocks/DashboardStat/composables/DashboardStatContent";
import { PropsWithChildren } from "react";

export const DASHBOARD_STAT_COLUMNS = {
    THREE: styles.dashboard_stat___three,
    FOUR: styles.dashboard_stat___four,
} as const;

export type DashboardStatColumns = ObjectValues<typeof DASHBOARD_STAT_COLUMNS>;

type Props = {
    columns: DashboardStatColumns;
};

const DashboardStat = ({ columns, children }: PropsWithChildren<Props>) => {
    return <div className={cn(styles.dashboard_stat, columns)}>{children}</div>;
};

DashboardStat.Header = DashboardStatHeader;
DashboardStat.Content = DashboardStatContent;

export default DashboardStat;
