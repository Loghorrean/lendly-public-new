import styles from "./DynamicPageSection.module.css";
import PrimaryHeading from "@/src/shared/ui/typography/Heading/decorators/PrimaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";

type Props = {
    param: string;
}

const DynamicPageSection = ({ param }: Props) => {
    return (
        <section className={styles.dynamic_page_section}>
            <PrimaryHeading>
                <Heading headingType={HEADING_TYPE.H1}>
                    Динамическая страница
                </Heading>
            </PrimaryHeading>
            <SecondaryHeading>
                <Heading headingType={HEADING_TYPE.H2}>
                    { param }
                </Heading>
            </SecondaryHeading>
            <div>
                Будет добавлено позднее
            </div>
        </section>
    );
}

export default DynamicPageSection;
