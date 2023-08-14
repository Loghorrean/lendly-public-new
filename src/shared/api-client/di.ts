import { HttpHeaders } from "@/src/shared/utils/types";

export function getBaseHeaders(): HttpHeaders {
    return {
        "Accept-Language": "ru",
    };
}
