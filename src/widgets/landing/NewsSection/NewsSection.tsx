import styles from "./NewsSection.module.scss";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import {Container} from "@/src/shared/ui/layout";

const NewsSection = () => {
    return (
        <section className={styles.news_section}>
            <Container>
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.news_section__heading}>
                        СМИ о Lendly
                    </Heading>
                </SecondaryHeading>
            </Container>
        </section>
    );
}

export default NewsSection;
