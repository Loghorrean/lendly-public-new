import { paginationConfig } from "@/src/shared/configs";

export type PaginationConfig = {
    firstPage?: number;
    defaultPerPage?: number;
    pageParam?: string;
    perPageParam?: string;
};

export const defaultPaginationConfig: Required<PaginationConfig> = {
    firstPage: paginationConfig.defaultFirstPage,
    defaultPerPage: paginationConfig.defaultPerPage,
    pageParam: "page",
    perPageParam: "perPage",
};
