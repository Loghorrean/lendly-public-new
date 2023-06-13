import ArrowRight from "@/src/shared/ui/svg/arrows/ArrowRight";
import styles from "./QuestionThemesList.module.scss";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import {Button} from "@/src/shared/ui/buttons";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";
import {ObjectValues} from "@/src/shared/utils";
import {useState} from "react";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const QUESTION_THEMES = {
    GENERAL: "GENERAL",
    PROJECTS: "PROJECTS",
    LOANS: "LOANS",
    INVESTORS: "INVESTORS",
    BORROWERS: "BORROWERS"
} as const;

type QuestionTheme = ObjectValues<typeof QUESTION_THEMES>;

const QuestionThemesList = () => {
    const [currentTheme, setCurrentTheme] = useState<QuestionTheme>(QUESTION_THEMES.GENERAL);
    return (
        <aside className={styles.question_themes_list}>
            <ul className={styles.question_themes_list__list}>
                <li>
                    <a
                        href="#general"
                        className={styles.question_themes_list__link}
                        aria-current={currentTheme === QUESTION_THEMES.GENERAL}
                        onClick={() => setCurrentTheme(QUESTION_THEMES.GENERAL)}
                    >
                        Общие вопросы <ArrowRight fill="#05B768" size={SVG_CONTAINER_SIZE.SIZE_20} />
                    </a>
                </li>
                <li>
                    <a
                        href="#projects"
                        className={styles.question_themes_list__link}
                        aria-current={currentTheme === QUESTION_THEMES.PROJECTS}
                        onClick={() => setCurrentTheme(QUESTION_THEMES.PROJECTS)}
                    >
                        Проектное финансирование <ArrowRight fill="#05B768" size={SVG_CONTAINER_SIZE.SIZE_20} />
                    </a>
                </li>
                <li>
                    <a
                        href="#loans"
                        className={styles.question_themes_list__link}
                        aria-current={currentTheme === QUESTION_THEMES.LOANS}
                        onClick={() => setCurrentTheme(QUESTION_THEMES.LOANS)}
                    >
                        Заём с фиксированной ставкой <ArrowRight fill="#05B768" size={SVG_CONTAINER_SIZE.SIZE_20} />
                    </a>
                </li>
                <li>
                    <a
                        href="#investors"
                        className={styles.question_themes_list__link}
                        aria-current={currentTheme === QUESTION_THEMES.INVESTORS}
                        onClick={() => setCurrentTheme(QUESTION_THEMES.INVESTORS)}
                    >
                        Инвесторам <ArrowRight fill="#05B768" size={SVG_CONTAINER_SIZE.SIZE_20} />
                    </a>
                </li>
                <li>
                    <a
                        href="#borrowers"
                        className={styles.question_themes_list__link}
                        aria-current={currentTheme === QUESTION_THEMES.BORROWERS}
                        onClick={() => setCurrentTheme(QUESTION_THEMES.BORROWERS)}
                    >
                        Заёмщикам <ArrowRight fill="#05B768" size={SVG_CONTAINER_SIZE.SIZE_20} />
                    </a>
                </li>
            </ul>
            <div className={styles.question_themes_list__more}>
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN} arrow wide>
                    <Button className={styles.question_themes_list__more_button}>
                        Задать свой вопрос
                        <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.WHITE} />
                    </Button>
                </PrimaryButton>
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE} arrow wide>
                    <Button className={styles.question_themes_list__more_button}>
                        Обсудить на форуме Lendly
                        <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.GRAY} />
                    </Button>
                </PrimaryButton>
            </div>
        </aside>
    );
}

export default QuestionThemesList;
