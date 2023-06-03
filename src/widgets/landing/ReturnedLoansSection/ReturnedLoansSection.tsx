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

const ReturnedLoansSection = () => {
    return (
        <section className={styles.returned_loans_section}>
            <Container>
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.returned_loans_section__heading}>
                        Эти займы&nbsp;<span className={styles.returned_loans_section__green_text}>уже вернули</span>
                    </Heading>
                </SecondaryHeading>
                <div className={styles.returned_loans_section__list}>
                    <ReturnedLoanCard
                        image={mockImage}
                        investedPercent={50}
                        id="332932-7666"
                        amount={{ amount: 6500000000, currencyCode: "RUB" }}
                        left={{ amount: 0, currencyCode: "RUB" }}
                        rating="CCC"
                        rate={10}
                        term={35}
                        target={{ amount: 3000000000, currencyCode: "RUB" }}
                    />
                    <ReturnedLoanCard
                        image={mockImage}
                        investedPercent={75}
                        id="332932-7666"
                        amount={{ amount: 1494488200, currencyCode: "RUB" }}
                        left={{ amount: 0, currencyCode: "RUB" }}
                        rating="A"
                        rate={1}
                        term={24}
                        target={{ amount: 1300000000, currencyCode: "RUB" }}
                    />
                </div>
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
