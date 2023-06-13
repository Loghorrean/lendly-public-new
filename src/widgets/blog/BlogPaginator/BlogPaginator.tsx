import styles from "./BlogPaginator.module.scss";
import ArrowLeft from "@/src/shared/ui/svg/arrows/ArrowLeft";
import {cn, resultIf} from "@/src/shared/utils";
import ArrowRight from "@/src/shared/ui/svg/arrows/ArrowRight";

const localMin = 1;
const localMax = 3;

type Props = {
    activePage: number;
    onClick: (page: number) => void;
}

const BlogPaginator = ({ activePage, onClick }: Props) => {
    const handleNextClick = () => {
        onClick(activePage + 1);
    }
    const handlePreviousClick = () => {
        onClick(activePage - 1);
    }
    return (
        <div className={styles.blog_paginator}>
            <button
                className={cn(
                    styles.blog_paginator__button,
                    styles.blog_paginator__arrow,
                    resultIf(activePage === localMin, styles.blog_paginator__arrow___disabled)
                )}
                onClick={handlePreviousClick}
            >
                <ArrowLeft />
            </button>
            <ul className={styles.blog_paginator__pages}>
                <li>
                    <button
                        className={cn(
                            styles.blog_paginator__button,
                            styles.blog_paginator__page,
                            resultIf(activePage === 1, styles.blog_paginator__page___active)
                        )}
                        onClick={() => onClick(1)}
                    >
                        1
                    </button>
                </li>
                <li>
                    <button
                        className={cn(
                            styles.blog_paginator__button,
                            styles.blog_paginator__page,
                            resultIf(activePage === 2, styles.blog_paginator__page___active)
                        )}
                        onClick={() => onClick(2)}
                    >
                        2
                    </button>
                </li>
                <li>
                    <button
                        className={cn(
                            styles.blog_paginator__button,
                            styles.blog_paginator__page,
                            resultIf(activePage === 3, styles.blog_paginator__page___active)
                        )}
                        onClick={() => onClick(3)}
                    >
                        3
                    </button>
                </li>
            </ul>
            <button
                className={cn(
                    styles.blog_paginator__button,
                    styles.blog_paginator__arrow,
                    resultIf(activePage === localMax, styles.blog_paginator__arrow___disabled)
                )}
                onClick={handleNextClick}
            >
                <ArrowRight />
            </button>
        </div>
    );
}

export default BlogPaginator;
