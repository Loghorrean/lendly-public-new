import {Container} from "@/src/shared/ui/layout";
import styles from "./ReturnedLoansSection.module.scss";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import {ProjectLink} from "@/src/shared/ui/links";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";
import ReturnedLoanCard from "@/src/widgets/landing/ReturnedLoanCard";
import mockImage from "@/public/images/landing/mock-pic.png";
import GreenText from "@/src/shared/ui/typography/GreenText";
import {useGetFinishedProjectsList} from "@/src/entities/project/hooks";
import {useMemo} from "react";
import {isNotEmpty} from "@/src/shared/utils";

const ReturnedLoansSection = () => {
    const getFinishedProjects = useGetFinishedProjectsList(2);
    const renderCards = useMemo(() => {
        if (isNotEmpty(getFinishedProjects.data)) {
            return getFinishedProjects.data.map(project => {
                return <ReturnedLoanCard project={project} key={project.uuid} />
            });
        }
    }, [getFinishedProjects.data]);
    return (
        <section className={styles.returned_loans_section}>
            <Container>
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.returned_loans_section__heading}>
                        Эти займы&nbsp;<GreenText><span>уже вернули</span></GreenText>
                    </Heading>
                </SecondaryHeading>
            </Container>
            <Container needsDisabling>
                <div className={styles.returned_loans_section__list}>
                    { renderCards }
                </div>
            </Container>
            <Container>
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN} wide arrow>
                    <ProjectLink href="/auth/register">
                        Посмотреть все текущие проекты
                        <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.WHITE} />
                    </ProjectLink>
                </PrimaryButton>
                <div className={styles.returned_loans_section__disclaimer}>
                    Новые проекты доступны только зарегистрированным пользователям,
                    согласно требованиям законодательства
                </div>
            </Container>
        </section>
    );
}

export default ReturnedLoansSection;
