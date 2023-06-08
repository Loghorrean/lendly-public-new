import {AllHTMLAttributes} from "react";
import styles from "./CommonLabel.module.scss";
import {cn} from "@/src/shared/utils";

type Props = AllHTMLAttributes<HTMLLabelElement>;

const CommonLabel = ({ ...props }: Props) => {
    return (
        <label {...props} htmlFor={props.htmlFor} className={cn(styles.common_label, props.className)}>
            { props.children }
        </label>
    );
}

export default CommonLabel;
