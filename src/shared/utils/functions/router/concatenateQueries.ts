import { getQueryObject } from "./getQueryObject";
import buildQuery from "./buildQuery";

//TODO: MAYBE ADD DEEP MERGE
export const concatenateQueries = (queryString: string, ...other: string[]): string => {
    return buildQuery(
        [queryString, ...other]
            .map(value => getQueryObject(value.startsWith("?") ? value : `?${value}`))
            .reduce((prev, cur) => {
                return { ...prev, ...cur };
            })
    );
};
