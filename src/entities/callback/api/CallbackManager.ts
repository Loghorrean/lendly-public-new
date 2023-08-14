import {ApiClientInterface} from "@/src/shared/api-client";
import {CallbackRequest} from "@/src/entities/callback/model";

export class CallbackManager {
    constructor(private readonly apiClient: ApiClientInterface) {}

    public async createPublic(request: CallbackRequest) {
        return this.apiClient.post("/public", request);
    }
}