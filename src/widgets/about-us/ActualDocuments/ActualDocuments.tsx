import styles from "./ActualDocuments.module.scss";
import CommonDocument, {ProjectDocument} from "@/src/widgets/about-us/CommonDocument/CommonDocument";

const actualDocuments: Array<ProjectDocument> = [
    {
        title: "Устав (редакция от 13.05.2021 г.)",
        slug: "charter-2021",
        mimetype: "Pdf",
        size: "968 КБ",
        link: "https://youtube.com"
    },
    {
        title: "Срок восстановления работы платформы, в случае нарушения ее функционирования",
        slug: "document-2",
        mimetype: "Pdf",
        size: "968 КБ",
        link: "https://youtube.com"
    },
    {
        title: "Порядок действий, необходимых для присоединения к договору об оказании " +
            "услуг по привлечению инвестиций, к договору об оказании услуг по содействию " +
            "в инвестировании, и порядок действий, необходимых для инвестирования " +
            "с использованием инвестиционной платформы",
        slug: "document-3",
        mimetype: "Pdf",
        size: "968 КБ",
        link: "https://youtube.com"
    },
    {
        title: "Информация о том, является ли признание оператором инвестиционной платформы гражданина " +
            "квалифицированным инвестором необходимым условием для оказания ему " +
            "услуг по содействию в инвестировании",
        slug: "document-4",
        mimetype: "Pdf",
        size: "968 КБ",
        link: "https://youtube.com"
    },
    {
        title: "Информация о прекращении действия инвестиционного предложения в связи " +
            "с достижением указанного в нем максимального объема денежных средств",
        slug: "document-5",
        mimetype: "Pdf",
        size: "968 КБ",
        link: "https://youtube.com"
    },
    {
        title: "Политика управления конфликтами интересов",
        slug: "document-6",
        mimetype: "Pdf",
        size: "968 КБ",
        link: "https://youtube.com"
    },
    {
        title: "Информация о выявленных конфликтах интересов",
        slug: "document-7",
        mimetype: "Pdf",
        size: "968 КБ",
        link: "https://youtube.com"
    },
    {
        title: "Информация о действиях, которые могут быть предприняты инвестором в случае неисполнения " +
            "обязательств лицом, привлекающим инвестиции",
        slug: "document-8",
        mimetype: "Pdf",
        size: "968 КБ",
        link: "https://youtube.com"
    },
    {
        title: "Годовой отчет оператора инвестиционной платформы Lendly о результатах " +
            "деятельности по организации привлечения инвестиций",
        slug: "document-9",
        mimetype: "Pdf",
        size: "968 КБ",
        link: "https://youtube.com"
    },
    {
        title: "Бухгалтерская (финансовая) отчетность, представленная в налоговый орган за 2021 г.",
        slug: "document-10",
        mimetype: "Pdf",
        size: "968 КБ",
        link: "https://youtube.com"
    },
    {
        title: "Бухгалтерская (финансовая) отчетность, представленная в налоговый орган за 2022 г.",
        slug: "document-11",
        mimetype: "Pdf",
        size: "968 КБ",
        link: "https://youtube.com"
    }
]

const ActualDocuments = () => {
    const renderDocuments = () => {
        return actualDocuments.map(document => <CommonDocument document={document} key={document.title} />);
    }
    return (
        <ul className={styles.actual_documents}>
            { renderDocuments() }
        </ul>
    );
}

export default ActualDocuments;
