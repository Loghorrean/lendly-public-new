import {ProjectProviderFactory} from "@/src/entities/project/api/ProjectProviderFactory";
import {appConfig} from "@/src/shared/configs";
import {getBaseHeaders} from "@/src/shared/api-client/di";

export const createProjectProvider = () => {
    const factory = new ProjectProviderFactory(appConfig.apiBaseUrl, getBaseHeaders());
    return factory.createProjectProvider();
}
