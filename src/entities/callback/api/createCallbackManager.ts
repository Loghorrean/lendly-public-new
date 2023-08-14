import {CallbackManagerFactory} from "@/src/entities/callback/api/CallbackManagerFactory";
import {appConfig} from "@/src/shared/configs";
import {getBaseHeaders} from "@/src/shared/api-client/di";

export const createCallbackManager = () => {
    const factory = new CallbackManagerFactory(appConfig.apiBaseUrl, getBaseHeaders());
    return factory.createCallbackManager();
}