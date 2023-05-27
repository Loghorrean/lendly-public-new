import React, { Context, Dispatch, PropsWithChildren, ReactNode, SetStateAction, useContext } from "react";
import { isValueEmpty, Nullable } from "@/src/shared/utils";

export type OptionBoxContextType<T> = {
    options: Array<T>;
    selectedOption: Nullable<T>;
    render: (option: T) => ReactNode;
    renderHead: (option: T) => ReactNode;
    active: boolean;
    toggle: () => void;
    setActive: Dispatch<SetStateAction<boolean>>;
    id: string;
};

type Props<T> = {
    props: OptionBoxContextType<T>;
};

//TODO: REFACTOR
let OptionBoxContext: Context<any>;

function provideContext<T>() {
    if (isValueEmpty(OptionBoxContext)) {
        OptionBoxContext = React.createContext<OptionBoxContextType<T> | null>(null);
    }
    return OptionBoxContext;
}

export function useOptionBoxContext<T>() {
    const data = useContext(provideContext<T>());
    if (isValueEmpty(data)) {
        throw new Error("Component cannot be used outside 'OptionBox' context");
    }
    return data;
}

function OptionBoxContextProvider<T>(props: PropsWithChildren<Props<T>>) {
    const { children, ...value } = props;
    const Context = provideContext<T>();
    return <Context.Provider value={value.props}>{children}</Context.Provider>;
}

export default OptionBoxContextProvider;
