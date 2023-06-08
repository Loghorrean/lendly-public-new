import styles from "./LoanRatingSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import GreenText from "@/src/shared/ui/typography/GreenText";

const LoanRatingSection = () => {
    return (
        <section className={styles.loan_rating_section}>
            <Container>
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2}>
                        Чтобы рассчитать ставку займа, мы
                        <GreenText><span>присваиваем заёмщику рейтинг.</span></GreenText> Из
                        чего он складывается?
                    </Heading>
                </SecondaryHeading>
            </Container>
        </section>
    );
}

export default LoanRatingSection;
