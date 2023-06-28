import {Container} from "@/src/shared/ui/layout";
import styles from "./LoanDocumentSection.module.scss";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import {ObjectValues} from "@/src/shared/utils";
import {ReactElement, useState} from "react";
import LegalDocumentsList from "@/src/widgets/for-borrowers/LegalDocumentsList";

const DOCUMENTS_TAB = {
    LEGAL: "LEGAL",
    LOAN_REGISTRATION: "LOAN_REGISTRATION",
    INDIVIDUAL: "INDIVIDUAL"
} as const;

type DocumentsTab = ObjectValues<typeof DOCUMENTS_TAB>;

const documentTabsMap: Record<DocumentsTab, ReactElement> = {
    [DOCUMENTS_TAB.LEGAL]: <LegalDocumentsList key="legal" />,
    [DOCUMENTS_TAB.LOAN_REGISTRATION]: <LegalDocumentsList key="loan" />,
    [DOCUMENTS_TAB.INDIVIDUAL]: <LegalDocumentsList key="individual" />
}

const LoanDocumentSection = () => {
    const [currentTab, setCurrentTab] = useState<DocumentsTab>(DOCUMENTS_TAB.LEGAL);
    return (
        <section className={styles.loan_document_section}>
            <Container>
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.loan_document_section__heading}>
                        Какие нужны документы для оформления займа?
                    </Heading>
                </SecondaryHeading>
                <ul className={styles.loan_document_section__tabs} role="tablist">
                    <li
                        className={styles.loan_document_section__tab}
                        aria-current={currentTab === DOCUMENTS_TAB.LEGAL}
                        onClick={() => setCurrentTab(DOCUMENTS_TAB.LEGAL)}
                        role="tab"
                    >
                        Юрлицам
                    </li>
                    <li
                        className={styles.loan_document_section__tab}
                        aria-current={currentTab === DOCUMENTS_TAB.LOAN_REGISTRATION}
                        onClick={() => setCurrentTab(DOCUMENTS_TAB.LOAN_REGISTRATION)}
                        role="tab"
                    >
                        Для регистрации залога
                    </li>
                    <li
                        className={styles.loan_document_section__tab}
                        aria-current={currentTab === DOCUMENTS_TAB.INDIVIDUAL}
                        onClick={() => setCurrentTab(DOCUMENTS_TAB.INDIVIDUAL)}
                        role="tab"
                    >
                        Индивидуальным предпринимателям
                    </li>
                </ul>
            </Container>
            <Container needsDisabling>
                { documentTabsMap[currentTab] }
            </Container>
        </section>
    );
}

export default LoanDocumentSection;
