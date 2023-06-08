import styles from "./LegalDocumentsList.module.scss";
import LoanDocument from "@/src/widgets/for-borrowers/LoanDocument";

const LegalDocumentsList = () => {
    return (
        <ul className={styles.legal_documents_list}>
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
        </ul>
    );
}

export default LegalDocumentsList;
