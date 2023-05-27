//Function does not accept objects with functions as fields
import { isPrimitive } from "@/src/shared/utils/functions";

function compareObjects<T extends object>(first: T, second: T): boolean {
    if (Object.keys(first).length !== Object.keys(second).length) {
        return false;
    }
    for (const key in first) {
        if (typeof key === "function") {
            return false;
        }
        const primitive = isPrimitive(first[key]) && isPrimitive(second[key]);
        if (primitive && first[key] !== second[key]) {
            return false;
        }
        if (!primitive && !compareObjects(first[key] as object, second[key] as object)) {
            return false;
        }
    }
    return true;
}

export default compareObjects;
