import {ApiClientFactory, ApiClientFactoryInterface} from "@/src/shared/api-client";
import {HttpHeaders} from "@/src/shared/utils";
import {PostProvider} from "@/src/entities/post/api/PostProvider";

export class PostProviderFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string, headers: HttpHeaders) {
        this.apiClientFactory = new ApiClientFactory(`${baseUrl}/api/v1/post`, headers);
    }

    public createPostProvider() {
        return new PostProvider(this.apiClientFactory.createClient());
    }
}
