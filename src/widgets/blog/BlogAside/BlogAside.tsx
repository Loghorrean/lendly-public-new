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

const QUESTION_THEMES = {
    INVESTMENTS: "INVESTMENTS",
    LOANS: "LOANS",
    PLATFORM: "PLATFORM",
    LAW: "LAW",
    LTV: "LTV"
} as const;

type QuestionTheme = ObjectValues<typeof QUESTION_THEMES>;

const BlogAside = () => {
    const [currentTheme, setCurrentTheme] = useState<QuestionTheme>(QUESTION_THEMES.INVESTMENTS);
    return (
        <aside className={styles.blog_aside}>
            <ul className={styles.blog_aside__list}>
                <li>
                    <AsLink>
                        <button
                            className={styles.blog_aside__link}
                            aria-current={currentTheme === QUESTION_THEMES.INVESTMENTS}
                            onClick={() => setCurrentTheme(QUESTION_THEMES.INVESTMENTS)}
                        >
                            Инвестиции <ArrowRight fill="#05B768" size={SVG_CONTAINER_SIZE.SIZE_20} />
                        </button>
                    </AsLink>
                </li>
                <li>
                    <AsLink>
                        <button
                            className={styles.blog_aside__link}
                            aria-current={currentTheme === QUESTION_THEMES.LOANS}
                            onClick={() => setCurrentTheme(QUESTION_THEMES.LOANS)}
                        >
                            Займы <ArrowRight fill="#05B768" size={SVG_CONTAINER_SIZE.SIZE_20} />
                        </button>
                    </AsLink>
                </li>
                <li>
                    <AsLink>
                        <button
                            className={styles.blog_aside__link}
                            aria-current={currentTheme === QUESTION_THEMES.PLATFORM}
                            onClick={() => setCurrentTheme(QUESTION_THEMES.PLATFORM)}
                        >
                            Платформа <ArrowRight fill="#05B768" size={SVG_CONTAINER_SIZE.SIZE_20} />
                        </button>
                    </AsLink>
                </li>
                <li>
                    <AsLink>
                        <button
                            className={styles.blog_aside__link}
                            aria-current={currentTheme === QUESTION_THEMES.LAW}
                            onClick={() => setCurrentTheme(QUESTION_THEMES.LAW)}
                        >
                            Закон <ArrowRight fill="#05B768" size={SVG_CONTAINER_SIZE.SIZE_20} />
                        </button>
                    </AsLink>
                </li>
                <li>
                    <AsLink>
                        <button
                            className={styles.blog_aside__link}
                            aria-current={currentTheme === QUESTION_THEMES.LTV}
                            onClick={() => setCurrentTheme(QUESTION_THEMES.LTV)}
                        >
                            LTV <ArrowRight fill="#05B768" size={SVG_CONTAINER_SIZE.SIZE_20} />
                        </button>
                    </AsLink>
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
