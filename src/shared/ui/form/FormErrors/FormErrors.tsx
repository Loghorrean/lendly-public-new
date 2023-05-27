import React, { FC } from "react";
import styles from "./FormErrors.module.scss";
import { ValidationErrors, resultIf, useMountAnimation } from "@/src/shared/utils";

interface Props {
    errors: ValidationErrors;
}

const FormErrors: FC<Props> = ({ errors }) => {
    const mounted = useMountAnimation();
    return (
        <ul className={styles.form_errors}>
            {errors.map((error, index) => {
                return (
                    <li
                        key={error}
                        data-mounted={resultIf(mounted, "true")}
                        style={{ transitionDelay: `${index * 0.5}s` }}
                    >
                        {error}
                    </li>
                );
            })}
        </ul>
    );
};

export default FormErrors;
