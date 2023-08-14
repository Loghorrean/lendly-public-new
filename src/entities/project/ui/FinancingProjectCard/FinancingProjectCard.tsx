import styles from "./FinancingProjectCard.module.scss";
import {cn} from "@/src/shared/utils";
import mockLogo from "@/public/images/project/mock-project-logo.png";
import Image from "next/image";
import {Button} from "@/src/shared/ui/buttons";
import {Money} from "@/src/shared/ui/utils";

const FinancingProjectCard = () => {
    return (
        <li className={styles.financing_project_card}>
            <div className={styles.financing_project_card__container}>
                <div className={styles.financing_project_card__ids}>
                    <div className={cn(styles.financing_project_card__id, styles.financing_project_card__id___dark)}>
                        ID 332932-7666
                    </div>
                    <div className={cn(styles.financing_project_card__id, styles.financing_project_card__id___green)}>
                        Первичный рынок
                    </div>
                </div>
                <div className={styles.financing_project_card__logo}>
                    <Image src={mockLogo} alt="Project logo" />
                </div>
                <div className={styles.financing_project_card__info}>
                    <div className={styles.financing_project_card__block}>
                        <div className={styles.financing_project_card__heading}>
                            Размер предложения
                        </div>
                        <div className={styles.financing_project_card__value}>
                            <Money money={{ amount: 12294488200, currencyCode: "RUB" }} />
                        </div>
                    </div>
                    <div className={styles.financing_project_card__block}>
                        <div className={styles.financing_project_card__heading}>
                            Цена предложения
                        </div>
                        <div className={styles.financing_project_card__value}>
                            <Money money={{ amount: 194488200, currencyCode: "RUB" }} />
                        </div>
                    </div>
                    <div className={styles.financing_project_card__block}>
                        <div className={styles.financing_project_card__heading}>
                            Ставка по договору
                        </div>
                        <div className={styles.financing_project_card__value}>
                            18%
                        </div>
                    </div>
                    <div className={styles.financing_project_card__block}>
                        <div className={styles.financing_project_card__heading}>
                            Оставшийся срок
                        </div>
                        <div className={styles.financing_project_card__value}>
                            20 месяцев
                        </div>
                    </div>
                    <div className={styles.financing_project_card__block}>
                        <div className={styles.financing_project_card__heading}>
                            LTV
                        </div>
                        <div className={styles.financing_project_card__value}>
                            50%
                        </div>
                    </div>
                    <div className={styles.financing_project_card__block}>
                        <div className={styles.financing_project_card__heading}>
                            Доходность
                        </div>
                        <div className={styles.financing_project_card__value}>
                            18%
                        </div>
                    </div>
                </div>
                <Button className={styles.financing_project_card__invest}>
                    Инвестировать
                </Button>
            </div>
        </li>
    );
}

export default FinancingProjectCard;
