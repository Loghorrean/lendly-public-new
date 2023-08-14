import { ApiClientInterface } from "../clients";

export interface ApiClientFactoryInterface {
    createClient(): ApiClientInterface;
    createAuthorizedClient(authToken: string): ApiClientInterface;
}
