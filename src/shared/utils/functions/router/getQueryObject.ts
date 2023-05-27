import { dropIsoTimezone } from "../date";
import { isIterable } from "@/src/shared/utils/functions/common/isIterable";
import { QueryObject } from "@/src/shared/utils";

export function getQueryObject<T extends QueryObject = object>(query: string): T {
    query = query.replaceAll("%5B", "[").replaceAll("%5D", "]");
    const queryObject: QueryObject = {};
    if (query === "") {
        return queryObject as T;
    }
    if (!query.startsWith("?")) {
        throw new Error("Given string does not match query parameters");
    }
    const queryParams = query.slice(1).split("&");
    queryParams.forEach(param => {
        const [paramKey, paramValue] = param.split("=");
        const key = paramKey.replace(/\[.*]/, "");
        if (!queryObject.hasOwnProperty(key)) {
            queryObject[key] = paramKey !== key ? {} : paramValue;
        }
        if (paramKey !== key) {
            const isArray = paramKey.slice(-2) === "[]";
            const isDate = /^\d{4}-\d{2}-\d{2}$/.test(paramValue);
            const nested = paramKey
                .slice(key.length + 1, -1)
                .split("][")
                .filter(elem => {
                    return elem !== "";
                });
            const current = queryObject[key as keyof typeof queryObject];
            if (nested.length === 0 && isArray) {
                queryObject[key] = isIterable(queryObject[key]) ? [...queryObject[key], paramValue] : [paramValue];
            }
            nested.reduce((prev, cur, index, array) => {
                const isLast = index === array.length - 1;
                const value = !isLast ? {} : isArray ? [] : undefined;
                if (!Object.prototype.hasOwnProperty.call(prev, cur)) {
                    Object.defineProperty(prev, cur, {
                        value,
                        writable: true,
                        enumerable: true,
                    });
                }
                if (isLast) {
                    if (isArray) {
                        prev[cur].push(isDate ? dropIsoTimezone(paramValue) : paramValue);
                    } else if (isDate) {
                        prev[cur] = dropIsoTimezone(paramValue);
                    } else {
                        prev[cur] = paramValue;
                    }
                }
                return prev[cur];
            }, current);
        }
    });
    return queryObject as T;
}
