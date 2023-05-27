import { isNotEmpty } from "@/src/shared/utils";

export const appConfig = {
    get apiBaseUrl() {
        return process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
    },
    get cdnBaseUrl() {
        return process.env.NEXT_PUBLIC_CDN_BASE_URL ?? "";
    },
    get userTermsUrl() {
        return process.env.NEXT_PUBLIC_USER_TERMS_URL ?? "";
    },
    get smsCodeLength() {
        return isNotEmpty(process.env.NEXT_PUBLIC_SMS_CODE_LENGTH)
            ? parseInt(process.env.NEXT_PUBLIC_SMS_CODE_LENGTH)
            : 4;
    },
    get smsCodeRequestDelay() {
        return isNotEmpty(process.env.NEXT_PUBLIC_CODE_REQUEST_DELAY)
            ? parseInt(process.env.NEXT_PUBLIC_CODE_REQUEST_DELAY)
            : 60;
    },
};
