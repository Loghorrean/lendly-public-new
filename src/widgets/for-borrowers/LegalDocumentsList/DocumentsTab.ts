import {ObjectValues} from "@/src/shared/utils";

export const DOCUMENTS_TAB = {
    LEGAL: "LEGAL",
    LOAN_REGISTRATION: "LOAN_REGISTRATION",
    INDIVIDUAL: "INDIVIDUAL"
} as const;

export type DocumentsTab = ObjectValues<typeof DOCUMENTS_TAB>;