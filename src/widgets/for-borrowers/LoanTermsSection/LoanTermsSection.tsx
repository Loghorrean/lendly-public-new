import styles from "./LoanTermsSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import {Button} from "@/src/shared/ui/buttons";
import ArrowLeft from "@/src/shared/ui/svg/arrows/ArrowLeft";
import ArrowRight from "@/src/shared/ui/svg/arrows/ArrowRight";

const LoanTermsSection = () => {
    return (
        <section className={styles.loan_terms_section}>
            <Container>
                <header className={styles.loan_terms_section__header}>
                    <SecondaryHeading>
                        <Heading headingType={HEADING_TYPE.H2}>
                            Какие условия для займа?
                        </Heading>
                    </SecondaryHeading>
                    <div className={styles.loan_terms_section__buttons}>
                        <Button className={styles.loan_terms_section__button}>
                            <ArrowLeft />
                        </Button>
                        <Button className={styles.loan_terms_section__button}>
                            <ArrowRight />
                        </Button>
                    </div>
                </header>
            </Container>
        </section>
    );
}

export default LoanTermsSection;
