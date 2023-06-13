import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import styles from "./QuestionsSection.module.scss";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import {Container} from "@/src/shared/ui/layout";
import InfoBlock from "@/src/shared/ui/blocks/InfoBlock";
import telegramImage from "@/public/images/landing/contacts/telegram-image.png";
import mailImage from "@/public/images/landing/contacts/email-image.png";
import supportsImage from "@/public/images/landing/contacts/support-image.png";
import ExternalLink from "@/src/shared/ui/links/ExternalLink";
import ArrowRight from "@/src/shared/ui/svg/arrows/ArrowRight";
import GreenText from "@/src/shared/ui/typography/GreenText";
import {ProjectImage} from "@/src/shared/ui/images";
import {cn} from "@/src/shared/utils";

const QuestionsSection = () => {
    return (
        <CommonBlock as="section" className={styles.questions_section}>
            <Container>
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.questions_section__heading}>
                        <p>У меня <GreenText><span>есть вопрос.</span></GreenText></p>
                        <p>Как с вами связаться?</p>
                    </Heading>
                </SecondaryHeading>
                <div className={styles.questions_section__grid}>
                    <InfoBlock className={cn(
                        styles.questions_section__block,
                        styles.questions_section__main_block
                    )}>
                        <header className={styles.questions_section__block_header}>
                            Телеграм-канал для инвесторов
                        </header>
                        <ProjectImage src={telegramImage} alt="Telegram Image" className={styles.questions_section__telegram} />
                        <footer className={styles.questions_section__block_footer}>
                            <p className={styles.questions_section__multiline_text}>
                                <span>Если хотите быть в курсе</span>
                                <span>новостей и проектов компании</span>
                            </p>
                            <ExternalLink href="https://youtube.com" className={styles.questions_section__link}>
                                <span>@lendly</span>
                                <ArrowRight fill="#05B768" />
                            </ExternalLink>
                        </footer>
                    </InfoBlock>
                    <InfoBlock className={styles.questions_section__block}>
                        <header className={styles.questions_section__block_header}>
                            Почта для заёмщиков и управляющих проектами
                        </header>
                        <ProjectImage src={mailImage} alt="Email image" className={styles.questions_section__mail} />
                        <footer className={styles.questions_section__block_footer}>
                            <p>Если хотите обсудить условия</p>
                            <ExternalLink href="https://youtube.com" className={styles.questions_section__link}>
                                <span>agent@lendly.ru</span>
                                <ArrowRight fill="#05B768" />
                            </ExternalLink>
                        </footer>
                    </InfoBlock>
                    <InfoBlock className={styles.questions_section__block}>
                        <header className={styles.questions_section__block_header}>
                            Служба поддержки
                        </header>
                        <ProjectImage src={supportsImage} alt="Support Image" className={styles.questions_section__support} />
                        <footer className={styles.questions_section__block_footer}>
                            <p>Если у вас проблемы с личным кабинетом</p>
                            <ExternalLink href="https://youtube.com" className={styles.questions_section__link}>
                                <span>@lendly</span>
                                <ArrowRight fill="#05B768" />
                            </ExternalLink>
                        </footer>
                    </InfoBlock>
                </div>
            </Container>
        </CommonBlock>
    );
}

export default QuestionsSection;
