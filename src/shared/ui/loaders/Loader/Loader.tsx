"use client";

import React from "react";
import styles from "./Loader.module.scss";
import LoadingIcon from "@/src/shared/ui/svg/loading/LoadingIcon";
import { resultIf } from "@/src/shared/utils";

type Props = {
    dark?: boolean;
};

const Loader = ({ dark }: Props) => {
    return (
        <div className={styles.loader}>
            <LoadingIcon fill={resultIf(dark, "#000000")} />
        </div>
    );
};

export default Loader;
