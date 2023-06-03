import {ReactNode} from "react";
import styles from "./InvestIntoCard.module.scss";
import {BlockProps, cn} from "@/src/shared/utils";

type Props = BlockProps & {
    title: ReactNode;
    index: ReactNode;
    content: ReactNode;
}

const InvestIntoCard = ({ title, index, content, ...props }: Props) => {
    return (
        <div {...props} className={cn(styles.invest_into_card, props.className)}>
            <header className={styles.invest_into_card__header}>
                <div className={styles.invest_into_card__title}>
                    {title}
                </div>
                <div className={styles.invest_into_card__index}>
                    /.{index}
                </div>
            </header>
            <footer className={styles.invest_into_card__footer}>
                <div className={styles.invest_into_card__info}>
                    {content}
                </div>
            </footer>
        </div>
    );
}

export default InvestIntoCard;
