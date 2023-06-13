import React from "react";
import styles from "./Question.module.scss";
import {cn, resultIf, useToggle} from "@/src/shared/utils";

export type Question = {
    title: string;
    content: string;
}

type Props = {
    question: Question;
}

const Question = ({ question }: Props) => {
    const [active, toggle] = useToggle();
    return (
        <li className={cn(styles.question, resultIf(active, styles.question___active))}>
            <header className={styles.question__header}>
                <button
                    aria-expanded={active}
                    onClick={toggle}
                    className={styles.question__button}
                >
                    <div className={styles.question__title}>
                        { question.title }
                    </div>
                    <span className={styles.question__icon}>

                    </span>
                </button>
            </header>
            <div className={styles.question__content}>
                <div dangerouslySetInnerHTML={{ __html: question.content }} className={styles.question__content_inner}></div>
            </div>
        </li>
    );
}

export default React.memo(Question);
