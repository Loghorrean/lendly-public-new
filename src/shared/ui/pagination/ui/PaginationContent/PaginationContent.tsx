"use client";

import React, { PropsWithChildren } from "react";
import styles from "./PaginationContent.module.scss";
import Loader from "@/src/shared/ui/loaders/Loader";
import { usePaginationContext } from "@/src/shared/ui/pagination/context/PaginationContext";

type Props = {
    placeholder?: string;
}

const PaginationContent = ({ children, placeholder = "Ничего не найдено" }: PropsWithChildren<Props>) => {
    const context = usePaginationContext();
    if (context.loading) {
        return (
            <div className={styles.pagination_content__loading}>
                <Loader dark />
            </div>
        );
    }
    //TODO: ADD NO DATA IMAGE
    return (
        <>
            {context.count === 0 ? (
                <div className={styles.pagination_content__no_data}>{ placeholder }</div>
            ) : (
                <div className={styles.pagination_content}>{children}</div>
            )}
        </>
    );
};

export default PaginationContent;
