import {ClassNameDecorator} from "@/src/shared/ui/decorators";
import {PropsWithChildren} from "react";
import {ClassInjector} from "@/src/shared/ui/injectors";
import styles from "./GreenText.module.scss";

const GreenText: ClassNameDecorator<PropsWithChildren> = ({ children, className }) => {
    return (
        <ClassInjector classNames={styles.green_text} oldClassName={className}>
            { children }
        </ClassInjector>
    );
}

export default GreenText;
