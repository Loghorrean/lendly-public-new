import React, { FC, InputHTMLAttributes } from "react";
import styles from "./InputNumber.module.scss";
import { cn, resultIf } from "@/src/shared/utils";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    hideArrows?: boolean;
}

const InputNumber: FC<Props> = ({ hideArrows = true, ...props }) => {
    return (
        <input
            {...props}
            type="number"
            inputMode="numeric"
            className={cn(resultIf(hideArrows, styles.hide_arrows), props.className)}
        />
    );
};

export default InputNumber;
