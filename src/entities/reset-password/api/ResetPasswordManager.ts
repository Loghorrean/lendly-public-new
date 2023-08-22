import {ApiClientInterface} from "@/src/shared/api-client";

export class ResetPasswordManager {
    constructor(private readonly apiClient: ApiClientInterface) {}

    public async requestLink(email: string): Promise<void> {
        return this.apiClient.post("", { email });
    }

    public async confirm(verificationCode: string, password: string): Promise<void> {
        return this.apiClient.post("/confirm", { verificationCode, password });
    }
}
