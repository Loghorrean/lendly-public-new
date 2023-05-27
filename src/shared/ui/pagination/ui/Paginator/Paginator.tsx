"use client";

import React, { ReactElement } from "react";
import styles from "./Paginator.module.scss";
import { usePathname } from "next/navigation";
import { usePaginationContext } from "@/src/shared/ui/pagination/context/PaginationContext";
import buildQuery from "@/src/shared/utils/functions/router/buildQuery";
import { ProjectLink } from "@/src/shared/ui/links";
import { cn, getQueryObject, resultIf } from "@/src/shared/utils";
import PaginationArrowLeft from "@/src/shared/ui/svg/pagination/PaginationArrowLeft";
import PaginationArrowRight from "@/src/shared/ui/svg/pagination/PaginationArrowRight";
import Loader from "@/src/shared/ui/loaders/Loader";
import { CommonText } from "@/src/shared/ui/typography";
import { COMMON_TEXT_COLOR } from "@/src/shared/ui/typography/CommonText/CommonText";

type PaginatorQuery = {
    [key: string]: number;
};

//TODO: ADD MAX NUMBER OF PAGES
const Paginator = () => {
    const pathname = usePathname();
    const context = usePaginationContext();

    const countPages = (): number => {
        return Math.ceil(context.totalCount / context.perPage);
    };

    const generatePageUrl = (pageNumber: number): string => {
        let url = pathname;
        const queryObject =
            typeof window !== "undefined" ? (getQueryObject(window.location.search) as unknown as PaginatorQuery) : {};
        pageNumber === 1 ? delete queryObject[context.pageParam] : (queryObject[context.pageParam] = pageNumber);
        const query = buildQuery(queryObject);
        url += query !== "" ? `?${query}` : "";
        return url;
    };

    const previousPageLink = () => {
        const isDisabled = context.page === 1;
        const previousPageUrl = isDisabled ? "#" : generatePageUrl(context.page - 1);
        return (
            <ProjectLink
                href={previousPageUrl}
                className={cn(styles.previous_page_link, resultIf(isDisabled, styles.previous_page_link___disabled))}
            >
                <div className={styles.my_page_link_container}>
                    <PaginationArrowLeft active={!isDisabled} />
                </div>
            </ProjectLink>
        );
    };

    const renderPages = () => {
        const buffer: Array<ReactElement> = [];
        for (let i = 0; i < countPages(); ++i) {
            const isActive = context.page === i + 1;
            const href = generatePageUrl(i + 1);
            buffer.push(
                <li key={i}>
                    <ProjectLink
                        href={href}
                        className={cn(
                            styles.my_page_link,
                            resultIf(isActive, cn(styles.my_page_link___active, styles.my_page_link_container))
                        )}
                    >
                        <CommonText
                            bold={isActive}
                            color={isActive ? COMMON_TEXT_COLOR.PURPLE : COMMON_TEXT_COLOR.DARK}
                        >
                            {i + 1}
                        </CommonText>
                    </ProjectLink>
                </li>
            );
        }
        return buffer;
    };

    const nextPageLink = () => {
        const isDisabled = context.page >= countPages();
        const previousPageUrl = isDisabled ? "#" : generatePageUrl(context.page + 1);
        return (
            <ProjectLink
                href={previousPageUrl}
                className={cn(styles.next_page_link, resultIf(isDisabled, styles.next_page_link___disabled))}
            >
                <div className={styles.my_page_link_container}>
                    <PaginationArrowRight active={!isDisabled} />
                </div>
            </ProjectLink>
        );
    };

    return (
        <>
            {countPages() >= 1 && (
                <div className={styles.paginator_container}>
                    <div className={styles.paginator}>
                        {previousPageLink()}
                        <div className={styles.paginator__pages}>
                            {context.loading ? (
                                <Loader dark />
                            ) : (
                                <>
                                    <ul className={styles.paginator__list}>{renderPages()}</ul>
                                </>
                            )}
                        </div>
                        {nextPageLink()}
                    </div>
                </div>
            )}
        </>
    );
};

export default Paginator;
