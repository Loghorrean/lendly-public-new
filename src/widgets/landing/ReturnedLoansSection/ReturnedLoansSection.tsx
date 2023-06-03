import {Container} from "@/src/shared/ui/layout";
import styles from "./ReturnedLoansSection.module.scss";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";

const ReturnedLoansSection = () => {
    return (
        <section className={styles.returned_loans_section}>
            <Container>
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2}>
                        Эти займы&nbsp;<span className={styles.returned_loans_section__green_text}>уже вернули</span>
                    </Heading>
                </SecondaryHeading>
            </Container>
        </section>
    );
}

export default ReturnedLoansSection;
