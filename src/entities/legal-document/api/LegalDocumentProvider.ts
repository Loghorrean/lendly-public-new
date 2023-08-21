import {ApiClientInterface} from "@/src/shared/api-client";
import {LegalDocument, LegalDocumentType} from "@/src/entities/legal-document/model";
import {Collection} from "@/src/shared/models/common/Collection";
import buildQuery from "@/src/shared/utils/functions/router/buildQuery";

export class LegalDocumentProvider {
    constructor(private readonly apiClient: ApiClientInterface) {}

    public async getList(type: LegalDocumentType): Promise<Collection<LegalDocument>> {
        return this.apiClient.get(`/?${buildQuery({ type })}`);
    }
}
