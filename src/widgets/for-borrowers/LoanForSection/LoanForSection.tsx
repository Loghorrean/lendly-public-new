import styles from "./LoanForSection.module.scss";
import {Container} from "@/src/shared/ui/layout";

const LoanForSection = () => {
    return (
        <section className={styles.loan_for_section}>
            <Container>
                <div className={styles.loan_for_section__container}>
                    <div className={styles.loan_for_section__caption}>
                        На какие цели можно взять займ?
                    </div>
                    <div className={styles.loan_for_section__text}>
                        Например, чтобы купить оборудование, рефинансировать кредит, исполнить контракт или
                        на любые другие цели бизнеса, а деньги нужны срочно.
                        <span className={styles.loan_for_section__text___gray}>
                            &nbsp;Чтобы получить заём в Lendly, не нужен большой пакет документов,
                            а рассмотрение заявки займёт 1 день.
                        </span>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default LoanForSection;
