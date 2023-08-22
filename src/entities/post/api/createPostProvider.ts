import {PostProviderFactory} from "@/src/entities/post/api/PostProviderFactory";
import {appConfig} from "@/src/shared/configs";
import {getBaseHeaders} from "@/src/shared/api-client/di";

export const createPostProvider = () => {
    const factory = new PostProviderFactory(appConfig.apiBaseUrl, getBaseHeaders());
    return factory.createPostProvider();
}
