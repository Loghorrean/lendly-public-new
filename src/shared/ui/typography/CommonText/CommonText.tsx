import { cn, ObjectValues, PolymorphicBlockProps, resultIf } from "@/src/shared/utils";
import styles from "./CommonText.module.scss";
import { ElementType } from "react";

export const COMMON_TEXT_COLOR = {
    DARK: styles.common_text___dark,
    GRAY: styles.common_text___gray,
    DARK_LIGHTER: styles.common_text___dark_lighter,
    PURPLE: styles.common_text___purple,
    WHITE: styles.common_text___white,
} as const;

export type CommonTextColor = ObjectValues<typeof COMMON_TEXT_COLOR>;

type Props<T extends ElementType> = PolymorphicBlockProps<T> & {
    color?: CommonTextColor;
    bold?: boolean;
};

function CommonText<T extends ElementType = "span">({
    as,
    children,
    color = COMMON_TEXT_COLOR.DARK,
    bold = false,
    ...props
}: Props<T>) {
    const Component = as ?? "span";
    return (
        <Component
            {...props}
            className={cn(styles.common_text, color, resultIf(bold, styles.common_text___bold), props.className)}
        >
            {children}
        </Component>
    );
}

export default CommonText;
