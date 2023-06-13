import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import {Container} from "@/src/shared/ui/layout";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import styles from "./LoanTermsSection.module.scss";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import InfoBlock from "@/src/shared/ui/blocks/InfoBlock";
import {ProjectImage} from "@/src/shared/ui/images";
import RubleSvg from "@/src/shared/ui/svg/currency/RubleSvg";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import {ProjectLink} from "@/src/shared/ui/links";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";
import GreenText from "@/src/shared/ui/typography/GreenText";
import MoneyImage from "@/src/shared/ui/images/content/MoneyImage";
import ChartImage from "@/src/shared/ui/images/content/ChartImage";
import WalletImage from "@/src/shared/ui/images/content/WalletImage";
import {cn} from "@/src/shared/utils";

const LoanTermsSection = () => {
    return (
        <CommonBlock as="section" className={styles.loan_terms_section}>
            <Container>
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.loan_terms_section__heading}>
                        <p>Хочу <GreenText><span>получить заём.</span></GreenText></p>
                        <p>Какие условия?</p>
                    </Heading>
                </SecondaryHeading>
            </Container>
            <Container needsDisabling>
                <div className={styles.loan_terms_section__grid}>
                    <InfoBlock className={cn(styles.loan_terms_section__block, styles.loan_terms_section__main_block)}>
                        <header className={styles.loan_terms_section__block_header}>
                            Сумма займа
                        </header>
                        <MoneyImage />
                        <footer className={styles.loan_terms_section__block_footer}>
                            До 50 млн.<RubleSvg />
                        </footer>
                    </InfoBlock>
                    <InfoBlock className={styles.loan_terms_section__block}>
                        <header className={styles.loan_terms_section__block_header}>
                            Процентная ставка
                        </header>
                        <ChartImage />
                        <footer className={styles.loan_terms_section__block_footer}>
                            От 18 %
                        </footer>
                    </InfoBlock>
                    <InfoBlock className={styles.loan_terms_section__block}>
                        <header className={styles.loan_terms_section__block_header}>
                            Залог
                        </header>
                        <WalletImage />
                        <footer className={styles.loan_terms_section__block_footer}>
                            Недвижимость
                        </footer>
                    </InfoBlock>
                </div>
            </Container>
            <Container>
                <PrimaryButton arrow wide color={PRIMARY_BUTTON_COLOR.GREEN}>
                    <ProjectLink href="/auth/register">
                        Узнать больше
                        <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.WHITE} />
                    </ProjectLink>
                </PrimaryButton>
            </Container>
        </CommonBlock>
    );
}

export default LoanTermsSection;
