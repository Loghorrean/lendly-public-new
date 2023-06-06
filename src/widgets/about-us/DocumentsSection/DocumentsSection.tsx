import styles from "./DocumentsSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import {ObjectValues} from "@/src/shared/utils";
import {ReactElement, useState} from "react";
import ActualDocuments from "@/src/widgets/about-us/ActualDocuments";
import ArchiveDocuments from "@/src/widgets/about-us/ArchiveDocuments";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";

const DOCUMENTS_TAB = {
    ACTUAL: "ACTUAL",
    ARCHIVE: "ARCHIVE"
} as const;

type DocumentsTab = ObjectValues<typeof DOCUMENTS_TAB>;

const documentsMap: Record<DocumentsTab, ReactElement> = {
    [DOCUMENTS_TAB.ACTUAL]: <ActualDocuments />,
    [DOCUMENTS_TAB.ARCHIVE]: <ArchiveDocuments />
};

const DocumentsSection = () => {
    const [currentTab, setCurrentTab] = useState<DocumentsTab>(DOCUMENTS_TAB.ACTUAL);
    return (
        <section className={styles.documents_section}>
            <Container>
                <ul className={styles.documents_section__tabs}>
                    <SecondaryHeading>
                        <li
                            className={styles.documents_section__tab}
                            role="tab"
                            aria-current={currentTab === DOCUMENTS_TAB.ACTUAL}
                            onClick={() => setCurrentTab(DOCUMENTS_TAB.ACTUAL)}
                        >
                            Актуальные документы
                        </li>
                    </SecondaryHeading>
                    <SecondaryHeading>
                        <li
                            className={styles.documents_section__tab}
                            role="tab"
                            aria-current={currentTab === DOCUMENTS_TAB.ARCHIVE}
                            onClick={() => setCurrentTab(DOCUMENTS_TAB.ARCHIVE)}
                        >
                            Архив
                        </li>
                    </SecondaryHeading>
                </ul>
                {documentsMap[currentTab]}
            </Container>
        </section>
    );
}

export default DocumentsSection;
