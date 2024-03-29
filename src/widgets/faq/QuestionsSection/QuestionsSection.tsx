"use client";

import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import styles from "./QuestionsSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import QuestionThemesList from "@/src/widgets/faq/QuestionThemesList";
import AllQuestions from "@/src/widgets/faq/AllQuestions";

type Props = {
    search: string;
}

const QuestionsSection = ({ search }: Props) => {
    return (
        <CommonBlock as="section" className={styles.questions_section}>
            <Container>
                <div className={styles.questions_section__container}>
                    <QuestionThemesList />
                    <AllQuestions search={search} />
                </div>
            </Container>
        </CommonBlock>
    );
}

export default QuestionsSection;
