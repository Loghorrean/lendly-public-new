import styles from "./DifferencesSlider.module.scss";
import TertiaryHeading from "@/src/shared/ui/typography/Heading/decorators/TertiaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import GreenText from "@/src/shared/ui/typography/GreenText";
import {Money} from "@/src/shared/ui/utils";

const DifferencesSlider = () => {
    return (
        <div className={styles.differences_slider}>
            <div className={styles.differences_slider__card}>
                <TertiaryHeading>
                    <Heading headingType={HEADING_TYPE.H3} className={styles.differences_slider__card_heading}>
                        <GreenText><span>Первичный</span></GreenText>&nbsp;рынок
                    </Heading>
                </TertiaryHeading>
                <ul>
                    <li className={styles.differences_slider__card_row}>
                        <div className={styles.differences_slider__card_label}>
                            Кто может инвестировать?
                        </div>
                        <p>Юридические лица, ИП и квалифицированные инвесторы</p>
                    </li>
                    <li className={styles.differences_slider__card_row}>
                        <div className={styles.differences_slider__card_label}>
                            Минимальная инвестиция
                        </div>
                        <p><Money money={{amount: 30000000, currencyCode: "RUB"}} /></p>
                    </li>
                    <li className={styles.differences_slider__card_row}>
                        <div className={styles.differences_slider__card_label}>
                            ЭЦП и нотариальная доверенность
                        </div>
                        <p>Нужны, чтобы платформа управляла залогом от лица инвесторов</p>
                    </li>
                    <li className={styles.differences_slider__card_row}>
                        <div className={styles.differences_slider__card_label}>
                            Как платить НДФЛ
                        </div>
                        <p>Заёмщик удерживает сам</p>
                    </li>
                </ul>
            </div>
            <div className={styles.differences_slider__card}>
                <TertiaryHeading>
                    <Heading headingType={HEADING_TYPE.H3} className={styles.differences_slider__card_heading}>
                        <GreenText><span>Вторичный</span></GreenText>&nbsp;рынок
                    </Heading>
                </TertiaryHeading>
                <ul>
                    <li className={styles.differences_slider__card_row}>
                        <div className={styles.differences_slider__card_label}>
                            Кто может инвестировать?
                        </div>
                        <p>Все</p>
                    </li>
                    <li className={styles.differences_slider__card_row}>
                        <div className={styles.differences_slider__card_label}>
                            Минимальная инвестиция
                        </div>
                        <p><Money money={{amount: 1000000, currencyCode: "RUB"}} /></p>
                    </li>
                    <li className={styles.differences_slider__card_row}>
                        <div className={styles.differences_slider__card_label}>
                            ЭЦП и нотариальная доверенность
                        </div>
                        <p>Не нужны</p>
                    </li>
                    <li className={styles.differences_slider__card_row}>
                        <div className={styles.differences_slider__card_label}>
                            Как платить НДФЛ
                        </div>
                        <p>Lendly передаёт сведения о доходах физлица в налоговую, инвестор оплачивает налог сам</p>
                    </li>
                </ul>
            </div>
            <div className={styles.differences_slider__card}>
                <TertiaryHeading>
                    <Heading headingType={HEADING_TYPE.H3} className={styles.differences_slider__card_heading}>
                        Вторичный рынок&nbsp;<GreenText><span>с байбэком</span></GreenText>
                    </Heading>
                </TertiaryHeading>
                <ul>
                    <li className={styles.differences_slider__card_row}>
                        <div className={styles.differences_slider__card_label}>
                            Кто может инвестировать?
                        </div>
                        <p>Все</p>
                    </li>
                    <li className={styles.differences_slider__card_row}>
                        <div className={styles.differences_slider__card_label}>
                            Минимальная инвестиция
                        </div>
                        <p><Money money={{amount: 1000000, currencyCode: "RUB"}} /></p>
                    </li>
                    <li className={styles.differences_slider__card_row}>
                        <div className={styles.differences_slider__card_label}>
                            ЭЦП и нотариальная доверенность
                        </div>
                        <p>Не нужны</p>
                    </li>
                    <li className={styles.differences_slider__card_row}>
                        <div className={styles.differences_slider__card_label}>
                            Как платить НДФЛ
                        </div>
                        <p>Lendly передаёт сведения о доходах физлица в налоговую, инвестор оплачивает налог сам</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DifferencesSlider;
