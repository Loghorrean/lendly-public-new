import {Container} from "@/src/shared/ui/layout";
import styles from "./WhereToInvestSection.module.scss";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import {cn} from "@/src/shared/utils";

const WhereToInvestSection = () => {
    return (
        <section className={styles.where_to_invest_section}>
            <Container>
                <div className={styles.where_to_invest_section__container}>
                    <SecondaryHeading>
                        <Heading headingType={HEADING_TYPE.H2} className={styles.where_to_invest_section__heading}>
                            Во что можно инвестировать?
                        </Heading>
                    </SecondaryHeading>
                    <div className={cn(styles.where_to_invest_section__card, styles.where_to_invest_section__card___first)}>
                        <div className={styles.where_to_invest_section__card_heading}>
                            В проекты с коммерческой недвижимостью
                        </div>
                        <div className={styles.where_to_invest_section__card_text}>
                            Например, в строительство или реконструкцию объекта. Инвесторы получат доход, когда
                            объект построят, заполнят арендаторами или продадут. В среднем это занимаем 1–2 года.
                            Управляющий проектом удержит только свою комиссию — до 30%. Остальное поделят
                            между собой инвесторы.
                        </div>
                    </div>
                    <div className={cn(styles.where_to_invest_section__card, styles.where_to_invest_section__card___second)}>
                        <div className={styles.where_to_invest_section__card_heading}>
                            В займы для бизнеса
                        </div>
                        <div className={styles.where_to_invest_section__card_text}>
                            Когда заёмщику срочно нужны деньги и нет времени на подготовку документов. Например,
                            чтобы купить оборудование, рефинансировать заём или исполнить контракт. Все
                            обязательства обеспечены залогом.
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default WhereToInvestSection;
