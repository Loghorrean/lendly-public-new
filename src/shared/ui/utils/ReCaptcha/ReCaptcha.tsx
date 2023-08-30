import {recaptchaConfig} from "@/src/shared/configs";
import ReCAPTCHA, {ReCAPTCHAProps} from "react-google-recaptcha";

type Props = Omit<ReCAPTCHAProps, "sitekey">;

const ReCaptcha = ({ ...props }: Props) => {
    const siteKey = recaptchaConfig.siteKey;
    return (
        <ReCAPTCHA {...props} sitekey={siteKey}  />
    );
}

export default ReCaptcha;
