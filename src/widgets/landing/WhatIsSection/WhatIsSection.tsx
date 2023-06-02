import styles from "./WhatIsSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import rfCrest from "@/public/images/landing/rf-crest.png";
import {ProjectImage} from "@/src/shared/ui/images";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {ProjectLink} from "@/src/shared/ui/links";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";

const WhatIsSection = () => {
    return (
        <section className={styles.what_is_section}>
            <Container>
                <div className={styles.what_is_section__container}>
                    <p className={styles.what_is_section__caption}>
                        Что такое Lendly?
                    </p>
                    <div className={styles.what_is_section__main}>
                        <SecondaryHeading>
                            <p className={styles.what_is_section__main_text}>
                                <span>
                                    Это платформа, которая привлекает частные инвестиции в займы и девелоперские проекты.
                                </span>&nbsp;
                                <span className={styles.what_is_section__gray_text}>
                                    Входит в реестр операторов инвестиционных платформ Центробанка
                                </span>
                            </p>
                        </SecondaryHeading>
                        <ProjectImage src={rfCrest} alt="Russian Federation crest" className={styles.what_is_section__crest} />
                        <p className={styles.what_is_section__license}>
                            <span>Лицензия ЦБ — №34 от 04.03.2021.</span>
                            <span>Деятельность регулирует 259-ФЗ</span>
                            <span>«О привлечении инвестиций».</span>
                        </p>
                        <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE}>
                            <ProjectLink href="/" className={styles.what_is_section__more}>
                                Узнать больше
                                <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.BLACK} />
                            </ProjectLink>
                        </PrimaryButton>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default WhatIsSection;
