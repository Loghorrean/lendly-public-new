import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import {StaticPage} from "@/src/entities/static-page/model";
import {createPageProvider} from "@/src/entities/static-page/api";

type GetStaticPageInput = {
    slug: string;
}

export const useGetStaticPage = (
    input: GetStaticPageInput,
    options?: Omit<UseQueryOptions<StaticPage>, "queryFn">
) => {
    return useQuery({
        ...options,
        queryFn: async () => {
            const provider = createPageProvider();
            return provider.getStaticPage(input.slug);
        },
        queryKey: options?.queryKey ?? ["static-page", input.slug]
    });
}
