import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import styles from "./LoanRegisterSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import registerLoanImage from "@/public/images/for-investors/register-loan-image.png";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import {ProjectImage} from "@/src/shared/ui/images";

const LoanRegisterSection = () => {
    return (
        <CommonBlock as="section" className={styles.loan_register_section} smaller>
            <Container>
                <div className={styles.loan_register_section__container}>
                    <SecondaryHeading>
                        <Heading headingType={HEADING_TYPE.H2} className={styles.loan_register_section__heading}>
                            Как зарегистрировать залог, придётся идти в Росреестр?
                        </Heading>
                    </SecondaryHeading>
                    <div className={styles.loan_register_section__content}>
                        <p className={styles.loan_register_section__text}>
                            Нет, управлять залогом будет Lendly.  Мы сами оформим нужные документы.
                        </p>
                        <ProjectImage src={registerLoanImage} alt="Register loan presentational image" className={styles.loan_register_section__image} />
                    </div>
                </div>
            </Container>
        </CommonBlock>
    );
}

export default LoanRegisterSection;
