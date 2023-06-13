"use client";

import {StaticImageData} from "next/image";
import styles from "./NewsCard.module.scss";
import {ProjectImage} from "@/src/shared/ui/images";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import {ProjectLink} from "@/src/shared/ui/links";
import ArrowRight from "@/src/shared/ui/svg/arrows/ArrowRight";
import {BlockProps, cn, isNotEmpty, isValueEmpty, resultIf} from "@/src/shared/utils";

export type NewsArticle = {
    uuid: string;
    photo?: string | StaticImageData;
    description?: string;
    title: string;
    large: boolean;
}

type Props = BlockProps<HTMLLIElement> & {
    article: NewsArticle;
}

const NewsCard = ({ article, ...props }: Props) => {
    const isWhite = () => {
        return isNotEmpty(article.photo) && article.large;
    }
    return (
        <li
            {...props}
            className={cn(
                styles.news_card,
                resultIf(article.large, styles.news_card___large),
                resultIf(isWhite(), styles.news_card___white),
                props.className
            )}
            style={{ backgroundImage: resultIf(isWhite(), `url("${article.photo}")`) }}
        >
            <div className={styles.news_card__tag}>
                Новости
            </div>
            { isNotEmpty(article.photo) && !article.large && <div className={styles.news_card__photo}>
                <ProjectImage src={article.photo} alt="News photo" fill />
            </div> }
            <div className={cn(
                styles.news_card__content,
                resultIf(isValueEmpty(article.photo) || (isNotEmpty(article.photo) && article.large), styles.news_card__content___no_photo)
            )}>
                <div className={cn(styles.news_card__main, resultIf(isNotEmpty(article.description), styles.news_card__main___with_desciption))}>
                    <Heading headingType={HEADING_TYPE.H3} className={styles.news_card__title}>
                        { article.title }
                    </Heading>
                    { isNotEmpty(article.description) && <p className={styles.news_card__description}>{ article.description }</p> }
                </div>
                <footer className={styles.news_card__footer}>
                    <ProjectLink href={`/blog/${article.uuid}`} className={cn(
                        styles.news_card__link,
                        resultIf(isWhite(), styles.news_card__link___white)
                    )}>
                        Читать статью
                        <ArrowRight fill={isWhite() ? "#ffffff" : "#05B768"} />
                    </ProjectLink>
                    <div className={cn(
                        styles.news_card__date,
                        resultIf(isWhite(), styles.news_card__date___white)
                    )}>
                        30 ноября 2021 года
                    </div>
                </footer>
            </div>
        </li>
    );
}

export default NewsCard;
