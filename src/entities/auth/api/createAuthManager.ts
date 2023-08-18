import {AuthManagerFactory} from "@/src/entities/auth/api/AuthManagerFactory";
import {appConfig} from "@/src/shared/configs";
import {getBaseHeaders} from "@/src/shared/api-client/di";

export const createAuthManager = () => {
    const factory = new AuthManagerFactory(appConfig.apiBaseUrl, getBaseHeaders());
    return factory.createAuthManager();
}
