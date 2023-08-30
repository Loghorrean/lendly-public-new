export const recaptchaConfig = {
    get siteKey() {
        return process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";
    },
};
