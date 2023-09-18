import {createProjectProvider} from "@/src/entities/project/api";
import {FinishedProject, ProjectType} from "@/src/entities/project/model";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export const useGetFinishedProjectsList = (limit: number = 2, type: ProjectType, options?: Omit<UseQueryOptions<Array<FinishedProject>>, "queryFn">) => {
    return useQuery({
        ...options,
        queryFn: async () => {
            const provider = createProjectProvider();
            return provider.getFinishedList(limit, type);
        },
        queryKey: options?.queryKey ?? ["finished-projects"]
    })
}