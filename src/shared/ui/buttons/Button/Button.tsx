import React, { ForwardedRef } from "react";
import styles from "./Button.module.scss";
import { ButtonProps, cn } from "@/src/shared/utils";

function Button({ children, ...props }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) {
    return (
        <button {...props} ref={ref} className={cn(styles.button, props.className)} disabled={props.disabled}>
            {children}
        </button>
    );
}

export default React.forwardRef(Button);
