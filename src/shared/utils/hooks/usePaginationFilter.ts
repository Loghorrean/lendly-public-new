"use client";

import {Dispatch, SetStateAction, useEffect, useState} from "react";
import buildQuery from "@/src/shared/utils/functions/router/buildQuery";
import {getQueryObject, isValueEmpty} from "@/src/shared/utils";

type Props<T extends Record<string, any>> = {
    initial?: T;
    defaultState?: T;
}

export function usePaginationFilter<T extends Record<string, any>>({ initial, defaultState }: Props<T> = {}): [T, Dispatch<SetStateAction<T>>] {
    const [filter, setFilter] = useState<T>(
        initial ??
        (() => {
            if (typeof window === "undefined") {
                return defaultState ?? {} as T;
            }
            const query = window.location.href;
            if (query.indexOf("?") === -1) {
                return defaultState ?? {} as T;
            }
            const queryObj = getQueryObject<{ filter: T }>(query.slice(query.indexOf("?")));
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
    const handleFilter = (newFilter: T | ((prev: T) => T)) => {
        const queryFilter: T = typeof newFilter === "function" ? newFilter(filter) : newFilter;
        window.history.pushState(null, "", `?${buildQuery({ filter: queryFilter })}`);
        setFilter(queryFilter);
    };
    return [filter, handleFilter];
}
