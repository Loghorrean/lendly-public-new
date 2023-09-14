"use client";

import styles from "./BlogAside.module.scss";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";
import {usePostFilterContext} from "@/src/entities/post/context/BlogFilterContext";
import {useCallback} from "react";
import ExternalLink from "@/src/shared/ui/links/ExternalLink";

const availableTags = [
    "инвестиции",
    "займы",
    "платформа",
    "закон",
    "ltv",
    "статистика рынка",
    "новости",
    "buyback",
    "проекты",
    "залог",
    "налоги",
    "просрочка"
];

const BlogAside = () => {
    const { filter, setFilter } = usePostFilterContext();
    const { tags } = filter;
    const toggleTag = useCallback((tag: string) => {
        if (tags.includes(tag)) {
            setFilter(prev => {
                return {
                    ...prev,
                    tags: prev.tags.filter(element => element !== tag)
                }
            });
            return;
        }
        setFilter(prev => {
            return {
                ...prev,
                tags: [...prev.tags, tag]
            }
        });
    }, [tags]);
    const renderTags = () => {
        return availableTags.map(tag => {
            return <li
                key={tag}
                className={styles.blog_aside__tag}
                aria-selected={tags.includes(tag)}
                onClick={() => {toggleTag(tag)}}
            >
                { tag }
            </li>;
        })
    }
    return (
        <aside className={styles.blog_aside}>
            <ul className={styles.blog_aside__list}>
                { renderTags() }
            </ul>
            <div className={styles.blog_aside__more}>
                <p className={styles.blog_aside__text}>
                    Оставайтесь в курсе событий Лендли
                </p>
                <div className={styles.blog_aside__buttons}>
                    <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN} arrow wide>
                        <ExternalLink className={styles.blog_aside__button} href="https://forum.lendly.ru">
                            Обсудить на форуме Lendly
                            <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.WHITE} />
                        </ExternalLink>
                    </PrimaryButton>
                </div>
            </div>
        </aside>
    );
}

export default BlogAside;
