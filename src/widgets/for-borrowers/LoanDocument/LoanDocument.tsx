import {BlockProps, cn} from "@/src/shared/utils";
import {PropsWithChildren, ReactNode} from "react";
import styles from "./LoanDocument.module.scss";

type Props = BlockProps<HTMLLIElement> & {
    heading: ReactNode;
};

const LoanDocument = ({ heading, children, ...props }: PropsWithChildren<Props>) => {
    return (
        <li {...props} className={cn(styles.loan_document, props.className)}>
            <header className={styles.loan_document__header}>
                { heading }
            </header>
            <div>
                { children }
            </div>
        </li>
    );
}

export default LoanDocument;
