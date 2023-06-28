import styles from "./ClosedClubSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import GreenText from "@/src/shared/ui/typography/GreenText";
import ChartIcon from "@/src/shared/ui/svg/for-investors/ChartIcon";
import ChatIcon from "@/src/shared/ui/svg/for-investors/ChatIcon";

const ClosedClubSection = () => {
    return (
        <section className={styles.closed_club_section}>
            <Container>
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.closed_club_section__heading}>
                        Для крупных инвесторов есть <GreenText><span>закрытый клуб</span></GreenText>
                    </Heading>
                </SecondaryHeading>
            </Container>
            <Container needsDisabling>
                <div className={styles.closed_club_section__cards}>
                    <div className={styles.closed_club_section__card}>
                        <ChartIcon />
                        <footer className={styles.closed_club_section__card_footer}>
                            <div className={styles.closed_club_section__card_heading}>
                                Как попасть в Lendly Club?
                            </div>
                            <div className={styles.closed_club_section__card_text}>
                                Проинвестировать на общую сумму в ₽3 млн. У платформы есть право отказать в членстве.
                            </div>
                        </footer>
                    </div>
                    <div className={styles.closed_club_section__card}>
                        <ChatIcon />
                        <footer className={styles.closed_club_section__card_footer}>
                            <div className={styles.closed_club_section__card_heading}>
                                Что даёт членство клуба?
                            </div>
                            <div className={styles.closed_club_section__card_text}>
                                Члены клуба могут бронировать участие в проектах через личного менеджера
                                ещё до того, как информация появится на публичной части платформы.
                            </div>
                        </footer>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default ClosedClubSection;
