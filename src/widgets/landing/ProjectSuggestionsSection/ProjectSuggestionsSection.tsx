import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import styles from "./ProjectSuggestionsSection.module.scss";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import InfoBlock from "@/src/shared/ui/blocks/InfoBlock";
import {ProjectImage} from "@/src/shared/ui/images";
import walletImage from "@/public/images/landing/wallet-image.png";
import RubleSvg from "@/src/shared/ui/svg/currency/RubleSvg";
import gearsImage from "@/public/images/landing/gears-image.png";
import macbookImage from "@/public/images/landing/macbook-image.png";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import {ProjectLink} from "@/src/shared/ui/links";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";
import {Container} from "@/src/shared/ui/layout";

const ProjectSuggestionsSection = () => {
    return (
        <CommonBlock as="section" className={styles.project_suggestions_section}>
            <Container>
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.project_suggestions_section__heading}>
                        <p>Хочу <span className={styles.project_suggestions_section__green_text}>предложить проект.</span></p>
                        <p>Какие требования?</p>
                    </Heading>
                </SecondaryHeading>
                <div className={styles.project_suggestions_section__grid}>
                    <InfoBlock>
                        <header className={styles.project_suggestions_section__block_header}>
                            Проект
                        </header>
                        <ProjectImage src={walletImage} alt="Wallet image" />
                        <footer className={styles.project_suggestions_section__block_footer}>
                            Строительство или реконструкция недвижимости
                        </footer>
                    </InfoBlock>
                    <InfoBlock>
                        <header className={styles.project_suggestions_section__block_header}>
                            Стоимость проекта
                        </header>
                        <ProjectImage src={gearsImage} alt="Gears image" />
                        <footer className={styles.project_suggestions_section__block_footer}>
                            20-300 млн.<RubleSvg />
                        </footer>
                    </InfoBlock>
                    <InfoBlock className={styles.project_suggestions_section__main_block}>
                        <header className={styles.project_suggestions_section__block_header}>
                            Количество завершенных проектов
                        </header>
                        <ProjectImage src={macbookImage} alt="Computer image" />
                        <footer className={styles.project_suggestions_section__block_footer}>
                            Не меньше трех
                        </footer>
                    </InfoBlock>
                    <InfoBlock>
                        <header className={styles.project_suggestions_section__block_header}>
                            Сроки реализации
                        </header>
                        <ProjectImage src={walletImage} alt="Wallet image" />
                        <footer className={styles.project_suggestions_section__block_footer}>
                            До 2 лет
                        </footer>
                    </InfoBlock>
                    <InfoBlock>
                        <header className={styles.project_suggestions_section__block_header}>
                            Опыт реализации аналогичных проектов
                        </header>
                        <ProjectImage src={gearsImage} alt="Gears image" />
                        <footer className={styles.project_suggestions_section__block_footer}>
                            От 3 лет
                        </footer>
                    </InfoBlock>
                </div>
                <PrimaryButton arrow wide color={PRIMARY_BUTTON_COLOR.GREEN}>
                    <ProjectLink href="/auth/register">
                        Предложить проект
                        <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.WHITE} />
                    </ProjectLink>
                </PrimaryButton>
            </Container>
        </CommonBlock>
    );
}

export default ProjectSuggestionsSection;
