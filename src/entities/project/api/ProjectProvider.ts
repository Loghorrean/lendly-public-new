import {ApiClientInterface} from "@/src/shared/api-client";
import {FinishedProject, ProjectType, PublicProject} from "@/src/entities/project/model";
import buildQuery from "@/src/shared/utils/functions/router/buildQuery";

export class ProjectProvider {
    constructor(private readonly apiClient: ApiClientInterface) {}

    public async getFinishedList(limit: number, type: ProjectType): Promise<Array<FinishedProject>> {
        return this.apiClient.get("/finished", { limit, type });
    }

    public async getPublicProjectsList(limit: number): Promise<Array<PublicProject>> {
        return this.apiClient.get(`/paid?${buildQuery({ limit })}`);
    }
}