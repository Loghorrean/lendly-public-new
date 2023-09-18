import styles from "./ReturnedLoanCard.module.scss";
import {ProjectImage} from "@/src/shared/ui/images";
import ProgressBar from "@/src/shared/ui/utils/ProgressBar";
import Money from "@/src/shared/ui/utils/Money";
import {PublicProject} from "@/src/entities/project/model";
import {hexIdToDec, isValueEmpty} from "@/src/shared/utils";
import placeholderImage from "@/public/images/placeholder-image.png";

type Props = {
    project: PublicProject;
}

const ReturnedLoanCard = ({ project }: Props) => {
    const investedPercent = () => {
        if (isValueEmpty(project.investedSum)) {
            return 0
        }
        return Math.floor(project.investedSum.amount / project.targetSum.amount) * 100;
    }
    return (
        <div className={styles.returned_loan_card}>
            <div className={styles.returned_loan_card__container}>
                <div className={styles.returned_loan_card__image_container}>
                    <div className={styles.returned_loan_card__percentage}>
                        {project.ltv}%
                        <span className={styles.returned_loan_card__ltv}>LTV</span>
                    </div>
                    <ProjectImage src={project.photo ?? placeholderImage} alt="Project image" fill className={styles.returned_loan_card__image} />
                    <div className={styles.returned_loan_card__id}>
                        ID {hexIdToDec(project.uuid)}
                    </div>
                </div>
                <div className={styles.returned_loan_card__grid}>
                    <div className={styles.returned_loan_card__info_block}>
                        <div className={styles.returned_loan_card__label}>
                            Стоимость залога
                        </div>
                        <div className={styles.returned_loan_card__value}>
                            <Money money={project.targetSum} />
                        </div>
                    </div>
                    <div className={styles.returned_loan_card__info_block}>
                        <div className={styles.returned_loan_card__label}>
                            Осталось привлечь
                        </div>
                        <div className={styles.returned_loan_card__value}>
                            <Money
                                money={project.investedSum
                                    ? { amount: project.targetSum.amount - project.investedSum.amount, currencyCode: "RUB" }
                                    : { amount: 0, currencyCode: "RUB" }}
                            />
                        </div>
                    </div>
                    <div className={styles.returned_loan_card__info_block}>
                        <div className={styles.returned_loan_card__label}>
                            Рейтинг
                        </div>
                        <div className={styles.returned_loan_card__value}>
                            {project.mortgageRank}
                        </div>
                    </div>
                    <ProgressBar amount={investedPercent()} className={styles.returned_loan_card__progress} />
                    <div className={styles.returned_loan_card__info_block}>
                        <div className={styles.returned_loan_card__label}>
                            Ставка
                        </div>
                        <div className={styles.returned_loan_card__value}>
                            {project.interestRate} %
                        </div>
                    </div>
                    <div className={styles.returned_loan_card__info_block}>
                        <div className={styles.returned_loan_card__label}>
                            Срок
                        </div>
                        <div className={styles.returned_loan_card__value}>
                            {project.initialTerm} мес.
                        </div>
                    </div>
                    <div className={styles.returned_loan_card__info_block}>
                        <div className={styles.returned_loan_card__label}>
                            Цель
                        </div>
                        <div className={styles.returned_loan_card__value}>
                            <Money money={project.targetSum} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReturnedLoanCard;
