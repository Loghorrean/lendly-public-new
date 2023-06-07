import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import styles from "./WhyInvestSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import GreenText from "@/src/shared/ui/typography/GreenText";
import GetDownIcon from "@/src/shared/ui/svg/for-investors/GetDownIcon";
import ScreenIcon from "@/src/shared/ui/svg/for-investors/ScreenIcon";
import MagnifierIcon from "@/src/shared/ui/svg/for-investors/MagnifierIcon";
import ForInvestorsThirdIcon from "@/src/shared/ui/svg/for-investors/ForInvestorsThirdIcon";

const WhyInvestSection = () => {
    return (
        <CommonBlock as="section" className={styles.why_invest_section}>
            <Container>
                <div className={styles.why_invest_section__container}>
                    <div className={styles.why_invest_section__heading_container}>
                        <SecondaryHeading>
                            <Heading headingType={HEADING_TYPE.H2} className={styles.why_invest_section__heading}>
                                <span>Инвестировать</span>
                                <GreenText>
                            <span>
                                с Lendly безопасно.
                            </span>
                                </GreenText>
                                <span>Почему?</span>
                            </Heading>
                        </SecondaryHeading>
                    </div>
                    <ul>
                        <li className={styles.why_invest_section__block}>
                            <div className={styles.why_invest_section__block_icon}>
                                <GetDownIcon />
                            </div>
                            <Heading headingType={HEADING_TYPE.H3} className={styles.why_invest_section__block_heading}>
                                Ваши деньги хранятся на номинальном счёте
                            </Heading>
                            <p className={styles.why_invest_section__block_text}>
                                Сам счёт принадлежит Lendly, а деньги на нём — только вам. Мы можем совершать
                                всего 5 операций: списывать сумму инвестиции, выдавать заём, получать платежи
                                от заёмщика, переводить инвестору его часть и удерживать свою комиссию.
                                И больше ничего. Банк следит за всеми транзакциями.
                            </p>
                        </li>
                        <li className={styles.why_invest_section__block}>
                            <div className={styles.why_invest_section__block_icon}>
                                <ScreenIcon />
                            </div>
                            <Heading headingType={HEADING_TYPE.H3} className={styles.why_invest_section__block_heading}>
                                Под капотом платформы —
                                надёжное ПО
                            </Heading>
                            <p className={styles.why_invest_section__block_text}>
                                С биллингом данных — чтобы сверять допустимость действий со множеством
                                регистров и исключать ошибки. С микросервисной инфраструктурой — чтобы
                                невозможно было исказить или потерять сведения о сделках. И двойным
                                шифрованием — чтобы данные инвесторов были в безопасности
                            </p>
                        </li>
                        <li className={styles.why_invest_section__block}>
                            <div className={styles.why_invest_section__block_icon}>
                                <MagnifierIcon />
                            </div>
                            <Heading headingType={HEADING_TYPE.H3} className={styles.why_invest_section__block_heading}>
                                Управляющие проектами и заёмщики проходят проверку
                            </Heading>
                            <p className={styles.why_invest_section__block_text}>
                                Мы следим, чтобы у каждого из них был релевантный опыт и хорошая
                                деловая репутация. А ещё сами делаем расчёты по доходности для
                                проектов. А в случае с займами — оцениваем залог: его
                                реальную стоимость, состояние и юридические риски.
                            </p>
                        </li>
                        <li className={styles.why_invest_section__block}>
                            <div className={styles.why_invest_section__block_icon}>
                                <ForInvestorsThirdIcon />
                            </div>
                            <Heading headingType={HEADING_TYPE.H3} className={styles.why_invest_section__block_heading}>
                                Если заёмщик не платит, <GreenText><span>берём на себя взыскания</span></GreenText>
                            </Heading>
                            <p className={styles.why_invest_section__block_text}>
                                Комиссию в 20% удерживаем только от взысканных процентов и пеней. Тело инвестиции
                                вернётся в любом случае. А если это заём на вторичном рынке с
                                байбэком — сразу выкупим инвестицию вместе с процентами.
                            </p>
                        </li>
                    </ul>
                </div>
            </Container>
        </CommonBlock>
    );
}

export default WhyInvestSection;
