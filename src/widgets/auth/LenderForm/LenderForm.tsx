"use client";

import {SyntheticEvent} from "react";
import styles from "./LenderForm.module.scss";

const LenderForm = () => {
    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit} className={styles.lender_form}>
            Lender Form
        </form>
    );
}

export default LenderForm;
