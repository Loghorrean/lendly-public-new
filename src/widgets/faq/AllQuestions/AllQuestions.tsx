import styles from "./AllQuestions.module.scss";
import Question from "@/src/widgets/faq/Question";
import {useToggle} from "@/src/shared/utils";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import { Question as QuestionModel } from "@/src/widgets/faq/Question/Question";
import AnchorPixel from "@/src/shared/ui/utils/AnchorPixel";


const generalQuestions: Array<QuestionModel> = [
    {
        title: "Что такое краудлендинг?",
        content: "<p>Это инвестиционная платформа, которая позволяет привлекать инвестиции для бизнеса по договорам займа, объединяет инвесторов и заёмщиков и даёт им возможность заключать сделки напрямую.\n</p>" +
            "<p>Деятельность регулирует 259-ФЗ <a href='https://youtube.com'>«О привлечении инвестиций с использованием инвестиционных платформ»</a></p>"
    },
    {
        title: "Что такое Lendly?",
        content: "<p>Это инвестиционная платформа, которая позволяет привлекать инвестиции для бизнеса по договорам займа, объединяет инвесторов и заёмщиков и даёт им возможность заключать сделки напрямую.\n</p>" +
            "<p>Деятельность регулирует 259-ФЗ <a href='https://youtube.com'>«О привлечении инвестиций с использованием инвестиционных платформ»</a></p>"
    },
    {
        title: "Что такое «ЛендлиИнвест»?",
        content: "<p>Это инвестиционная платформа, которая позволяет привлекать инвестиции для бизнеса по договорам займа, объединяет инвесторов и заёмщиков и даёт им возможность заключать сделки напрямую.\n</p>" +
            "<p>Деятельность регулирует 259-ФЗ <a href='https://youtube.com'>«О привлечении инвестиций с использованием инвестиционных платформ»</a></p>"
    },
    {
        title: "Как проходят сделки на платформе Lendly?",
        content: "<p>Это инвестиционная платформа, которая позволяет привлекать инвестиции для бизнеса по договорам займа, объединяет инвесторов и заёмщиков и даёт им возможность заключать сделки напрямую.\n</p>" +
            "<p>Деятельность регулирует 259-ФЗ <a href='https://youtube.com'>«О привлечении инвестиций с использованием инвестиционных платформ»</a></p>"
    },
    {
        title: "Кто может стать инвестором на платформе?",
        content: "<p>Это инвестиционная платформа, которая позволяет привлекать инвестиции для бизнеса по договорам займа, объединяет инвесторов и заёмщиков и даёт им возможность заключать сделки напрямую.\n</p>" +
            "<p>Деятельность регулирует 259-ФЗ <a href='https://youtube.com'>«О привлечении инвестиций с использованием инвестиционных платформ»</a></p>"
    },
    {
        title: "Кто может привлечь инвестиции через платформу?",
        content: "<p>Это инвестиционная платформа, которая позволяет привлекать инвестиции для бизнеса по договорам займа, объединяет инвесторов и заёмщиков и даёт им возможность заключать сделки напрямую.\n</p>" +
            "<p>Деятельность регулирует 259-ФЗ <a href='https://youtube.com'>«О привлечении инвестиций с использованием инвестиционных платформ»</a></p>"
    },
    {
        title: "Платформа берёт деньги в долг у инвестора и кредитует заёмщика?",
        content: "<p>Это инвестиционная платформа, которая позволяет привлекать инвестиции для бизнеса по договорам займа, объединяет инвесторов и заёмщиков и даёт им возможность заключать сделки напрямую.\n</p>" +
            "<p>Деятельность регулирует 259-ФЗ <a href='https://youtube.com'>«О привлечении инвестиций с использованием инвестиционных платформ»</a></p>"
    },
    {
        title: "Платформа может распоряжаться деньгами инвестора?",
        content: "<p>Это инвестиционная платформа, которая позволяет привлекать инвестиции для бизнеса по договорам займа, объединяет инвесторов и заёмщиков и даёт им возможность заключать сделки напрямую.\n</p>" +
            "<p>Деятельность регулирует 259-ФЗ <a href='https://youtube.com'>«О привлечении инвестиций с использованием инвестиционных платформ»</a></p>"
    },
    {
        title: "Что такое номинальный счёт?",
        content: "<p>Это инвестиционная платформа, которая позволяет привлекать инвестиции для бизнеса по договорам займа, объединяет инвесторов и заёмщиков и даёт им возможность заключать сделки напрямую.\n</p>" +
            "<p>Деятельность регулирует 259-ФЗ <a href='https://youtube.com'>«О привлечении инвестиций с использованием инвестиционных платформ»</a></p>"
    }
];

const projectQuestions: Array<QuestionModel> = [
    {
        title: "Что такое проектное финансирование?",
        content: "<p>Это инвестирование в проекты с недвижимостью — в строительство или реконструкцию коммерческих объектов под продажу.</p>" +
            "<p>В случае с проектным финансированием инвесторы получают не ежемесячный процент, а весь доход одним платежом — сразу после продажи объекта. </p>" +
            "<p>Сам объект - в залоге у инвесторов. А управляет залогом Lendly.</p>"
    },
    {
        title: "Кто такой управляющий проектом и какая у него роль?",
        content: "<p>Это инвестирование в проекты с недвижимостью — в строительство или реконструкцию коммерческих объектов под продажу.</p>" +
            "<p>В случае с проектным финансированием инвесторы получают не ежемесячный процент, а весь доход одним платежом — сразу после продажи объекта. </p>" +
            "<p>Сам объект - в залоге у инвесторов. А управляет залогом Lendly.</p>"
    },
    {
        title: "Через сколько я получу прибыль, если вложусь в проект?",
        content: "<p>Это инвестирование в проекты с недвижимостью — в строительство или реконструкцию коммерческих объектов под продажу.</p>" +
            "<p>В случае с проектным финансированием инвесторы получают не ежемесячный процент, а весь доход одним платежом — сразу после продажи объекта. </p>" +
            "<p>Сам объект - в залоге у инвесторов. А управляет залогом Lendly.</p>"
    }
];

const loanQuestions: Array<QuestionModel> = [
    {
        title: "Что такое заём с фиксированной ставкой?",
        content: "<p>Будет добавлено позднее</p>"
    }
];

const investorQuestions: Array<QuestionModel> = [
    {
        title: "Что сказать по инвесторам?",
        content: "<p>Будет добавлено позднее</p>"
    }
];

const borrowerQuestions: Array<QuestionModel> = [
    {
        title: "Что сказать по заёмщикам?",
        content: "<p>Будет добавлено позднее</p>"
    }
];

const AllQuestions = () => {
    const renderQuestions = (questions: Array<QuestionModel>) => {
        return questions.map((question, index) => <Question key={index} question={question} />);
    }
    return (
        <div className={styles.all_questions}>
            <div className={styles.all_questions_container}>
                <AnchorPixel className={styles.all_questions__pixel} id="general" />
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.all_questions__heading}>
                        Общие вопросы
                    </Heading>
                </SecondaryHeading>
                <ul className={styles.all_questions__list}>
                    { renderQuestions(generalQuestions) }
                </ul>
            </div>
            <div className={styles.all_questions_container}>
                <AnchorPixel className={styles.all_questions__pixel} id="projects" />
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.all_questions__heading}>
                        Проектное финансирование
                    </Heading>
                </SecondaryHeading>
                <ul className={styles.all_questions__list}>
                    { renderQuestions(projectQuestions) }
                </ul>
            </div>
            <div className={styles.all_questions_container}>
                <AnchorPixel className={styles.all_questions__pixel} id="loans" />
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.all_questions__heading}>
                        Заём с фиксированной ставкой
                    </Heading>
                </SecondaryHeading>
                <ul className={styles.all_questions__list}>
                    { renderQuestions(loanQuestions) }
                </ul>
            </div>
            <div className={styles.all_questions_container}>
                <AnchorPixel className={styles.all_questions__pixel} id="investors" />
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.all_questions__heading}>
                        Инвесторам
                    </Heading>
                </SecondaryHeading>
                <ul className={styles.all_questions__list}>
                    { renderQuestions(investorQuestions) }
                </ul>
            </div>
            <div className={styles.all_questions_container}>
                <AnchorPixel className={styles.all_questions__pixel} id="borrowers" />
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.all_questions__heading}>
                        Заёмщикам
                    </Heading>
                </SecondaryHeading>
                <ul className={styles.all_questions__list}>
                    { renderQuestions(borrowerQuestions) }
                </ul>
            </div>
        </div>
    );
}

export default AllQuestions;
