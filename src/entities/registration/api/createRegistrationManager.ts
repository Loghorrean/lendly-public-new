import {RegistrationManagerFactory} from "@/src/entities/registration/api/RegistrationManagerFactory";
import {appConfig} from "@/src/shared/configs";
import {getBaseHeaders} from "@/src/shared/api-client/di";

export const createRegistrationManager = () => {
    const factory = new RegistrationManagerFactory(appConfig.apiBaseUrl, getBaseHeaders());
    return factory.createRegistrationManager();
}
