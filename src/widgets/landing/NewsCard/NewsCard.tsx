"use client";

import {StaticImageData} from "next/image";
import styles from "./NewsCard.module.scss";
import {ProjectImage} from "@/src/shared/ui/images";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import {ProjectLink} from "@/src/shared/ui/links";
import ArrowRight from "@/src/shared/ui/svg/arrows/ArrowRight";

export type NewsArticle = {
    uuid: string;
    photo: string | StaticImageData;
    title: string;
}

type Props = {
    article: NewsArticle;
}

const NewsCard = ({ article }: Props) => {
    return (
        <li className={styles.news_card}>
            <div className={styles.news_card__photo}>
                <div className={styles.news_card__tag}>
                    Новости
                </div>
                <ProjectImage src={article.photo} alt="News photo" width={420} height={260} />
            </div>
            <div className={styles.news_card__content}>
                <Heading headingType={HEADING_TYPE.H3} className={styles.news_card__title}>
                    { article.title }
                </Heading>
                <footer className={styles.news_card__footer}>
                    <ProjectLink href={`/blog/${article.uuid}`} className={styles.news_card__link}>
                        Читать статью
                        <ArrowRight fill="#05B768" />
                    </ProjectLink>
                    <div className={styles.news_card__date}>
                        30 ноября 2021 года
                    </div>
                </footer>
            </div>
        </li>
    );
}

export default NewsCard;
