import {ObjectValues} from "@/src/shared/utils";

export const LEGAL_DOCUMENT_TYPE = {
    MAIN: "MAIN",
    ACTIVE: "ACTIVE",
    ARCHIVED: "ARCHIVED"
} as const;

export type LegalDocumentType = ObjectValues<typeof LEGAL_DOCUMENT_TYPE>;
