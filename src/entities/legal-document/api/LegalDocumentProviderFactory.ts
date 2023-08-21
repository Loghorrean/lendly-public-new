import {ApiClientFactory, ApiClientFactoryInterface} from "@/src/shared/api-client";
import {HttpHeaders} from "@/src/shared/utils";
import {LegalDocumentProvider} from "@/src/entities/legal-document/api/LegalDocumentProvider";

export class LegalDocumentProviderFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string, headers: HttpHeaders) {
        this.apiClientFactory = new ApiClientFactory(`${baseUrl}/api/v1/legal-document`, headers);
    }

    public createLegalDocumentProvider() {
        return new LegalDocumentProvider(this.apiClientFactory.createClient());
    }
}