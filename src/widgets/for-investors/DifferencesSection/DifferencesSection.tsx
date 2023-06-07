import {Container} from "@/src/shared/ui/layout";
import styles from "./DifferencesSection.module.scss";
import TertiaryHeading from "@/src/shared/ui/typography/Heading/decorators/TertiaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import GreenText from "@/src/shared/ui/typography/GreenText";
import DifferencesCard from "@/src/widgets/for-investors/DifferencesCard";
import {Money} from "@/src/shared/ui/utils";

const DifferencesSection = () => {
    return (
        <section className={styles.differences_section}>
            <Container>
                <div className={styles.differences_section__container}>
                    <header className={styles.differences_section__header}>
                        <TertiaryHeading>
                            <Heading headingType={HEADING_TYPE.H2} className={styles.differences_section__heading}>
                                В чем разница?
                            </Heading>
                        </TertiaryHeading>
                        <div className={styles.differences_section__header_cell}>
                            <div className={styles.differences_section__title}>
                                <GreenText><span>Первичный</span></GreenText> рынок
                            </div>
                            <div className={styles.differences_section__info} style={{ maxWidth: "15rem" }}>
                                Прямые инвестиции
                                в займы и проекты
                            </div>
                        </div>
                        <div className={styles.differences_section__header_cell}>
                            <div className={styles.differences_section__title}>
                                <GreenText><span>Вторичный</span></GreenText> рынок
                            </div>
                            <div className={styles.differences_section__info} style={{ maxWidth: "18.75rem" }}>
                                Когда инвестор продаёт заём или долю в проекте другому инвестору
                            </div>
                        </div>
                        <div className={styles.differences_section__header_cell}>
                            <div className={styles.differences_section__title}>
                                Вторичный рынок <GreenText><span>с байбэком</span></GreenText>
                            </div>
                            <div className={styles.differences_section__info} style={{ maxWidth: "20.375rem" }}>
                                Если заёмщик не платит — инвестор, который продал заём, обязан откупить его
                            </div>
                        </div>
                    </header>
                    <DifferencesCard heading="Кто может инвестировать">
                        <div>
                            Юридические лица, ИП и квалифицированные инвесторы
                        </div>
                        <div>
                            Все
                        </div>
                        <div>
                            Все
                        </div>
                    </DifferencesCard>
                    <DifferencesCard heading="Минимальная инвестиция">
                        <div>
                            <Money money={{ amount: 30000000, currencyCode: "RUB" }} />
                        </div>
                        <div>
                            <Money money={{ amount: 1000000, currencyCode: "RUB" }} />
                        </div>
                        <div>
                            <Money money={{ amount: 1000000, currencyCode: "RUB" }} />
                        </div>
                    </DifferencesCard>
                    <DifferencesCard heading="ЭЦП и нотариальная доверенность">
                        <div>
                            Нужны, чтобы платформа управляла залогом от лица инвесторов
                        </div>
                        <div>
                            Не нужны
                        </div>
                        <div>
                            Не нужны
                        </div>
                    </DifferencesCard>
                    <DifferencesCard heading="Как платить НДФЛ">
                        <div>
                            Заёмщик удерживает сам
                        </div>
                        <div>
                            Lendly передаёт сведения о доходах физлица в налоговую, инвестор оплачивает налог сам
                        </div>
                        <div>
                            Lendly передаёт сведения о доходах физлица в налоговую, инвестор оплачивает налог сам
                        </div>
                    </DifferencesCard>
                </div>
            </Container>
        </section>
    );
}

export default DifferencesSection;
