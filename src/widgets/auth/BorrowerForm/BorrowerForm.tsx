"use client";

import {SyntheticEvent} from "react";
import styles from "./BorrowerForm.module.scss";

const BorrowerForm = () => {
    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit} className={styles.borrower_form}>
            Borrower Form
        </form>
    );
}

export default BorrowerForm;
