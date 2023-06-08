import styles from "./LoanRatingSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import GreenText from "@/src/shared/ui/typography/GreenText";
import {cn} from "@/src/shared/utils";

const LoanRatingSection = () => {
    return (
        <section className={styles.loan_rating_section}>
            <Container>
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.loan_rating_section__heading}>
                        <span>Чтобы рассчитать ставку займа,</span>
                        <span>мы <GreenText><span>присваиваем заёмщику рейтинг.</span></GreenText></span>
                        <span>Из чего он складывается?</span>
                    </Heading>
                </SecondaryHeading>
                <div className={styles.loan_rating_section__cards}>
                    <div className={cn(styles.loan_rating_section__card, styles.loan_rating_section__card___first)}>
                        <header className={styles.loan_rating_section__card_header}>
                            Репутация заёмщика
                        </header>
                        <footer className={styles.loan_rating_section__card_footer}>
                            Учитываем опыт управления бизнесом, платёжеспособность
                            и финансовую устойчивость.
                        </footer>
                    </div>
                    <div className={cn(styles.loan_rating_section__card, styles.loan_rating_section__card___second)}>
                        <header className={styles.loan_rating_section__card_header}>
                            Залог
                        </header>
                        <footer className={styles.loan_rating_section__card_footer}>
                            Оцениваем стоимость, состояние объекта
                            и юридические риски.
                        </footer>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default LoanRatingSection;
