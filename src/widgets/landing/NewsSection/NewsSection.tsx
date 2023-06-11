import styles from "./NewsSection.module.scss";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import {Container} from "@/src/shared/ui/layout";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import {ProjectLink} from "@/src/shared/ui/links";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";
import NewsList from "@/src/widgets/landing/NewsList";

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
            <Container needsDisabling>
                <NewsList />
            </Container>
            <Container>
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE} arrow wide>
                    <ProjectLink href="/blog">
                        Все новости
                        <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.BLACK} />
                    </ProjectLink>
                </PrimaryButton>
            </Container>
        </section>
    );
}

export default NewsSection;
