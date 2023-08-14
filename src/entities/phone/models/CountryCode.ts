import { ObjectValues } from "@/src/shared/utils";

export const COUNTRY_CODE = {
    RU: "7",
} as const;

export type CountryCode = ObjectValues<typeof COUNTRY_CODE>;
