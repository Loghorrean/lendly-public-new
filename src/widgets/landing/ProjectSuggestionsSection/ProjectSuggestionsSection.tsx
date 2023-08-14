import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import styles from "./ProjectSuggestionsSection.module.scss";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import InfoBlock from "@/src/shared/ui/blocks/InfoBlock";
import RubleSvg from "@/src/shared/ui/svg/currency/RubleSvg";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import {ProjectLink} from "@/src/shared/ui/links";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";
import {Container} from "@/src/shared/ui/layout";
import GreenText from "@/src/shared/ui/typography/GreenText";
import HouseImage from "@/src/shared/ui/images/content/HouseImage";
import MoneyImage from "@/src/shared/ui/images/content/MoneyImage";
import PortfolioImage from "@/src/shared/ui/images/content/PortfolioImage";
import ClockImage from "@/src/shared/ui/images/content/ClockImage";
import GearsImage from "@/src/shared/ui/images/content/GearsImage";
import {cn} from "@/src/shared/utils";

const ProjectSuggestionsSection = () => {
    return (
        <CommonBlock as="section" className={styles.project_suggestions_section}>
            <Container>
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.project_suggestions_section__heading}>
                        <p>Хочу <GreenText><span>предложить проект.</span></GreenText></p>
                        <p>Какие требования?</p>
                    </Heading>
                </SecondaryHeading>
            </Container>
            <Container needsDisabling>
                <div className={styles.project_suggestions_section__grid}>
                    <InfoBlock className={styles.project_suggestions_section__block}>
                        <header className={styles.project_suggestions_section__block_header}>
                            Проект
                        </header>
                        <HouseImage />
                        <footer className={styles.project_suggestions_section__block_footer}>
                            Строительство или реконструкция недвижимости
                        </footer>
                    </InfoBlock>
                    <InfoBlock className={styles.project_suggestions_section__block}>
                        <header className={styles.project_suggestions_section__block_header}>
                            Стоимость проекта
                        </header>
                        <MoneyImage />
                        <footer className={styles.project_suggestions_section__block_footer}>
                            20-300 млн.<RubleSvg />
                        </footer>
                    </InfoBlock>
                    <InfoBlock className={cn(
                        styles.project_suggestions_section__main_block,
                        styles.project_suggestions_section__block
                    )}>
                        <header className={styles.project_suggestions_section__block_header}>
                            Количество завершенных проектов
                        </header>
                        <PortfolioImage />
                        <footer className={styles.project_suggestions_section__block_footer}>
                            Не меньше трех
                        </footer>
                    </InfoBlock>
                    <InfoBlock className={styles.project_suggestions_section__block}>
                        <header className={styles.project_suggestions_section__block_header}>
                            Сроки реализации
                        </header>
                        <ClockImage />
                        <footer className={styles.project_suggestions_section__block_footer}>
                            До 2 лет
                        </footer>
                    </InfoBlock>
                    <InfoBlock className={styles.project_suggestions_section__block}>
                        <header className={styles.project_suggestions_section__block_header}>
                            Опыт реализации аналогичных проектов
                        </header>
                        <GearsImage />
                        <footer className={styles.project_suggestions_section__block_footer}>
                            От 3 лет
                        </footer>
                    </InfoBlock>
                </div>
            </Container>
            <Container>
                <PrimaryButton arrow wide color={PRIMARY_BUTTON_COLOR.GREEN}>
                    <ProjectLink href="/auth/register-borrower">
                        Предложить проект
                        <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.WHITE} />
                    </ProjectLink>
                </PrimaryButton>
            </Container>
        </CommonBlock>
    );
}

export default ProjectSuggestionsSection;
