import { dropIsoTimezone } from "../date";

export type QueryObject = {
    [key: string]: any;
};

const buildQuery = (data: QueryObject, prefix?: string): string => {
    const arr: Array<string> = [];
    if (data instanceof Array) {
        if (!prefix) {
            throw new Error("Passed an array without prefix");
        }
        data.forEach(value => {
            const key: string = prefix + "[]";
            arr.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
        });
    } else if (data !== null && typeof data === "object") {
        Object.keys(data).forEach(name => {
            const key: string = prefix ? prefix + "[" + name + "]" : name;
            let value: any = data[name];
            if (value === null) {
                return;
            }
            if (value instanceof Date) {
                //Dropping the timezone part
                value = dropIsoTimezone(value);
            }
            if (typeof value === "object") {
                const res = buildQuery(value, key);
                res && arr.push(res);
            } else if (value !== undefined && value !== "") {
                arr.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
            }
        });
    }
    return arr.join("&");
};

export default buildQuery;
