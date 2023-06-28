import {Container} from "@/src/shared/ui/layout";
import styles from "./DifferencesSection.module.scss";
import TertiaryHeading from "@/src/shared/ui/typography/Heading/decorators/TertiaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import GreenText from "@/src/shared/ui/typography/GreenText";
import DifferencesCard from "@/src/widgets/for-investors/DifferencesCard";
import {Money} from "@/src/shared/ui/utils";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import MainDifferencesBlock from "@/src/widgets/for-investors/MainDirrefencesBlock";
import {useWindowSize} from "@/src/shared/utils";
import {useMemo} from "react";
import Loader from "@/src/shared/ui/loaders/Loader";
import DifferencesSlider from "@/src/widgets/for-investors/DifferencesSlider";

const DifferencesSection = () => {
    const [width] = useWindowSize();
    const renderCards = useMemo(() => {
        if (width === 0) {
            return <Container>
                <Loader dark />
            </Container>
        }
        if (width >= 768) {
            return <Container>
                <MainDifferencesBlock />
            </Container>
        }
        return <Container needsDisabling>
            <DifferencesSlider />
        </Container>
    }, [width]);
    return (
        <section className={styles.differences_section}>
            <Container>
                <div className={styles.differences_section__container}>
                    <SecondaryHeading>
                        <Heading headingType={HEADING_TYPE.H2} className={styles.differences_section__tablet_heading}>
                            В чем разница?
                        </Heading>
                    </SecondaryHeading>
                </div>
            </Container>
            {renderCards}
        </section>
    );
}

export default DifferencesSection;
