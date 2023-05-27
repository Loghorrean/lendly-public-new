import { ClassNameDecorator } from "@/src/shared/ui/decorators";
import React, { PropsWithChildren } from "react";
import { ClassInjector } from "@/src/shared/ui/injectors";
import styles from "./PrimaryButton.module.scss";
import { cn, ObjectValues, resultIf } from "@/src/shared/utils";

export const PRIMARY_BUTTON_COLOR = {
    PURPLE: styles.primary_button___purple,
    WHITE: styles.primary_button___white,
} as const;

export type PrimaryButtonColor = ObjectValues<typeof PRIMARY_BUTTON_COLOR>;

interface Props {
    color?: PrimaryButtonColor;
    wide?: boolean;
}

const PrimaryButton: ClassNameDecorator<PropsWithChildren<Props>> = ({ color, wide, children, className }) => {
    return (
        <ClassInjector
            classNames={cn(styles.primary_button, color, resultIf(wide, styles.primary_button___wide))}
            oldClassName={className}
        >
            {children}
        </ClassInjector>
    );
};

export default PrimaryButton;
