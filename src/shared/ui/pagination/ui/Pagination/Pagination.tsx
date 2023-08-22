"use client";

import React, { PropsWithChildren, useMemo } from "react";
import { PaginationContextType } from "../../context/PaginationContext";
import { Collection } from "@/src/shared/models/common/Collection";
import { usePagination } from "@/src/shared/ui/pagination/utils/usePagination";
import PaginationContextProvider from "../../context/PaginationContext";
import { defaultPaginationConfig, PaginationConfig } from "@/src/shared/ui/pagination/utils";
import PaginationContent from "@/src/shared/ui/pagination/ui/PaginationContent";

interface Props {
    loading: boolean;
    totalCount: number;
    config?: Partial<PaginationConfig>;
    collection?: Collection<unknown>;
}

function Pagination({ config, collection, totalCount, loading, children }: PropsWithChildren<Props>) {
    const compiledConfig = useMemo(() => {
        return { ...defaultPaginationConfig, ...config };
    }, [config]);
    const variables = usePagination({
        firstPage: compiledConfig.firstPage,
        defaultPerPage: compiledConfig.defaultPerPage,
    });

    const contextValue: PaginationContextType = {
        pageParam: compiledConfig.pageParam,
        perPageParam: compiledConfig.perPageParam,
        loading,
        totalCount,
        count: collection?.items.length || 0,
        page: variables.page,
        perPage: variables.perPage,
    };

    return <PaginationContextProvider {...contextValue}>{children}</PaginationContextProvider>;
}

Pagination.Content = PaginationContent;

export default Pagination;
