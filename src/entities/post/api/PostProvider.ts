import {ApiClientInterface} from "@/src/shared/api-client";
import {Collection} from "@/src/shared/models/common/Collection";
import {Post, PostFilter} from "@/src/entities/post/model";
import buildQuery from "@/src/shared/utils/functions/router/buildQuery";

export class PostProvider {
    constructor(private readonly apiClient: ApiClientInterface) {}

    public async getList(page: number, perPage: number, filter: PostFilter): Promise<Collection<Post>> {
        return this.apiClient.get(`/?${buildQuery({ page, perPage, filter })}`);
    }

    public async getBySlug(slug: string): Promise<Post | null> {
        return this.apiClient.get(`/${slug}`);
    }
}