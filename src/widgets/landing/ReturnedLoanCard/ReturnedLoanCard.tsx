import styles from "./ReturnedLoanCard.module.scss";
import { Money as MoneyModel } from "@/src/shared/models/common";
import {ProjectImage} from "@/src/shared/ui/images";
import ProgressBar from "@/src/shared/ui/utils/ProgressBar";
import Money from "@/src/shared/ui/utils/Money";
import {StaticImageData} from "next/image";

type Props = {
    image: string | StaticImageData;
    investedPercent: number;
    id: string;
    amount: MoneyModel;
    left: MoneyModel;
    rating: string;
    rate: number;
    term: number;
    target: MoneyModel;
}

const ReturnedLoanCard = ({ image, investedPercent, id, amount, left, rating, rate, term, target }: Props) => {
    return (
        <div className={styles.returned_loan_card}>
            <div className={styles.returned_loan_card__container}>
                <div className={styles.returned_loan_card__image_container}>
                    <div className={styles.returned_loan_card__percentage}>
                        {investedPercent}%
                    </div>
                    <ProjectImage src={image} alt="Project image" fill />
                    <div className={styles.returned_loan_card__id}>
                        ID {id}
                    </div>
                </div>
                <div className={styles.returned_loan_card__grid}>
                    <div className={styles.returned_loan_card__info_block}>
                        <div className={styles.returned_loan_card__label}>
                            Стоимость залога
                        </div>
                        <div className={styles.returned_loan_card__value}>
                            <Money money={amount} />
                        </div>
                    </div>
                    <div className={styles.returned_loan_card__info_block}>
                        <div className={styles.returned_loan_card__label}>
                            Осталось привлечь
                        </div>
                        <div className={styles.returned_loan_card__value}>
                            <Money money={left} />
                        </div>
                    </div>
                    <div className={styles.returned_loan_card__info_block}>
                        <div className={styles.returned_loan_card__label}>
                            Рейтинг
                        </div>
                        <div className={styles.returned_loan_card__value}>
                            {rating}
                        </div>
                    </div>
                    <ProgressBar amount={investedPercent} className={styles.returned_loan_card__progress} />
                    <div className={styles.returned_loan_card__info_block}>
                        <div className={styles.returned_loan_card__label}>
                            Ставка
                        </div>
                        <div className={styles.returned_loan_card__value}>
                            {rate} %
                        </div>
                    </div>
                    <div className={styles.returned_loan_card__info_block}>
                        <div className={styles.returned_loan_card__label}>
                            Срок
                        </div>
                        <div className={styles.returned_loan_card__value}>
                            {term} мес.
                        </div>
                    </div>
                    <div className={styles.returned_loan_card__info_block}>
                        <div className={styles.returned_loan_card__label}>
                            Цель
                        </div>
                        <div className={styles.returned_loan_card__value}>
                            <Money money={target} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReturnedLoanCard;
