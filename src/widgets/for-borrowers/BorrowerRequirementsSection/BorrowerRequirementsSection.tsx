import {Container} from "@/src/shared/ui/layout";
import styles from "./BorrowerRequirementsSection.module.scss";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import GreenText from "@/src/shared/ui/typography/GreenText";
import CaseIcon from "@/src/shared/ui/svg/for-borrowers/CaseIcon";
import StarIcon from "@/src/shared/ui/svg/for-borrowers/StarIcon";
import ClockIcon from "@/src/shared/ui/svg/for-borrowers/ClockIcon";
import FolderIcon from "@/src/shared/ui/svg/for-borrowers/FolderIcon";

const BorrowerRequirementsSection = () => {
    return (
        <section className={styles.borrower_requirements_section}>
            <Container>
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.borrower_requirements_section__heading}>
                        Какие есть <GreenText><span>требования</span></GreenText> к заёмщику?
                    </Heading>
                </SecondaryHeading>
            </Container>
            <Container needsDisabling>
                <div className={styles.borrower_requirements_section__cards}>
                    <div className={styles.borrower_requirements_section__block}>
                        <CaseIcon />
                        <footer className={styles.borrower_requirements_section__text}>
                            Заёмщик — юрлицо или ИП
                        </footer>
                    </div>
                    <div className={styles.borrower_requirements_section__block}>
                        <StarIcon />
                        <footer className={styles.borrower_requirements_section__text}>
                            Нет ограничений по счёту
                        </footer>
                    </div>
                    <div className={styles.borrower_requirements_section__block}>
                        <ClockIcon />
                        <footer className={styles.borrower_requirements_section__text}>
                            Финансовое состояние позволяет вовремя платить по займу
                        </footer>
                    </div>
                    <div className={styles.borrower_requirements_section__block}>
                        <FolderIcon />
                        <footer className={styles.borrower_requirements_section__text}>
                            Не банкрот
                        </footer>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default BorrowerRequirementsSection;
