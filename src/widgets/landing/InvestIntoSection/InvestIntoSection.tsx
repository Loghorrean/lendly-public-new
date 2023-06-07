import {Container} from "@/src/shared/ui/layout";
import styles from "./InvestIntoSection.module.scss";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import InvestIntoCard from "@/src/widgets/landing/InvestIntoCard";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import {ProjectLink} from "@/src/shared/ui/links";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";
import GreenText from "@/src/shared/ui/typography/GreenText";

const InvestIntoSection = () => {
    return (
        <section className={styles.invest_into_section}>
            <Container>
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2}>
                        <p>Хочу <GreenText><span>инвестировать.</span></GreenText></p>
                        <p>Какие варианты?</p>
                    </Heading>
                </SecondaryHeading>
                <div className={styles.invest_into_section__cards}>
                    <InvestIntoCard
                        index="01"
                        content="Например, строительство или реконструкцию коммерческой недвижимости. Доход зависит от прибыли проекта."
                        title="В проекты"
                        className={styles.invest_into_section__first_card}
                    />
                    <InvestIntoCard
                        index="02"
                        content="Когда заёмщику срочно нужны деньги и нет времени на подготовку документов. Все обязательства обеспечены залогом."
                        title="В займы для бизнеса"
                        className={styles.invest_into_section__second_card}
                    />
                </div>
                <PrimaryButton wide arrow color={PRIMARY_BUTTON_COLOR.WHITE}>
                    <ProjectLink href="/for-investors" className={styles.invest_into_section__more}>
                        Узнать больше
                        <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.BLACK} />
                    </ProjectLink>
                </PrimaryButton>
            </Container>
        </section>
    );
}

export default InvestIntoSection;
