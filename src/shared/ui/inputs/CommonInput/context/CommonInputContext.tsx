import React, { PropsWithChildren, useContext } from "react";
import { isValueEmpty } from "@/src/shared/utils";

export type CommonInputContextType = {
    id: string;
    value?: string;
    onChange?: (value: string) => void;
    error?: boolean;
};

const CommonInputContext = React.createContext<CommonInputContextType | null>(null);

export const useCommonInputContext = () => {
    const data = useContext(CommonInputContext);
    if (isValueEmpty(data)) {
        throw new Error("Component cannot be used outside 'CommonInput' context");
    }
    return data;
};

function CommonInputContextProvider(props: PropsWithChildren<CommonInputContextType>) {
    const { children, ...value } = props;
    return <CommonInputContext.Provider value={value}>{children}</CommonInputContext.Provider>;
}

export default CommonInputContextProvider;
