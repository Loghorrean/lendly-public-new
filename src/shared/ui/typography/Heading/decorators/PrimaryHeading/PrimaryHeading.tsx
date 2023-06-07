import styles from "./PrimaryHeading.module.scss";
import { ClassInjector } from "@/src/shared/ui/injectors";
import React, { PropsWithChildren } from "react";
import { ClassNameDecorator } from "@/src/shared/ui/decorators";

const PrimaryHeading: ClassNameDecorator<PropsWithChildren> = ({ children, className }) => {
    return (
        <ClassInjector classNames={styles.primary_heading} oldClassName={className}>
            {children}
        </ClassInjector>
    );
};

export default PrimaryHeading;
