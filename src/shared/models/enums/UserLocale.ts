import { ObjectValues } from "@/src/shared/utils";

export const USER_LOCALE = {
    RU: "ru",
    EN: "en",
} as const;

export type UserLocale = ObjectValues<typeof USER_LOCALE>;

export const defaultUserLocale: UserLocale = USER_LOCALE.EN;
