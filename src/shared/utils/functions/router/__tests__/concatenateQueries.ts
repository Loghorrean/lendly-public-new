import { describe } from "jest-circus";
import buildQuery from "@/src/shared/utils/functions/router/buildQuery";
import { concatenateQueries, encodeCertainURIComponents } from "@/src/shared/utils";

describe("Testing function to concatenate queries", () => {
    test("Concatenate simple query", () => {
        const first = buildQuery({ first: 1 });
        const second = buildQuery({ second: 2 });
        const result = concatenateQueries(first, second);
        expect(result).toBe("first=1&second=2");
    });
    test("Concatenate same values", () => {
        const first = buildQuery({ field: 1 });
        const second = buildQuery({ field: 2 });
        const result = concatenateQueries(first, second);
        expect(result).toBe("field=2");
    });
    test("Concatenate queries with objects", () => {
        const first = buildQuery({ first: { field: 1 } });
        const second = buildQuery({ second: { field: 1 } });
        const result = concatenateQueries(first, second);
        expect(result).toBe(encodeCertainURIComponents("first[field]=1&second[field]=1", "[]"));
    });
    test("Concatenate queries with same object", () => {
        const first = buildQuery({ filter: { point: 1 } });
        const second = buildQuery({ filter: { field: 2 } });
        const result = concatenateQueries(first, second);
        expect(result).toBe(encodeCertainURIComponents("filter[field]=2", "[]"));
    });
});
