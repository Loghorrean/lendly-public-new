import {StatsProviderFactory} from "@/src/entities/stats/api/StatsProviderFactory";
import {appConfig} from "@/src/shared/configs";
import {getBaseHeaders} from "@/src/shared/api-client/di";

export const createStatsProvider = () => {
    const factory = new StatsProviderFactory(appConfig.apiBaseUrl, getBaseHeaders());
    return factory.createStatsProvider();
}
