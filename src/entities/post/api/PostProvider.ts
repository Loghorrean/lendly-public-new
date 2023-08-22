import {ApiClientInterface} from "@/src/shared/api-client";
import {Collection} from "@/src/shared/models/common/Collection";
import {Post} from "@/src/entities/post/model";
import buildQuery from "@/src/shared/utils/functions/router/buildQuery";

export class PostProvider {
    constructor(private readonly apiClient: ApiClientInterface) {}

    public async getList(page: number, perPage: number): Promise<Collection<Post>> {
        return this.apiClient.get(`/?${buildQuery({ page, perPage })}`);
    }
}