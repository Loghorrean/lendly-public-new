"use client";

import styles from "./NewsCard.module.scss";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import {ProjectLink} from "@/src/shared/ui/links";
import ArrowRight from "@/src/shared/ui/svg/arrows/ArrowRight";
import {BlockProps, cn, formatDate, isNotEmpty, isValueEmpty, resultIf} from "@/src/shared/utils";
import {Post, POST_SIZE} from "@/src/entities/post/model";
import React from "react";
import {ProjectImage} from "@/src/shared/ui/images";

type Props = BlockProps<HTMLLIElement> & {
    post: Post;
    showDescription?: boolean;
}

const NewsCard = ({ post, showDescription = true, ...props }: Props) => {
    const isWhite = () => {
        return isNotEmpty(post.cover) && post.postSize === POST_SIZE.BIG;
    }
    return (
        <li
            {...props}
            className={cn(
                styles.news_card,
                resultIf(isWhite(), styles.news_card___white),
                resultIf(!isWhite(), styles.news_card___hoverable),
                resultIf(post.postSize === POST_SIZE.BIG, styles.news_card___big),
                props.className
            )}
            style={{ backgroundImage: resultIf(isWhite(), `url("${post.cover}")`) }}
        >
            <div className={styles.news_card__tags}>
                { post.tags.map(tag => <div className={styles.news_card__tag} key={tag}>
                    { tag }
                </div>) }
            </div>
            { isNotEmpty(post.cover) && post.postSize !== POST_SIZE.BIG && <div className={styles.news_card__photo}>
                <ProjectImage src={post.cover} alt="News photo" fill />
            </div> }
            <div
                className={cn(
                    styles.news_card__content,
                    resultIf(isValueEmpty(post.cover) || (isNotEmpty(post.cover) && post.postSize === POST_SIZE.BIG), styles.news_card__content___no_photo),
                    resultIf(isValueEmpty(post.cover) && post.tags.length !== 0, styles.news_card__content___empty)
                )}
            >
                <div className={cn(styles.news_card__main, resultIf(isNotEmpty(post.shortContent), styles.news_card__main___with_desciption))}>
                    <Heading headingType={HEADING_TYPE.H3} className={styles.news_card__title}>
                        { post.title }
                    </Heading>
                    {
                        isNotEmpty(post.shortDescription) && showDescription
                        && <p
                            className={styles.news_card__description}
                            dangerouslySetInnerHTML={{ __html: post.shortDescription }}>
                        </p>
                    }
                </div>
                <footer className={styles.news_card__footer}>
                    <ProjectLink href={`/blog/${post.slug}`} className={cn(
                        styles.news_card__link,
                        resultIf(isWhite(), styles.news_card__link___white)
                    )}>
                        Читать статью
                        <ArrowRight fill={isWhite() ? "#ffffff" : "#05B768"} />
                    </ProjectLink>
                    { isNotEmpty(post.publishedAt) && <div className={cn(
                        styles.news_card__date,
                        resultIf(isWhite(), styles.news_card__date___white)
                    )}>
                        { `${formatDate(new Date(post.publishedAt), "DD MMMM YYYY")} года` }
                    </div> }
                </footer>
            </div>
        </li>
    );
}

export default NewsCard;
