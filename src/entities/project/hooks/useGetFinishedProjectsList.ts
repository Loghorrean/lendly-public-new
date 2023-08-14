import {createProjectProvider} from "@/src/entities/project/api";
import {FinishedProject} from "@/src/entities/project/model";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export const useGetFinishedProjectsList = (limit: number = 2, options?: Omit<UseQueryOptions<Array<FinishedProject>>, "queryFn">) => {
    return useQuery({
        ...options,
        queryFn: async () => {
            const provider = createProjectProvider();
            return provider.getFinishedList(limit);
        },
        queryKey: options?.queryKey ?? ["finished-projects"]
    })
}