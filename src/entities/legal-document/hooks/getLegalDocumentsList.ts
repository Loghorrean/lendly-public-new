import {createProjectProvider} from "@/src/entities/project/api";
import {FinishedProject} from "@/src/entities/project/model";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import {LegalDocument, LegalDocumentType} from "@/src/entities/legal-document/model";
import {createLegalDocumentProvider} from "@/src/entities/legal-document/api";
import {Collection} from "@/src/shared/models/common/Collection";

type GetLegalDocumentsListInput = {
    type: LegalDocumentType;
}

export const useGetLegalDocumentsList = (
    input: GetLegalDocumentsListInput,
    options?: Omit<UseQueryOptions<Collection<LegalDocument>>, "queryFn">
) => {
    return useQuery({
        ...options,
        queryFn: async () => {
            const provider = createLegalDocumentProvider();
            return provider.getList(input.type);
        },
        queryKey: options?.queryKey ?? ["legal-documents"]
    })
}