import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import styles from "./QuestionsSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import GreenText from "@/src/shared/ui/typography/GreenText";
import {cn} from "@/src/shared/utils";
import ExternalLink from "@/src/shared/ui/links/ExternalLink";
import ArrowRight from "@/src/shared/ui/svg/arrows/ArrowRight";

const QuestionsSection = () => {
    return (
        <CommonBlock as="section" className={styles.questions_section}>
            <Container>
                <div className={styles.questions_section__container}>
                    <SecondaryHeading>
                        <Heading headingType={HEADING_TYPE.H2}>
                            У меня <GreenText><span>есть вопрос.</span></GreenText> Как с вами связаться?
                        </Heading>
                    </SecondaryHeading>
                    <div className={cn(styles.questions_section__card, styles.questions_section__card___first)}>
                        <header className={styles.questions_section__card_heading}>
                            Телеграм-канал для инвесторов
                        </header>
                        <footer className={cn(
                            styles.questions_section__card__footer,
                            styles.questions_section__card__footer___small
                        )}>
                            <p className={styles.questions_section__card_text}>
                                Если хотите быть в курсе последних
                                новостей и проектов компании
                            </p>
                            <ExternalLink className={styles.questions_section__card_link} href="https://youtube.com">
                                @lendly <ArrowRight fill="#05B768" />
                            </ExternalLink>
                        </footer>
                    </div>
                    <div className={cn(styles.questions_section__card, styles.questions_section__card___second)}>
                        <header className={styles.questions_section__card_heading}>
                            Служба поддержки
                        </header>
                        <footer className={styles.questions_section__card__footer}>
                            <p className={styles.questions_section__card_text}>
                                Если у вас проблемы с личным кабинетом
                            </p>
                            <ExternalLink className={styles.questions_section__card_link} href="https://youtube.com">
                                @lendly <ArrowRight fill="#05B768" />
                            </ExternalLink>
                        </footer>
                    </div>
                </div>
            </Container>
        </CommonBlock>
    );
}

export default QuestionsSection;
