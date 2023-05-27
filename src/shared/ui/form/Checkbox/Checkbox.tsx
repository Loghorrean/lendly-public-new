import React, { InputHTMLAttributes, ReactNode, useId } from "react";
import styles from "./Checkbox.module.scss";
import { cn, resultIf } from "@/src/shared/utils";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    children: ReactNode;
    checked: boolean;
    onChange: () => void;
    error?: boolean;
}

const Checkbox = ({ children, error = false, ...props }: Props) => {
    const id = useId();
    return (
        <div className={cn(styles.custom_checkbox, props.className)}>
            <input
                {...props}
                type="checkbox"
                checked={props.checked}
                onChange={props.onChange}
                className={cn(styles.custom_checkbox__input, props.className)}
                id={id}
            />
            <label
                htmlFor={id}
                className={cn(styles.custom_checkbox__label, resultIf(error, styles.custom_checkbox__label___error))}
            >
                {children}
            </label>
        </div>
    );
};

export default Checkbox;
