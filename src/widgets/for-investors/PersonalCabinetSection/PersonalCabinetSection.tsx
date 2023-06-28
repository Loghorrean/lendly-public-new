import styles from "./PersonalCabinetSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import GreenText from "@/src/shared/ui/typography/GreenText";

const PersonalCabinetSection = () => {
    return (
        <section className={styles.personal_cabinet_section}>
            <Container>
                <header className={styles.personal_cabinet_section__header}>
                    <SecondaryHeading>
                        <Heading headingType={HEADING_TYPE.H2} className={styles.personal_cabinet_section__heading}>
                            У каждого инвестора - <GreenText><span>свой личный кабинет.</span></GreenText> Как он выглядит?
                        </Heading>
                    </SecondaryHeading>
                    <p className={styles.personal_cabinet_section__text}>
                        В нём можно изучать информацию по проектам и займам, инвестировать,
                        следить за графиком платежей и заказывать выписки и отчёты.
                    </p>
                </header>
            </Container>
        </section>
    );
}

export default PersonalCabinetSection;
