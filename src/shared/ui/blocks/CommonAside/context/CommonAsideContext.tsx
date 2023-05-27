import React, { PropsWithChildren, useContext } from "react";
import { isValueEmpty } from "@/src/shared/utils";

export type CommonAsideContextType = {
    active: boolean;
    onClose: () => void;
};

const CommonAsideContext = React.createContext<CommonAsideContextType | null>(null);

export const useCommonAsideContext = () => {
    const data = useContext(CommonAsideContext);
    if (isValueEmpty(data)) {
        throw new Error("Component cannot be used outside 'CommonAside' context");
    }
    return data;
};

function CommonAsideContextProvider(props: PropsWithChildren<CommonAsideContextType>) {
    const { children, ...value } = props;
    return <CommonAsideContext.Provider value={value}>{children}</CommonAsideContext.Provider>;
}

export default CommonAsideContextProvider;
