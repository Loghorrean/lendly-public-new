import styles from "./WhoCanSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import CaseIcon from "@/src/shared/ui/svg/for-borrowers/CaseIcon";
import ForInvestorsFirstIcon from "@/src/shared/ui/svg/for-investors/ForInvestorsFirstIcon";
import FolderIcon from "@/src/shared/ui/svg/for-borrowers/FolderIcon";

const WhoCanSection = () => {
    return (
        <section className={styles.who_can_section}>
            <Container>
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.who_can_section__heading}>
                        Кто может быть залогодателем?
                    </Heading>
                </SecondaryHeading>
                <div className={styles.who_can_section__cards}>
                    <div className={styles.who_can_section__card}>
                        <CaseIcon black />
                        <footer>
                            Сам Заемщик или любое третье лицо
                        </footer>
                    </div>
                    <div className={styles.who_can_section__card}>
                        <ForInvestorsFirstIcon black />
                        <footer>
                            Физическое лицо в возрасте 18-75 лет
                        </footer>
                    </div>
                    <div className={styles.who_can_section__card}>
                        <FolderIcon black />
                        <footer>
                            Не банкрот, без судебных и исполнительных производств
                        </footer>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default WhoCanSection;
