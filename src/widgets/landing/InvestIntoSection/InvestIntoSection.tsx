import {Container} from "@/src/shared/ui/layout";
import styles from "./InvestIntoSection.module.scss";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";

const InvestIntoSection = () => {
    return (
        <section className={styles.invest_into_section}>
            <Container>
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2}>
                        <p>Хочу <span className={styles.invest_into_section__green_text}>инвестировать.</span></p>
                        <p>Какие варианты?</p>
                    </Heading>
                </SecondaryHeading>
            </Container>
        </section>
    );
}

export default InvestIntoSection;
