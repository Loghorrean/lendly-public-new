"use client";

import { paginationConfig } from "@/src/shared/configs";
import { useSearchParams } from "next/navigation";
import { isNotEmpty } from "@/src/shared/utils";
import { defaultPaginationConfig, PaginationConfig } from "@/src/shared/ui/pagination/utils/PaginationConfig";
import { useMemo } from "react";

export const usePagination = (props?: PaginationConfig): { page: number; perPage: number } => {
    const compiledConfig = useMemo(() => {
        return { ...defaultPaginationConfig, ...props };
    }, [props]);

    const params = useSearchParams();
    const queryPage = params.get(compiledConfig.pageParam);
    const queryPerPage = params.get(compiledConfig.perPageParam);

    const validatedPage = isNotEmpty(queryPage)
        ? parseInt(queryPage)
        : props?.firstPage ?? paginationConfig.defaultFirstPage;
    const validatedPerPage = isNotEmpty(queryPerPage)
        ? parseInt(queryPerPage)
        : props?.defaultPerPage ?? paginationConfig.defaultPerPage;

    return {
        page: validatedPage,
        perPage: validatedPerPage,
    };
};
