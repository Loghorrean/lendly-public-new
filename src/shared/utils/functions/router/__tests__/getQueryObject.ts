import compareObjects from "@/src/shared/utils/functions/common/compareObjects";
import buildQuery from "@/src/shared/utils/functions/router/buildQuery";
import { getQueryObject } from "@/src/shared/utils";

describe("Testing generating object from query", () => {
    test("Basic object", () => {
        const result = getQueryObject("?first=1&second=2");
        expect(compareObjects(result, { first: "1", second: "2" })).toBe(true);
    });
    test("Nested object", () => {
        const result = getQueryObject("?filter[first]=1&filter[second]=2");
        expect(compareObjects(result, { filter: { first: "1", second: "2" } })).toBe(true);
    });
    test("Nested object with date", () => {
        const result = getQueryObject("?filter[first]=2022-02-02&filter[second]=2");
        expect(compareObjects(result, { filter: { first: "2022-02-02", second: "2" } })).toBe(true);
    });
    test("Object with array", () => {
        const result = getQueryObject("?filter[]=1&filter[]=2&filter[]=3");
        expect(compareObjects(result, { filter: ["1", "2", "3"] })).toBe(true);
    });
    test("Object with nested array", () => {
        const result = getQueryObject("?filter[point][]=1&filter[point][]=2&filter[point][]=3");
        expect(compareObjects(result, { filter: { point: ["1", "2", "3"] } })).toBe(true);
    });
    test("Backward compatibility (basic from query to object)", () => {
        const source = { first: "1", second: "2" };
        expect(compareObjects(getQueryObject(`?${buildQuery(source)}`), source)).toBe(true);
    });
    test("Backward compatibility (from query to object (nested))", () => {
        const source = { filter: { first: "1", second: "2" } };
        expect(compareObjects(getQueryObject(`?${buildQuery(source)}`), source)).toBe(true);
    });
    test("Backward compatibility (from query to object (array))", () => {
        const source = { filter: ["1", "2", "poof"] };
        expect(compareObjects(getQueryObject(`?${buildQuery(source)}`), source)).toBe(true);
    });
    test("Backward compatibility (from query to object (nested array))", () => {
        const source = {
            filter: { first: ["1", "2", "poof"], second: { third: ["3", "5"] } },
        };
        expect(compareObjects(getQueryObject(`?${buildQuery(source)}`), source)).toBe(true);
    });
});
