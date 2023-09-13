import {ObjectValues} from "@/src/shared/utils";

export const POST_SIZE = {
    SMALL: "SMALL",
    BIG: "BIG"
} as const;

export type PostSize = ObjectValues<typeof POST_SIZE>;
