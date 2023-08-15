import styles from "./BlogAside.module.scss";
import {ObjectValues} from "@/src/shared/utils";
import {useState} from "react";
import ArrowRight from "@/src/shared/ui/svg/arrows/ArrowRight";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import {Button} from "@/src/shared/ui/buttons";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";
import AsLink from "@/src/shared/ui/buttons/decorators/AsLink";

const BlogAside = () => {
    const [tags, setTags] = useState<Array<string>>([]);
    const toggleTag = (tag: string) => {
        if (tags.includes(tag)) {
            setTags(prev => prev.filter(element => element !== tag));
            return;
        }
        setTags(prev => [...prev, tag]);
    }
    return (
        <aside className={styles.blog_aside}>
            <ul className={styles.blog_aside__list}>
                <li
                    className={styles.blog_aside__tag}
                    aria-selected={tags.includes("investment")}
                    onClick={() => {toggleTag("investment")}}
                >
                    Инвестиции
                </li>
                <li
                    className={styles.blog_aside__tag}
                    aria-selected={tags.includes("loans")}
                    onClick={() => {toggleTag("loans")}}
                >
                    Займы
                </li>
                <li
                    className={styles.blog_aside__tag}
                    aria-selected={tags.includes("platform")}
                    onClick={() => {toggleTag("platform")}}
                >
                    Платформа
                </li>
                <li
                    className={styles.blog_aside__tag}
                    aria-selected={tags.includes("law")}
                    onClick={() => {toggleTag("law")}}
                >
                    Закон
                </li>
                <li
                    className={styles.blog_aside__tag}
                    aria-selected={tags.includes("ltv")}
                    onClick={() => {toggleTag("ltv")}}
                >
                    LTV
                </li>
                <li
                    className={styles.blog_aside__tag}
                    aria-selected={tags.includes("statistics")}
                    onClick={() => {toggleTag("statistics")}}
                >
                    Статистика рынка
                </li>
                <li
                    className={styles.blog_aside__tag}
                    aria-selected={tags.includes("news")}
                    onClick={() => {toggleTag("news")}}
                >
                    Новости
                </li>
            </ul>
            <div className={styles.blog_aside__more}>
                <p className={styles.blog_aside__text}>
                    Оставайтесь в курсе событий Лендли
                </p>
                <div className={styles.blog_aside__buttons}>
                    {/*<PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN} arrow wide>*/}
                    {/*    <Button className={styles.blog_aside__more_button}>*/}
                    {/*        Задать свой вопрос*/}
                    {/*        <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.WHITE} />*/}
                    {/*    </Button>*/}
                    {/*</PrimaryButton>*/}
                    <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN} arrow wide>
                        <Button className={styles.blog_aside__button}>
                            Подписаться
                            <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.WHITE} />
                        </Button>
                    </PrimaryButton>
                </div>
            </div>
        </aside>
    );
}

export default BlogAside;
