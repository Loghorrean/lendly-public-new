"use client";

import React, { PropsWithChildren, useMemo } from "react";
import { PaginationContextType } from "../../context/PaginationContext";
import { Collection } from "@/src/shared/models/common/Collection";
import { usePagination } from "@/src/shared/ui/pagination/utils/usePagination";
import PaginationContextProvider from "../../context/PaginationContext";

export type PaginationConfig = {
    firstPage: number;
    defaultPerPage: number;
    pageParam: string;
    perPageParam: string;
    filterParam: string;
};

const defaultConfig: PaginationConfig = {
    firstPage: 1,
    defaultPerPage: 10,
    pageParam: "page",
    perPageParam: "perPage",
    filterParam: "filter",
};

interface Props {
    loading: boolean;
    totalCount: number;
    config?: PaginationConfig;
    collection?: Collection<unknown>;
}

function Pagination({ config, collection, totalCount, loading, children }: PropsWithChildren<Props>) {
    const compiledConfig = useMemo(() => {
        return { ...defaultConfig, ...config };
    }, [config]);

    const variables = usePagination();

    const contextValue: PaginationContextType = {
        pageParam: compiledConfig.pageParam,
        perPageParam: compiledConfig.perPageParam,
        loading,
        totalCount,
        count: collection?.items.length || 0,
        page: variables.page / variables.perPage + 1,
        perPage: variables.perPage,
    };

    return <PaginationContextProvider {...contextValue}>{children}</PaginationContextProvider>;
}

export default Pagination;
