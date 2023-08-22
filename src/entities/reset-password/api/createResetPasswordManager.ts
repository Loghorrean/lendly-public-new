import {ResetPasswordManagerFactory} from "@/src/entities/reset-password/api/ResetPasswordManagerFactory";
import {appConfig} from "@/src/shared/configs";
import {getBaseHeaders} from "@/src/shared/api-client/di";

export const createResetPasswordManager = () => {
    const factory = new ResetPasswordManagerFactory(appConfig.apiBaseUrl, getBaseHeaders());
    return factory.createResetPasswordManager();
}
