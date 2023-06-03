import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import styles from "./QuestionsSection.module.scss";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import {Container} from "@/src/shared/ui/layout";
import InfoBlock from "@/src/shared/ui/blocks/InfoBlock";
import {ProjectImage} from "@/src/shared/ui/images";
import walletImage from "@/public/images/landing/wallet-image.png";
import gearsImage from "@/public/images/landing/gears-image.png";
import macbookImage from "@/public/images/landing/macbook-image.png";
import ExternalLink from "@/src/shared/ui/links/ExternalLink";
import ArrowRight from "@/src/shared/ui/svg/arrows/ArrowRight";

const QuestionsSection = () => {
    return (
        <CommonBlock as="section" className={styles.questions_section}>
            <Container>
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.questions_section__heading}>
                        <p>У меня <span className={styles.questions_section__green_text}>есть вопрос.</span></p>
                        <p>Как с вами связаться?</p>
                    </Heading>
                </SecondaryHeading>
                <div className={styles.questions_section__grid}>
                    <InfoBlock className={styles.questions_section__main_block}>
                        <header className={styles.questions_section__block_header}>
                            Сумма займа
                        </header>
                        <ProjectImage src={macbookImage} alt="Computer image" />
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
                    <InfoBlock>
                        <header className={styles.questions_section__block_header}>
                            Почта для заёмщиков и управляющих проектами
                        </header>
                        <ProjectImage src={walletImage} alt="Wallet image" className={styles.questions_section__wallet} />
                        <footer className={styles.questions_section__block_footer}>
                            <p>Если хотите обсудить условия</p>
                            <ExternalLink href="https://youtube.com" className={styles.questions_section__link}>
                                <span>agent@lendly.ru</span>
                                <ArrowRight fill="#05B768" />
                            </ExternalLink>
                        </footer>
                    </InfoBlock>
                    <InfoBlock>
                        <header className={styles.questions_section__block_header}>
                            Служба поддержки
                        </header>
                        <ProjectImage src={gearsImage} alt="Gears image" />
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
