import {ApiClientFactory, ApiClientFactoryInterface} from "@/src/shared/api-client";
import {HttpHeaders} from "@/src/shared/utils";
import {RegistrationManager} from "@/src/entities/registration/api/RegistrationManager";

export class RegistrationManagerFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string, headers: HttpHeaders) {
        this.apiClientFactory = new ApiClientFactory(`${baseUrl}/api/v1/registration`, headers);
    }

    public createRegistrationManager() {
        return new RegistrationManager(this.apiClientFactory.createClient());
    }
}