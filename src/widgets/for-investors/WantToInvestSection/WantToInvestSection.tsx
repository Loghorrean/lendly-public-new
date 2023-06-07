import styles from "./WantToInvestSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import ForInvestorsFirstIcon from "@/src/shared/ui/svg/for-investors/ForInvestorsFirstIcon";
import GreenText from "@/src/shared/ui/typography/GreenText";
import ForInvestorsSecondIcon from "@/src/shared/ui/svg/for-investors/ForInvestorsSecondIcon";
import CursorIcon from "@/src/shared/ui/svg/for-investors/CursorIcon";

const WantToInvestSection = () => {
    return (
        <section className={styles.want_to_invest_section}>
            <Container>
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.want_to_invest_section__heading}>
                        Хочу стать инвестором Lendly. Как?
                    </Heading>
                </SecondaryHeading>
                <ul className={styles.want_to_invest_section__list}>
                    <li className={styles.want_to_invest_section__element}>
                        <ForInvestorsFirstIcon />
                        <footer className={styles.want_to_invest_section__element_footer}>
                            <GreenText><span>01.</span></GreenText>
                            <span>Зарегистрироваться</span>
                        </footer>
                    </li>
                    <li className={styles.want_to_invest_section__element}>
                        <ForInvestorsSecondIcon />
                        <footer className={styles.want_to_invest_section__element_footer}>
                            <GreenText><span>02.</span></GreenText>
                            <span>Пополнить номинальный&nbsp;счёт</span>
                        </footer>
                    </li>
                    <li className={styles.want_to_invest_section__element}>
                        <CursorIcon />
                        <footer className={styles.want_to_invest_section__element_footer}>
                            <GreenText><span>03.</span></GreenText>
                            <span>Проинвестировать</span>
                        </footer>
                    </li>
                </ul>
            </Container>
        </section>
    );
}

export default WantToInvestSection;
