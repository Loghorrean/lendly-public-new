import {ObjectValues} from "@/src/shared/utils";

export const LENDER_TYPE = {
    INDIVIDUAL: "INDIVIDUAL",
    ENTREPRENEUR: "ENTREPRENEUR",
    LEGAL_ENTITY: "LEGAL_ENTITY"
} as const;

export type LenderType = ObjectValues<typeof LENDER_TYPE>;
