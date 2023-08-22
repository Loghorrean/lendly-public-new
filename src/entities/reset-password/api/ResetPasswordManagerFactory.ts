import {ApiClientFactory, ApiClientFactoryInterface} from "@/src/shared/api-client";
import {HttpHeaders} from "@/src/shared/utils";
import {ResetPasswordManager} from "@/src/entities/reset-password/api/ResetPasswordManager";

export class ResetPasswordManagerFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string, headers: HttpHeaders) {
        this.apiClientFactory = new ApiClientFactory(`${baseUrl}/api/v1/reset-password`, headers);
    }

    public createResetPasswordManager() {
        return new ResetPasswordManager(this.apiClientFactory.createClient());
    }
}
