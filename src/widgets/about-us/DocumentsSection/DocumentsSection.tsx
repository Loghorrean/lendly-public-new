import styles from "./DocumentsSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import {isValueEmpty, ObjectValues} from "@/src/shared/utils";
import {ReactElement, useState} from "react";
import ActualDocuments from "@/src/widgets/about-us/ActualDocuments";
import {LEGAL_DOCUMENT_TYPE} from "@/src/entities/legal-document/model";
import {useSearchParams} from "next/navigation";

const DOCUMENTS_TAB = {
    ACTUAL: "ACTUAL",
    ARCHIVE: "ARCHIVE"
} as const;

type DocumentsTab = ObjectValues<typeof DOCUMENTS_TAB>;

const documentsMap: Record<DocumentsTab, ReactElement> = {
    [DOCUMENTS_TAB.ACTUAL]: <ActualDocuments type={LEGAL_DOCUMENT_TYPE.ACTIVE} key={LEGAL_DOCUMENT_TYPE.ACTIVE} />,
    [DOCUMENTS_TAB.ARCHIVE]: <ActualDocuments type={LEGAL_DOCUMENT_TYPE.ARCHIVED} key={LEGAL_DOCUMENT_TYPE.ARCHIVED} />
};

const DocumentsSection = () => {
    const searchParams = useSearchParams();
    const [currentTab, setCurrentTab] = useState<DocumentsTab>(() => {
        const tab = searchParams.get("tab");
        if (isValueEmpty(tab)) {
            return DOCUMENTS_TAB.ACTUAL;
        }
        if (Object.keys(DOCUMENTS_TAB).includes(tab)) {
            return tab as DocumentsTab;
        }
        return DOCUMENTS_TAB.ACTUAL
    });
    return (
        <section className={styles.documents_section} id="documents">
            <Container>
                <ul className={styles.documents_section__tabs} role="tablist">
                    <li
                        className={styles.documents_section__tab}
                        role="tab"
                        aria-current={currentTab === DOCUMENTS_TAB.ACTUAL}
                        onClick={() => setCurrentTab(DOCUMENTS_TAB.ACTUAL)}
                    >
                        Актуальные документы
                    </li>
                    <li
                        className={styles.documents_section__tab}
                        role="tab"
                        aria-current={currentTab === DOCUMENTS_TAB.ARCHIVE}
                        onClick={() => setCurrentTab(DOCUMENTS_TAB.ARCHIVE)}
                    >
                        Архив
                    </li>
                </ul>
                {documentsMap[currentTab]}
            </Container>
        </section>
    );
}

export default DocumentsSection;
