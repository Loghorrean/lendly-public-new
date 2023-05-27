import styles from "./SecondaryHeading.module.scss";
import { ClassInjector } from "@/src/shared/ui/injectors";
import React, { PropsWithChildren } from "react";
import { ClassNameDecorator } from "@/src/shared/ui/decorators";

const SecondaryHeading: ClassNameDecorator<PropsWithChildren> = ({ children, className }) => {
    return (
        <ClassInjector classNames={styles.secondary_heading} oldClassName={className}>
            {children}
        </ClassInjector>
    );
};

export default SecondaryHeading;
