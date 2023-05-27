import CommonInput from "@/src/shared/ui/inputs/CommonInput";
import { CommonInputInputProps } from "@/src/shared/ui/inputs/CommonInput/composables/CommonInputInput/CommonInputInput";
import React, { ForwardedRef } from "react";
import { usePasswordInputContext } from "@/src/shared/ui/inputs/PasswordInput/context/PasswordInputContext";

type Props = Omit<CommonInputInputProps, "aria-required" | "type">;

function PasswordInputInput({ ...props }: Props, ref: ForwardedRef<HTMLInputElement>) {
    const { active } = usePasswordInputContext();
    return <CommonInput.Input {...props} ref={ref} type={active ? "text" : "password"} aria-required />;
}

export default React.forwardRef(PasswordInputInput);
