import {ApiClientInterface} from "@/src/shared/api-client";
import {PlatformStats} from "@/src/entities/stats/model";

export class StatsProvider {
    constructor(private readonly apiClient: ApiClientInterface) {}

    public async getStats(): Promise<PlatformStats> {
        return this.apiClient.get("");
    }
}
