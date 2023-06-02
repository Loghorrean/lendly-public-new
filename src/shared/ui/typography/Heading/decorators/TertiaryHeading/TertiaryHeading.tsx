import styles from "./TertiaryHeading.module.scss";
import { ClassInjector } from "@/src/shared/ui/injectors";
import React, { PropsWithChildren } from "react";
import { ClassNameDecorator } from "@/src/shared/ui/decorators";

const TertiaryHeading: ClassNameDecorator<PropsWithChildren> = ({ children, className }) => {
    return (
        <ClassInjector classNames={styles.tertiary_heading} oldClassName={className}>
            {children}
        </ClassInjector>
    );
};

export default TertiaryHeading;
