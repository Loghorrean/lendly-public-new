import {ApiClientFactory, ApiClientFactoryInterface} from "@/src/shared/api-client";
import {HttpHeaders} from "@/src/shared/utils";
import {ProjectProvider} from "@/src/entities/project/api/ProjectProvider";

export class ProjectProviderFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string, headers: HttpHeaders) {
        this.apiClientFactory = new ApiClientFactory(`${baseUrl}/api/v1/project`, headers);
    }

    createProjectProvider() {
        return new ProjectProvider(this.apiClientFactory.createClient());
    }
}