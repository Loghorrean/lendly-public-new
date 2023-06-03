import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import {Container} from "@/src/shared/ui/layout";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import styles from "./LoanTermsSection.module.scss";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import InfoBlock from "@/src/shared/ui/blocks/InfoBlock";
import {ProjectImage} from "@/src/shared/ui/images";
import walletImage from "@/public/images/landing/wallet-image.png";
import gearsImage from "@/public/images/landing/gears-image.png";
import macbookImage from "@/public/images/landing/macbook-image.png";
import RubleSvg from "@/src/shared/ui/svg/currency/RubleSvg";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import {ProjectLink} from "@/src/shared/ui/links";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";

const LoanTermsSection = () => {
    return (
        <CommonBlock as="section" className={styles.loan_terms_section}>
            <Container>
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.loan_terms_section__heading}>
                        <p>Хочу <span className={styles.loan_terms_section__green_text}>получить заём.</span></p>
                        <p>Какие условия?</p>
                    </Heading>
                </SecondaryHeading>
                <div className={styles.loan_terms_section__grid}>
                    <InfoBlock className={styles.loan_terms_section__main_block}>
                        <header className={styles.loan_terms_section__block_header}>
                            Сумма займа
                        </header>
                        <ProjectImage src={walletImage} alt="Wallet image" />
                        <footer className={styles.loan_terms_section__block_footer}>
                            До 50 млн.<RubleSvg />
                        </footer>
                    </InfoBlock>
                    <InfoBlock>
                        <header className={styles.loan_terms_section__block_header}>
                            Процентная ставка
                        </header>
                        <ProjectImage src={gearsImage} alt="Gears image" />
                        <footer className={styles.loan_terms_section__block_footer}>
                            От 18 %
                        </footer>
                    </InfoBlock>
                    <InfoBlock>
                        <header className={styles.loan_terms_section__block_header}>
                            Залог
                        </header>
                        <ProjectImage src={macbookImage} alt="Gears image" />
                        <footer className={styles.loan_terms_section__block_footer}>
                            Недвижимость
                        </footer>
                    </InfoBlock>
                </div>
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
