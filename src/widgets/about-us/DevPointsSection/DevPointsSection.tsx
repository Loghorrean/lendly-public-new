import styles from "./DevPointsSection.module.scss";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import DevPointCard from "@/src/widgets/about-us/DevPointCard";
import {Container} from "@/src/shared/ui/layout";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {ProjectLink} from "@/src/shared/ui/links";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";

const DevPointsSection = () => {
    return (
        <section className={styles.dev_points_section}>
            <Container>
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.dev_points_section__heading}>
                        Точки развития Lendly
                    </Heading>
                </SecondaryHeading>
                <ul className={styles.dev_points_section__list}>
                    <DevPointCard year={2019} cardIndex={19} className={styles.dev_points_section__first_card}>
                        <div>
                            Создали платформу, продумали бизнес-модель и разработали ПО
                        </div>
                    </DevPointCard>
                    <DevPointCard year={2020} cardIndex={20} className={styles.dev_points_section__second_card}>
                        <div>
                            Выдали первый займ
                        </div>
                        <div>
                            Начали предлагать инвестиции в займы на вторичном рынке
                        </div>
                        <div>
                            Запустили/реализовали механизм вторичного рынка
                        </div>
                        <div>
                            Выдали самый крупный заём на сумму ₽27 млн
                        </div>
                    </DevPointCard>
                    <DevPointCard year={2021} cardIndex={21} className={styles.dev_points_section__third_card}>
                        <div>
                            Вступили в реестр Центрального Банка
                        </div>
                        <div>
                            Начали предлагать инвестиции в займы на вторичном рынке с байбэком
                        </div>
                        <div>
                            Реализовали механизм вторичного рынка с байбэк
                        </div>
                    </DevPointCard>
                    <DevPointCard year={2022} cardIndex={22} className={styles.dev_points_section__fourth_card}>
                        <div className={styles.dev_points_section__fourth_card_content}>
                            Заключили первую сделку по проектному финансированию в коммерческую недвижимость.
                            Общий объем финансирования — 165 млн.
                        </div>
                    </DevPointCard>
                    <DevPointCard year={2023} cardIndex={23} className={styles.dev_points_section__fifth_card}>
                        <div className={styles.dev_points_section__fifth_card_first_content}>
                            Сделали ребрендинг
                        </div>
                        <div className={styles.dev_points_section__fifth_card_second_content}>
                            Впервые вышли на пятую позицию в рейтинге краудинвестинговых
                            компаний по сумме выдачи займов
                        </div>
                    </DevPointCard>
                </ul>
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE} wide arrow>
                    <ProjectLink href="/auth/register" className={styles.dev_points_section__more}>
                        Узнать больше
                        <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.BLACK} />
                    </ProjectLink>
                </PrimaryButton>
            </Container>
        </section>
    );
}

export default DevPointsSection;
