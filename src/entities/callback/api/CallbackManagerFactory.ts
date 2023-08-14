import {ApiClientFactory, ApiClientFactoryInterface} from "@/src/shared/api-client";
import {HttpHeaders} from "@/src/shared/utils";
import {CallbackManager} from "@/src/entities/callback/api/CallbackManager";

export class CallbackManagerFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string, headers: HttpHeaders) {
        this.apiClientFactory = new ApiClientFactory(`${baseUrl}/api/v1/callback-request`, headers);
    }

    public createCallbackManager() {
        return new CallbackManager(this.apiClientFactory.createClient());
    }
}