import {LegalDocumentProviderFactory} from "@/src/entities/legal-document/api/LegalDocumentProviderFactory";
import {appConfig} from "@/src/shared/configs";
import {getBaseHeaders} from "@/src/shared/api-client/di";

export const createLegalDocumentProvider = () => {
    const factory = new LegalDocumentProviderFactory(appConfig.apiBaseUrl, getBaseHeaders());
    return factory.createLegalDocumentProvider();
}