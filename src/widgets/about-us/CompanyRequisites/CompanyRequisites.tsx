import styles from "./CompanyRequisites.module.scss";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import RoundProgressBar from "@/src/shared/ui/utils/RoundProgressBar";
import AnchorPixel from "@/src/shared/ui/utils/AnchorPixel";

const CompanyRequisites = () => {
    return (
        <div className={styles.company_requisites}>
            <div className={styles.company_requisites__block}>
                <Heading headingType={HEADING_TYPE.H2} className={styles.company_requisites__mobile_heading}>
                    Реквизиты компании
                </Heading>
                <AnchorPixel id="requisites" />
                <Heading headingType={HEADING_TYPE.H3} className={styles.company_requisites__heading}>
                    Раскрытие информации
                </Heading>
                <div className={styles.company_requisites__table}>
                    <div className={styles.company_requisites__cell}>
                        <div className={styles.company_requisites__label}>
                            Полное наименование
                        </div>
                        <div className={styles.company_requisites__value}>
                            Общество с ограниченной ответственностью «Лендли»
                        </div>
                    </div>
                    <div className={styles.company_requisites__cell}>
                        <div className={styles.company_requisites__label}>
                            Сокращенное наименование
                        </div>
                        <div className={styles.company_requisites__value}>
                            ООО «Лендли»
                        </div>
                    </div>
                    <div className={styles.company_requisites__cell}>
                        <div className={styles.company_requisites__label}>
                            ИНН
                        </div>
                        <div className={styles.company_requisites__value}>
                            7814733360
                        </div>
                    </div>
                    <div className={styles.company_requisites__cell}>
                        <div className={styles.company_requisites__label}>
                            ОГРН
                        </div>
                        <div className={styles.company_requisites__value}>
                            1187847185140
                        </div>
                    </div>
                    <div className={styles.company_requisites__cell}>
                        <div className={styles.company_requisites__label}>
                            Место нахождения, указанное
                            в ЕГРЮЛ
                        </div>
                        <div className={styles.company_requisites__value}>
                            197342, город Санкт-Петербург, наб. Чёрной речки, д. 47 стр. 2,
                            помещение  1-н ч. 34
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.company_requisites__block}>
                <Heading headingType={HEADING_TYPE.H2} className={styles.company_requisites__mobile_heading}>
                    Состав учредителей
                </Heading>
                <AnchorPixel id="founders" />
                <Heading headingType={HEADING_TYPE.H3} className={styles.company_requisites__heading}>
                    Сведения о составе органов управления
                </Heading>
                <div className={styles.company_requisites__table}>
                    <div className={styles.company_requisites__cell}>
                        <div className={styles.company_requisites__label}>
                            Генеральный директор
                        </div>
                        <div className={styles.company_requisites__value}>
                            Градинар Екатерина Викторовна
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.company_requisites__block}>
                <Heading headingType={HEADING_TYPE.H3} className={styles.company_requisites__heading}>
                    Сведения о составе учредителей
                </Heading>
                <div className={styles.company_requisites__progress_table}>
                    <div className={styles.company_requisites__progress_cell}>
                        <div className={styles.company_requisites__label}>
                            Волгин Александр Валерьевич
                        </div>
                        <RoundProgressBar percentage={80} />
                    </div>
                    <div className={styles.company_requisites__progress_cell}>
                        <div className={styles.company_requisites__label}>
                            Зубков Александр Эдуардович
                        </div>
                        <RoundProgressBar percentage={15} />
                    </div>
                    <div className={styles.company_requisites__progress_cell}>
                        <div className={styles.company_requisites__label}>
                            Змановский Владислав
                        </div>
                        <RoundProgressBar percentage={5} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyRequisites;
