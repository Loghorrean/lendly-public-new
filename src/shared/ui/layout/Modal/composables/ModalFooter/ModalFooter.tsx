import styles from "./ModalFooter.module.scss";
import { PropsWithChildren } from "react";

const ModalFooter = ({ children }: PropsWithChildren) => {
    return (
        <footer className={styles.modal_footer}>
            <div className={styles.modal_footer__actions}>{children}</div>
        </footer>
    );
};

export default ModalFooter;
