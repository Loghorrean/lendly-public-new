import styles from "./DashboardStatHeader.module.scss";
import { ReactNode } from "react";
import { Tooltip } from "@/src/shared/ui/utils";
import QuestionIcon from "@/src/shared/ui/svg/common/QuestionIcon";
import { CommonText } from "@/src/shared/ui/typography";
import { COMMON_TEXT_COLOR } from "@/src/shared/ui/typography/CommonText/CommonText";
import TooltipContent from "@/src/shared/ui/utils/Tooltip/composables/TooltipContent";
import { isNotEmpty } from "@/src/shared/utils";

type Props = {
    text: ReactNode;
    tooltipText?: ReactNode;
};

const DashboardStatHeader = ({ text, tooltipText }: Props) => {
    return (
        <header className={styles.dashboard_stat_header}>
            <CommonText color={COMMON_TEXT_COLOR.DARK}>{text}</CommonText>
            {isNotEmpty(tooltipText) && (
                <Tooltip tooltipContent={<TooltipContent>{tooltipText}</TooltipContent>}>
                    <QuestionIcon />
                </Tooltip>
            )}
        </header>
    );
};

export default DashboardStatHeader;
