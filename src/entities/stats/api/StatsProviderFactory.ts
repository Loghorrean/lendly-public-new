import {ApiClientFactory, ApiClientFactoryInterface} from "@/src/shared/api-client";
import {HttpHeaders} from "@/src/shared/utils";
import {StatsProvider} from "@/src/entities/stats/api/StatsProvider";

export class StatsProviderFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string, headers: HttpHeaders) {
        this.apiClientFactory = new ApiClientFactory(`${baseUrl}/api/v1/stats`, headers);
    }

    public createStatsProvider() {
        return new StatsProvider(this.apiClientFactory.createClient());
    }
}
