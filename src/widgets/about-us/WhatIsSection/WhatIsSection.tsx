import styles from "./WhatIsSection.module.scss";
import {Container} from "@/src/shared/ui/layout";

const WhatIsSection = () => {
    return (
        <section className={styles.what_is_section}>
            <Container>
                <div className={styles.what_is_section__container}>
                    <p className={styles.what_is_section__left}>
                        Что такое Lendly?
                    </p>
                    <p className={styles.what_is_section__right}>
                        <span>
                            Это платформа, которая привлекает частные инвестиции в девелоперские проекты и займы под
                            залог недвижимости. Входит в Реестр операторов инвестиционных платформ Центробанка
                        </span>&nbsp;
                        <span className={styles.what_is_section__gray_text}>
                            — лицензия №34 от 04.03.2021. Деятельность регулирует 259-ФЗ «О привлечении инвестиций».
                        </span>
                    </p>
                </div>
            </Container>
        </section>
    );
}

export default WhatIsSection;
