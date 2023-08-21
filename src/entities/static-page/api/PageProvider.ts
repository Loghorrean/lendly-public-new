import {ApiClientInterface} from "@/src/shared/api-client";
import {StaticPage} from "@/src/entities/static-page/model";

export class PageProvider {
    constructor(private readonly apiClient: ApiClientInterface) {}

    public async getStaticPage(slug: string): Promise<StaticPage> {
        return this.apiClient.get(`/${slug}`);
    }
}