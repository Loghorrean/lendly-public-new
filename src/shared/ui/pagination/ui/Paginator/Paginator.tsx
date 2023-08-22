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

type PaginatorQuery = {
    [key: string]: number;
};

const Paginator = () => {
    const context = usePaginationContext();
    const pathname = usePathname();

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
                scroll={false}
                className={cn(styles.previous_page_link, resultIf(isDisabled, styles.previous_page_link___disabled))}
            >
                <div className={styles.my_page_link_container}>
                    <PaginationArrowLeft active={!isDisabled} />
                </div>
            </ProjectLink>
        );
    };

    const nextPageLink = () => {
        const isDisabled = context.page >= countPages();
        const previousPageUrl = isDisabled ? "#" : generatePageUrl(context.page + 1);
        return (
            <ProjectLink
                href={previousPageUrl}
                scroll={false}
                className={cn(styles.next_page_link, resultIf(isDisabled, styles.next_page_link___disabled))}
            >
                <div className={styles.my_page_link_container}>
                    <PaginationArrowRight active={!isDisabled} />
                </div>
            </ProjectLink>
        );
    };

    const renderPages = () => {
        const buffer: Array<ReactElement> = [];
        const pagesCount = countPages();
        if (pagesCount <= 7) {
            for (let i = 1; i <= pagesCount; ++i) {
                const isActive = context.page === i;
                const href = generatePageUrl(i);
                buffer.push(
                    <li key={i}>
                        <ProjectLink
                            href={href}
                            scroll={false}
                            className={cn(
                                styles.my_page_link,
                                resultIf(isActive, cn(styles.my_page_link___active, styles.my_page_link_container))
                            )}
                        >
                            {i}
                        </ProjectLink>
                    </li>
                );
            }
            return buffer;
        }
        const currentPage = context.page;
        let interval = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
        if (interval.includes(1)) {
            const indexOfOne = interval.indexOf(1);
            interval = interval.splice(indexOfOne + 1, interval.length - 1);
        }
        if (interval.includes(pagesCount)) {
            const indexOfLast = interval.indexOf(pagesCount);
            const diff = interval.length - indexOfLast;
            interval = interval.slice(0, -diff);
        }
        const hasOverflowLeft = pagesCount >= 8 && currentPage >= 5;
        const hasOverflowRight = pagesCount >= 8 && currentPage <= countPages() - 4;
        buffer.push(
            <li>
                <ProjectLink
                    href={generatePageUrl(1)}
                    scroll={false}
                    className={cn(
                        styles.my_page_link,
                        resultIf(currentPage === 1, cn(styles.my_page_link___active, styles.my_page_link_container))
                    )}
                >
                    1
                </ProjectLink>
            </li>
        );
        if (hasOverflowLeft) {
            buffer.push(<li className={styles.my_page_link}>...</li>);
        }
        for (let i = 0; i < interval.length; ++i) {
            buffer.push(
                <li key={i}>
                    <ProjectLink
                        href={generatePageUrl(interval[i])}
                        scroll={false}
                        className={cn(
                            styles.my_page_link,
                            resultIf(
                                currentPage === interval[i],
                                cn(styles.my_page_link___active, styles.my_page_link_container)
                            )
                        )}
                    >
                        {interval[i]}
                    </ProjectLink>
                </li>
            );
        }
        if (hasOverflowRight) {
            buffer.push(<li className={styles.my_page_link}>...</li>);
        }
        buffer.push(
            <li>
                <ProjectLink
                    href={generatePageUrl(pagesCount)}
                    scroll={false}
                    className={cn(
                        styles.my_page_link,
                        resultIf(
                            currentPage === pagesCount,
                            cn(styles.my_page_link___active, styles.my_page_link_container)
                        )
                    )}
                >
                    {pagesCount}
                </ProjectLink>
            </li>
        );
        return buffer;
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
