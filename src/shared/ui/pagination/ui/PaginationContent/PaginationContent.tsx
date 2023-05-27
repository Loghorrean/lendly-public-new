"use client";

import React, { PropsWithChildren } from "react";
import styles from "./PaginationContent.module.scss";
import Loader from "@/src/shared/ui/loaders/Loader";
import { usePaginationContext } from "@/src/shared/ui/pagination/context/PaginationContext";

const PaginationContent = ({ children }: PropsWithChildren) => {
    const context = usePaginationContext();
    if (context.loading) {
        return (
            <div className={styles.pagination_content__loading}>
                <Loader />
            </div>
        );
    }
    //TODO: ADD NO DATA IMAGE
    return (
        <>
            {context.count === 0 ? (
                <div className={styles.pagination_content__no_data}>Nothing found.</div>
            ) : (
                <div className={styles.pagination_content}>{children}</div>
            )}
        </>
    );
};

export default PaginationContent;
