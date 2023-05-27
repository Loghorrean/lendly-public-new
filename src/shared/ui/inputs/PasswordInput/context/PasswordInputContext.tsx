import React, { PropsWithChildren, useContext } from "react";
import { isValueEmpty } from "@/src/shared/utils";

export type PasswordInputContextType = {
    active: boolean;
    toggle: () => void;
};

const PasswordInputContext = React.createContext<PasswordInputContextType | null>(null);

export const usePasswordInputContext = () => {
    const data = useContext(PasswordInputContext);
    if (isValueEmpty(data)) {
        throw new Error("Hook cannot be used outside 'PasswordInput' context");
    }
    return data;
};

function PasswordInputContextProvider(props: PropsWithChildren<PasswordInputContextType>) {
    const { children, ...value } = props;
    return <PasswordInputContext.Provider value={value}>{children}</PasswordInputContext.Provider>;
}

export default PasswordInputContextProvider;
