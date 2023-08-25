import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import {createStatsProvider} from "@/src/entities/stats/api";
import {PlatformStats} from "@/src/entities/stats/model";

export const useGetStats = (options?: Omit<UseQueryOptions<PlatformStats>, "queryFn">) => {
    return useQuery({
        ...options,
        queryFn: async () => {
            const provider = createStatsProvider();
            return provider.getStats();
        },
        queryKey: options?.queryKey ?? ["stats"]
    })
}
