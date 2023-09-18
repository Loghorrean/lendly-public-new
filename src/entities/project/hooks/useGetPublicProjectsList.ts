import {createProjectProvider} from "@/src/entities/project/api";
import {PublicProject} from "@/src/entities/project/model";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export const useGetPublicProjectsList = (limit: number = 2, options?: Omit<UseQueryOptions<Array<PublicProject>>, "queryFn">) => {
    return useQuery({
        ...options,
        queryFn: async () => {
            const provider = createProjectProvider();
            return provider.getPublicProjectsList(limit);
        },
        queryKey: options?.queryKey ?? ["public-projects"]
    })
}