import {PageProviderFactory} from "@/src/entities/static-page/api/PageProviderFactory";
import {appConfig} from "@/src/shared/configs";
import {getBaseHeaders} from "@/src/shared/api-client/di";

export const createPageProvider = () => {
    const factory = new PageProviderFactory(appConfig.apiBaseUrl, getBaseHeaders());
    return factory.createPageProvider();
}
