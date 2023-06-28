import {PropsWithChildren, ReactNode} from "react";
import styles from "./TermsBlock.module.scss";

type Props = {
    title: ReactNode;
    value: ReactNode;
}

const TermsBlock = ({ title, value, children }: PropsWithChildren<Props>) => {
    return (
        <div className={styles.terms_block}>
            <header className={styles.terms_block__title}>
                { title }
            </header>
            {children}
            <footer className={styles.terms_block__value}>
                {value}
            </footer>
        </div>
    );
}

export default TermsBlock;
