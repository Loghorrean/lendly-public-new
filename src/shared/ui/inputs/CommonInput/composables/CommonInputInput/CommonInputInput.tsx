import { cn, resultIf } from "@/src/shared/utils";
import styles from "./CommonInputInput.module.scss";
import React, { ForwardedRef, InputHTMLAttributes, SyntheticEvent, useCallback } from "react";
import { useCommonInputContext } from "@/src/shared/ui/inputs/CommonInput/context/CommonInputContext";

export type CommonInputInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> & {
    asTextarea?: boolean;
};

const CommonInputInput = ({ asTextarea = false, ...props }: CommonInputInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { value, onChange, id } = useCommonInputContext();
    const inputMode = () => {
        if (props.inputMode) {
            return props.inputMode;
        }
        return props.type === "number" ? "numeric" : undefined;
    };
    const handleChange = useCallback(
        (event: SyntheticEvent) => {
            onChange && onChange((event.target as HTMLInputElement).value);
        },
        [onChange]
    );
    if (asTextarea) {
        return <textarea
            placeholder={props.placeholder}
            id={props.id}
            value={value}
            onChange={handleChange}
            className={cn(styles.common_input_input, props.className)}
            rows={5}
            style={{resize: "none"}}
        ></textarea>
    }
    return (
        <input
            id={id}
            ref={ref}
            {...props}
            value={value}
            onChange={handleChange}
            className={cn(
                styles.common_input_input,
                resultIf(props.type === "number", styles.common_input_input___numeric),
                props.className
            )}
            type={props.type ?? "text"}
            inputMode={inputMode()}
        />
    );
};

export default React.forwardRef(CommonInputInput);
