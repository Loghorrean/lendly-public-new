"use client";

import { paginationConfig } from "@/src/shared/configs";
import { useSearchParams } from "next/navigation";
import { isNotEmpty } from "@/src/shared/utils";

export const usePagination = () => {
    const params = useSearchParams();
    const perPage = isNotEmpty(params.get("perPage"))
        ? parseInt(params.get("perPage")!)
        : paginationConfig.defaultPerPage;
    const page = isNotEmpty(params.get("page")) ? parseInt(params.get("page")!) : paginationConfig.defaultFirstPage;
    return {
        page: (page - 1) * perPage,
        perPage,
    };
};
