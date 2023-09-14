"use client";

import {Dispatch, SetStateAction, useEffect, useState} from "react";
import buildQuery from "@/src/shared/utils/functions/router/buildQuery";
import {getQueryObject, isValueEmpty} from "@/src/shared/utils";
import {useSearchParams} from "next/navigation";

type Props<T extends Record<string, any>> = {
    initial?: T;
    defaultState?: T;
}

export function usePaginationFilter<T extends Record<string, any>>({ initial, defaultState }: Props<T> = {}): [T, Dispatch<SetStateAction<T>>] {
    const params = useSearchParams();
    const [filter, setFilter] = useState<T>(
        initial ??
        (() => {
            const query = params.toString();
            if (query === "") {
                return defaultState ?? {} as T;
            }
            const queryObj = getQueryObject<{ filter: T }>(`?${query}`);
            const filter = queryObj.filter;
            if (isValueEmpty(filter)) {
                return defaultState ?? {} as T;
            }
            if (Object.keys(filter).length === 0) {
                return defaultState ?? {} as T;
            }
            return { ...defaultState, ...queryObj.filter };
        })
    );
    useEffect(() => {

    }, []);
    const handleFilter = (newFilter: T | ((prev: T) => T)) => {
        const queryFilter: T = typeof newFilter === "function" ? newFilter(filter) : newFilter;
        window.history.pushState(null, "", `?${buildQuery({ filter: queryFilter })}`);
        setFilter(queryFilter);
    };
    return [filter, handleFilter];
}
