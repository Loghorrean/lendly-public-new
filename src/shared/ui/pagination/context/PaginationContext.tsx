"use client";

import { createContext, PropsWithChildren, useContext } from "react";

export type PaginationContextType = {
    count: number;
    totalCount: number;
    page: number;
    pageParam: string;
    perPage: number;
    perPageParam: string;
    loading: boolean;
};

const PaginationContext = createContext<PaginationContextType | null>(null);

export const usePaginationContext = (): PaginationContextType => {
    const data = useContext(PaginationContext);
    if (!data) {
        throw new Error("Cannot use `PaginationContext` outside of the `PaginationContextProvider`");
    }
    return data;
};

function PaginationContextProvider(props: PropsWithChildren<PaginationContextType>) {
    const { children, ...value } = props;
    return <PaginationContext.Provider value={value}>{children}</PaginationContext.Provider>;
}

export default PaginationContextProvider;
