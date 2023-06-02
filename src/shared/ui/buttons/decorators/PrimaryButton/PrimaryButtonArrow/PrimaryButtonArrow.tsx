import styles from "./PrimaryButtonArrow.module.scss";
import {cn, ObjectValues} from "@/src/shared/utils";
import ArrowRight from "@/src/shared/ui/svg/arrows/ArrowRight";

export const PRIMARY_BUTTON_ARROW_COLOR = {
    WHITE: styles.primary_button_arrow___white,
    BLACK: styles.primary_button_arrow___black,
} as const;

export type PrimaryButtonArrowColor = ObjectValues<typeof PRIMARY_BUTTON_ARROW_COLOR>;

type Props = {
    color: PrimaryButtonArrowColor;
}

const PrimaryButtonArrow = ({ color }: Props) => {
    return (
        <div className={cn(styles.primary_button_arrow, color)}>
            <ArrowRight />
        </div>
    );
}

export default PrimaryButtonArrow;
