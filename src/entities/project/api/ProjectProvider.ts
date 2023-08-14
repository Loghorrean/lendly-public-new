import {ApiClientInterface} from "@/src/shared/api-client";
import {FinishedProject} from "@/src/entities/project/model";

export class ProjectProvider {
    constructor(private readonly apiClient: ApiClientInterface) {}

    public async getFinishedList(limit: number): Promise<Array<FinishedProject>> {
        return this.apiClient.get("/finished", { limit });
    }
}