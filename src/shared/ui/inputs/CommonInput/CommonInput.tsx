import React, { PropsWithChildren } from "react";
import CommonInputContextProvider, {
    CommonInputContextType,
} from "@/src/shared/ui/inputs/CommonInput/context/CommonInputContext";
import CommonInputInput from "@/src/shared/ui/inputs/CommonInput/composables/CommonInputInput";
import CommonInputContainer from "@/src/shared/ui/inputs/CommonInput/composables/CommonInputContainer";

export type CommonInputProps = {
    value?: string;
    onChange?: (value: string) => void;
    error?: boolean;
    id: string;
};

const CommonInput = ({ value, onChange, error, id, children }: PropsWithChildren<CommonInputProps>) => {
    const contextValue: CommonInputContextType = {
        value,
        onChange,
        error,
        id,
    };
    return <CommonInputContextProvider {...contextValue}>{children}</CommonInputContextProvider>;
};

CommonInput.Input = CommonInputInput;
CommonInput.Container = CommonInputContainer;

export default CommonInput;
