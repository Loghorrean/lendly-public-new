import React, { FC, InputHTMLAttributes, PropsWithChildren, useId } from "react";
import styles from "./RadioButton.module.scss";
import { cn, resultIf } from "@/src/shared/utils";

const RadioButton: FC<PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>> = ({ children, ...props }) => {
    const id = useId();
    return (
        <div className={styles.radio_button}>
            <input {...props} id={id} type="radio" className={styles.radio_button__input} />
            <label
                htmlFor={id}
                className={cn(
                    styles.radio_button__label,
                    resultIf(props.disabled === true, styles.radio_button__label___disabled)
                )}
            >
                {children}
            </label>
        </div>
    );
};

export default RadioButton;
