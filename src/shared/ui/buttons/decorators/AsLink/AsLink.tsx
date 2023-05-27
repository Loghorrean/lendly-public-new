import React, { PropsWithChildren } from "react";
import styles from "./AsLink.module.scss";
import { ClassNameDecorator } from "@/src/shared/ui/decorators";
import { ClassInjector } from "@/src/shared/ui/injectors";

const AsLink: ClassNameDecorator<PropsWithChildren> = ({ children, className }) => {
    return (
        <ClassInjector classNames={styles.link_button} oldClassName={className}>
            {children}
        </ClassInjector>
    );
};

export default AsLink;
