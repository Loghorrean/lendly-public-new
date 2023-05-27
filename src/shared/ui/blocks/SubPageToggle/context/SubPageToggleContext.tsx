import React, { Context, PropsWithChildren, useContext } from "react";
import { isValueEmpty } from "@/src/shared/utils";

type SubPageToggleContextType<T extends string> = {
    activePage: T;
    setActivePage: (page: T) => void;
};

//TODO: REFACTOR
let SubPageToggleContext: Context<any>;

function provideContext<T extends string>() {
    if (isValueEmpty(SubPageToggleContext)) {
        SubPageToggleContext = React.createContext<SubPageToggleContextType<T> | null>(null);
    }
    return SubPageToggleContext;
}

export function useSubPageToggleContext<T extends string>() {
    const data = useContext(provideContext<T>());
    if (isValueEmpty(data)) {
        throw new Error("Component cannot be used outside 'SubPageToggle' context");
    }
    return data;
}

function SubPageToggleContextProvider<T extends string>(props: PropsWithChildren<SubPageToggleContextType<T>>) {
    const { children, ...value } = props;
    const Context = provideContext<T>();
    return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default SubPageToggleContextProvider;
