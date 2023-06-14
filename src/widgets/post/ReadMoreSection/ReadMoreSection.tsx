import styles from "./ReadMoreSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import NewsList from "@/src/widgets/landing/NewsList";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import {ProjectLink} from "@/src/shared/ui/links";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";

const ReadMoreSection = () => {
    return (
        <section className={styles.read_more_section}>
            <Container needsDisabling>
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.read_more_section__heading}>
                        Читайте также
                    </Heading>
                </SecondaryHeading>
                <NewsList style={{ paddingInline: "0" }} />
                <PrimaryButton arrow wide color={PRIMARY_BUTTON_COLOR.WHITE}>
                    <ProjectLink href="/blog">
                        Все новости
                        <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.BLACK} />
                    </ProjectLink>
                </PrimaryButton>
            </Container>
        </section>
    );
}

export default ReadMoreSection;
