import React, { ForwardedRef } from "react";
import CommonInput, { CommonInputProps } from "@/src/shared/ui/inputs/CommonInput/CommonInput";
import styles from "./SearchInput.module.scss";
import SearchIcon from "@/src/shared/ui/svg/common/SearchIcon";
import { cn } from "@/src/shared/utils";
import { CommonInputInputProps } from "@/src/shared/ui/inputs/CommonInput/composables/CommonInputInput/CommonInputInput";
import { CommonInputContainerProps } from "@/src/shared/ui/inputs/CommonInput/composables/CommonInputContainer/CommonInputContainer";

type Props = CommonInputProps & {
    containerProps?: CommonInputContainerProps;
    inputProps?: CommonInputInputProps;
};

function SearchInput(
    { value, onChange, id, error, containerProps, inputProps }: Props,
    ref: ForwardedRef<HTMLInputElement>
) {
    return (
        <CommonInput value={value} onChange={onChange} error={error} id={id}>
            <CommonInput.Container className={cn(styles.search_input, containerProps?.className)}>
                <SearchIcon />
                <CommonInput.Input ref={ref} {...inputProps} className={styles.search_input__input} />
            </CommonInput.Container>
        </CommonInput>
    );
}

export default React.forwardRef(SearchInput);
