import React, { createContext, PropsWithChildren, ReactNode } from "react";

export type MultiSelectContextType<T> = {
    options: Array<T>;
    selectedOptions: Array<T>;
    render: (option: T) => ReactNode;
    active: boolean;
    toggle: () => void;
};

type Props<T> = {
    props: MultiSelectContextType<T>;
};

export const MultiSelectContext = createContext<MultiSelectContextType<any>>({
    options: [],
    selectedOptions: [],
    render: () => <></>,
    active: false,
    toggle: () => {
        return null;
    },
});

function MultiSelectContextProvider<T>(props: PropsWithChildren<Props<T>>) {
    const { children, ...value } = props;
    return <MultiSelectContext.Provider value={value.props}>{children}</MultiSelectContext.Provider>;
}

export default MultiSelectContextProvider;
