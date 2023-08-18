import {ApiClientInterface} from "@/src/shared/api-client";
import {Token} from "@/src/entities/auth/model";

export class AuthManager {
    constructor(private readonly apiClient: ApiClientInterface) {}

    public async createAutoLoginToken(username: string, password: string): Promise<Token> {
        return this.apiClient.post("/create-autologin-token", { username, password });
    }
}
