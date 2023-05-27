import expect from "expect";
import buildQuery from "@/src/shared/utils/functions/router/buildQuery";
import { encodeCertainURIComponents } from "@/src/shared/utils";

describe("Testing build query", () => {
    test("Basic building query", () => {
        const result = buildQuery({ uuid: "2f02eb39-4e0b-4387-8400-82d30fc0e8e3" });
        expect(result).toBe("uuid=2f02eb39-4e0b-4387-8400-82d30fc0e8e3");
    });
    test("Query with two parameters", () => {
        const result = buildQuery({
            uuid: "2f02eb39-4e0b-4387-8400-82d30fc0e8e3",
            field: 3,
        });
        expect(result).toBe("uuid=2f02eb39-4e0b-4387-8400-82d30fc0e8e3&field=3");
    });
    test("Query with array", () => {
        const result = buildQuery({ field: [1, 2, "345"] });
        expect(result).toBe(encodeCertainURIComponents("field[]=1&field[]=2&field[]=345", "[]"));
    });
    test("Query with date", () => {
        const result = buildQuery({ field: new Date(1995, 11, 17) });
        expect(result).toBe(encodeCertainURIComponents("field=1995-12-16", "[]"));
    });
    test("Query with object", () => {
        const result = buildQuery({ filter: { first: 1, second: 2 } });
        expect(result).toBe(encodeCertainURIComponents("filter[first]=1&filter[second]=2", "[]"));
    });
    test("Query with object and array", () => {
        const result = buildQuery({ filter: { first: 1 }, arr: [2, 3, 4] });
        expect(result).toBe(encodeCertainURIComponents("filter[first]=1&arr[]=2&arr[]=3&arr[]=4", "[]"));
    });
    test("Query with object with array", () => {
        const result = buildQuery({ filter: { arr: [2, 3, 4] } });
        expect(result).toBe(encodeCertainURIComponents("filter[arr][]=2&filter[arr][]=3&filter[arr][]=4", "[]"));
    });
});
