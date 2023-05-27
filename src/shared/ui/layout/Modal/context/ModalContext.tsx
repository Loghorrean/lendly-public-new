import React, { createContext, PropsWithChildren, useContext } from "react";
import { isValueEmpty } from "@/src/shared/utils";

export type ModalContextType = {
    onClose: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export const useModalContext = () => {
    const data = useContext(ModalContext);
    if (isValueEmpty(data)) {
        throw new Error("Component cannot be used outside 'Modal' context");
    }
    return data;
};

function ModalContextProvider({ children, ...value }: PropsWithChildren<ModalContextType>) {
    return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export default ModalContextProvider;
