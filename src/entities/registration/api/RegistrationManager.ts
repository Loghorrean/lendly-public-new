import {ApiClientInterface} from "@/src/shared/api-client";
import {LenderRegistrationInput, RegisteredUser} from "@/src/entities/registration/model";

export class RegistrationManager {
    constructor(private readonly apiClient: ApiClientInterface) {}

    public async registerLender(input: LenderRegistrationInput, captchaToken: string): Promise<RegisteredUser> {
        return this.apiClient.post("/lender", {
            ...input,
            "g-recaptcha-response": captchaToken
        });
    }
}