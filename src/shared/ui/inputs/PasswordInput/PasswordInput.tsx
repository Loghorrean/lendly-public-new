import React, { PropsWithChildren } from "react";
import { useToggle } from "@/src/shared/utils";
import PasswordInputContextProvider, {
    PasswordInputContextType,
} from "@/src/shared/ui/inputs/PasswordInput/context/PasswordInputContext";
import { CommonInputProps } from "@/src/shared/ui/inputs/CommonInput/CommonInput";
import PasswordInputContainer from "@/src/shared/ui/inputs/PasswordInput/composables/PasswordInputContainer";
import PasswordInputInput from "@/src/shared/ui/inputs/PasswordInput/composables/PasswordInputInput";
import CommonInputContextProvider, {
    CommonInputContextType,
} from "@/src/shared/ui/inputs/CommonInput/context/CommonInputContext";

function PasswordInput({ value, onChange, error, id, children }: PropsWithChildren<CommonInputProps>) {
    const [active, toggle] = useToggle();
    const passwordContextValue: PasswordInputContextType = {
        active,
        toggle,
    };
    const contextValue: CommonInputContextType = {
        value,
        onChange,
        error,
        id,
    };
    return (
        <PasswordInputContextProvider {...passwordContextValue}>
            <CommonInputContextProvider {...contextValue}>{children}</CommonInputContextProvider>
        </PasswordInputContextProvider>
    );
}

PasswordInput.Container = PasswordInputContainer;
PasswordInput.Input = PasswordInputInput;

export default PasswordInput;
