import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import {Post} from "@/src/entities/post/model";
import {createPostProvider} from "@/src/entities/post/api";

export const useGetPostBySlug = (
    slug: string,
    options?: Omit<UseQueryOptions<Post | null>, "queryFn">
) => {
    return useQuery({
        ...options,
        queryFn: async () => {
            const provider = createPostProvider();
            return provider.getBySlug(slug);
        },
        queryKey: options?.queryKey ?? ["detailed-post", slug]
    });
}
