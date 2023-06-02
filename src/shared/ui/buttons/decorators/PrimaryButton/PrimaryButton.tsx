import { ClassNameDecorator } from "@/src/shared/ui/decorators";
import React, { PropsWithChildren } from "react";
import { ClassInjector } from "@/src/shared/ui/injectors";
import styles from "./PrimaryButton.module.scss";
import { cn, ObjectValues, resultIf } from "@/src/shared/utils";

export const PRIMARY_BUTTON_COLOR = {
    BLACK: styles.primary_button___black,
    WHITE: styles.primary_button___white,
    GREEN: styles.primary_button___green,
} as const;

export type PrimaryButtonColor = ObjectValues<typeof PRIMARY_BUTTON_COLOR>;

interface Props {
    color?: PrimaryButtonColor;
    wide?: boolean;
    arrow?: boolean;
}

const PrimaryButton: ClassNameDecorator<PropsWithChildren<Props>> = ({ color = PRIMARY_BUTTON_COLOR.BLACK, wide, arrow = false, children, className }) => {
    return (
        <ClassInjector
            classNames={cn(styles.primary_button, color, resultIf(arrow, styles.primary_button___arrow), resultIf(wide, styles.primary_button___wide))}
            oldClassName={className}
        >
            {children}
        </ClassInjector>
    );
};

export default PrimaryButton;
