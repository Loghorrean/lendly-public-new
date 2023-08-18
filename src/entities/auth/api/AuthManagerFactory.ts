import {ApiClientFactory, ApiClientFactoryInterface} from "@/src/shared/api-client";
import {HttpHeaders} from "@/src/shared/utils";
import {AuthManager} from "@/src/entities/auth/api/AuthManager";

export class AuthManagerFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string, headers: HttpHeaders) {
        this.apiClientFactory = new ApiClientFactory(`${baseUrl}/api/v1/auth`, headers);
    }

    public createAuthManager() {
        return new AuthManager(this.apiClientFactory.createClient());
    }
}