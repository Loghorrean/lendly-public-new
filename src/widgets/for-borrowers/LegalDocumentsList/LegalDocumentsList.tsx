import styles from "./LegalDocumentsList.module.scss";
import LoanDocument from "@/src/widgets/for-borrowers/LoanDocument";
import {ReactElement} from "react";
import {DOCUMENTS_TAB, DocumentsTab} from "@/src/widgets/for-borrowers/LegalDocumentsList/DocumentsTab";

const typesMap: Record<DocumentsTab, ReactElement> = {
    [DOCUMENTS_TAB.LEGAL]: <>
        <LoanDocument heading="01">
            Все страницы паспорта директора или учредителя
        </LoanDocument>
        <LoanDocument heading="02">
            Свидетельство о регистрации, ИНН и ОГРН
        </LoanDocument>
        <LoanDocument heading="03">
            Устав
        </LoanDocument>
        <LoanDocument heading="04">
            Протокол или решение о назначении директора
        </LoanDocument>
        <LoanDocument heading="05">
            Реквизиты расчётного счёта
        </LoanDocument>
    </>,
    [DOCUMENTS_TAB.INDIVIDUAL]: <>
        <LoanDocument heading="01" className={styles.legal_documents_list__half}>
            ИНН
        </LoanDocument>
        <LoanDocument heading="02" className={styles.legal_documents_list__half}>
            Свидетельство о регистрации ИП
        </LoanDocument>
        <LoanDocument heading="03" className={styles.legal_documents_list__half}>
            Паспорт
        </LoanDocument>
        <LoanDocument heading="04" className={styles.legal_documents_list__half}>
            Реквизиты
        </LoanDocument>
    </>,
    [DOCUMENTS_TAB.LOAN_REGISTRATION]: <>
        <LoanDocument heading="01" className={styles.legal_documents_list__half}>
            Правоустанавливающие документы
        </LoanDocument>
        <LoanDocument heading="02" className={styles.legal_documents_list__half}>
            Фото объекта
        </LoanDocument>
        <LoanDocument heading="03" className={styles.legal_documents_list__half}>
            Выписка ЕГРН
        </LoanDocument>
        <LoanDocument heading="04" className={styles.legal_documents_list__half}>
            Паспорт/учредительные документы (физ. лицо / ООО)
        </LoanDocument>
    </>
}

type Props = {
    tab: DocumentsTab;
}

const LegalDocumentsList = ({ tab }: Props) => {
    return (
        <ul className={styles.legal_documents_list}>
            {typesMap[tab]}
        </ul>
    );
}

export default LegalDocumentsList;
