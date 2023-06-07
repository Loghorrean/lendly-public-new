import styles from "./DifferencesCard.module.scss";
import {PropsWithChildren} from "react";

type Props = {
    heading: string;
}

const DifferencesCard = ({heading, children}: PropsWithChildren<Props>) => {
    return (
        <div className={styles.differences_card}>
            <div className={styles.differences_card__heading}>
                { heading }
            </div>
            { children }
        </div>
    );
}

export default DifferencesCard;
