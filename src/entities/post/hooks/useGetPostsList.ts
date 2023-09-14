import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import {createPostProvider} from "@/src/entities/post/api";
import {Collection} from "@/src/shared/models/common/Collection";
import {Post, PostFilter} from "@/src/entities/post/model";

type GetPostsListInput = {
    page: number;
    perPage: number;
    filter: PostFilter;
}

export const useGetPostsList = (input: GetPostsListInput, options?: Omit<UseQueryOptions<Collection<Post>>, "queryFn">) => {
    return useQuery({
        ...options,
        queryFn: async () => {
            const provider = createPostProvider();
            return provider.getList(input.page, input.perPage, input.filter);
        },
        queryKey: options?.queryKey ?? ["posts-list", input.page, input.perPage, input.filter],
    })
}
