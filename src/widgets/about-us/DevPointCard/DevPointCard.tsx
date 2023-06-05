import styles from "./DevPointCard.module.scss";
import {PropsWithChildren} from "react";
import {BlockProps, cn} from "@/src/shared/utils";

type Props = BlockProps & {
    year: number;
    cardIndex: number;
}

const DevPointCard = ({ year, cardIndex, children, ...props }: PropsWithChildren<Props>) => {
    return (
        <li className={cn(styles.dev_point_card, props.className)}>
            <header className={styles.dev_point_card__header}>
                <div className={styles.dev_point_card__year}>
                    { year }
                </div>
                <div className={styles.dev_point_card__index}>
                    /.{ cardIndex }
                </div>
            </header>
            <footer className={styles.dev_point_card__footer}>
                { children }
            </footer>
        </li>
    );
}

export default DevPointCard;
