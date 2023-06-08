import styles from "./CallbackSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import CallbackForm from "@/src/widgets/for-borrowers/CallbackForm";

const CallbackSection = () => {
    return (
        <section className={styles.callback_section}>
            <Container>
                <div className={styles.callback_section__container}>
                    <SecondaryHeading>
                        <Heading headingType={HEADING_TYPE.H2} className={styles.callback_section__heading}>
                            Хочу получить заём. Как с вами связаться?
                        </Heading>
                    </SecondaryHeading>
                    <CallbackForm />
                </div>
            </Container>
        </section>
    );
}

export default CallbackSection;
