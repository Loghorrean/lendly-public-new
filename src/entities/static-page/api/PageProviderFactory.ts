import {ApiClientFactory, ApiClientFactoryInterface} from "@/src/shared/api-client";
import {HttpHeaders} from "@/src/shared/utils";
import {PageProvider} from "@/src/entities/static-page/api/PageProvider";

export class PageProviderFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string, headers: HttpHeaders) {
        this.apiClientFactory = new ApiClientFactory(`${baseUrl}/api/v1/page`, headers);
    }

    public createPageProvider() {
        return new PageProvider(this.apiClientFactory.createClient());
    }
}
