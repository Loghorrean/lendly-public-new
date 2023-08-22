"use client";

import styles from "./NewsCard.module.scss";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import {ProjectLink} from "@/src/shared/ui/links";
import ArrowRight from "@/src/shared/ui/svg/arrows/ArrowRight";
import {BlockProps, cn, formatDate, isNotEmpty, resultIf} from "@/src/shared/utils";
import {Post} from "@/src/entities/post/model";

type Props = BlockProps<HTMLLIElement> & {
    post: Post;
}

//TODO: REFACTOR CARD, WHEN PHOTO IS RESOLVED
const NewsCard = ({ post, ...props }: Props) => {
    // const isWhite = () => {
    //     return isNotEmpty(article.photo) && article.large;
    // }
    const isWhite = () => {
        return false;
    }
    return (
        <li
            {...props}
            className={cn(
                styles.news_card,
                resultIf(isWhite(), styles.news_card___white),
                resultIf(!isWhite(), styles.news_card___hoverable),
                props.className
            )}
            // style={{ backgroundImage: resultIf(isWhite(), `url("${article.photo}")`) }}
        >
            <div className={styles.news_card__tag}>
                Новости
            </div>
            {/*{ isNotEmpty(article.photo) && !article.large && <div className={styles.news_card__photo}>*/}
            {/*    <ProjectImage src={article.photo} alt="News photo" fill />*/}
            {/*</div> }*/}
            <div className={cn(
                styles.news_card__content,
                // resultIf(isValueEmpty(article.photo) || (isNotEmpty(article.photo) && article.large), styles.news_card__content___no_photo)
            )}>
                <div className={cn(styles.news_card__main, resultIf(isNotEmpty(post.shortContent), styles.news_card__main___with_desciption))}>
                    <Heading headingType={HEADING_TYPE.H3} className={styles.news_card__title}>
                        { post.title }
                    </Heading>
                    { isNotEmpty(post.shortContent) && <p className={styles.news_card__description}>{ post.shortContent }</p> }
                </div>
                <footer className={styles.news_card__footer}>
                    {/*<ProjectLink href={`/blog/${post.slug}`} className={cn(*/}
                    {/*    styles.news_card__link,*/}
                    {/*    resultIf(isWhite(), styles.news_card__link___white)*/}
                    {/*)}>*/}
                    {/*    Читать статью*/}
                    {/*    <ArrowRight fill={isWhite() ? "#ffffff" : "#05B768"} />*/}
                    {/*</ProjectLink>*/}
                    <ProjectLink href={`/blog/#`} className={cn(
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
