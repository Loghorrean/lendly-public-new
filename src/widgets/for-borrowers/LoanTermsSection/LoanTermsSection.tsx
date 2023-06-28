import styles from "./LoanTermsSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import {Button} from "@/src/shared/ui/buttons";
import ArrowLeft from "@/src/shared/ui/svg/arrows/ArrowLeft";
import ArrowRight from "@/src/shared/ui/svg/arrows/ArrowRight";
import Slider from "react-slick";
import {cn} from "@/src/shared/utils";
import TermsBlock from "@/src/widgets/for-borrowers/TermsBlock";
import MoneyImage from "@/src/shared/ui/images/content/MoneyImage";
import RubleSvg from "@/src/shared/ui/svg/currency/RubleSvg";
import ChartImage from "@/src/shared/ui/images/content/ChartImage";
import ClockImage from "@/src/shared/ui/images/content/ClockImage";

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <div>
        <Button className={cn(styles.loan_terms_section__button, styles.loan_terms_section__button__left)}>
            <ArrowLeft />
        </Button>
    </div>,
    nextArrow: <div>
        <Button className={cn(styles.loan_terms_section__button, styles.loan_terms_section__button__right)}>
            <ArrowRight />
        </Button>
    </div>
};

const LoanTermsSection = () => {
    return (
        <section className={styles.loan_terms_section}>
            <Container>
                <header className={styles.loan_terms_section__header}>
                    <SecondaryHeading>
                        <Heading headingType={HEADING_TYPE.H2}>
                            Какие условия для займа?
                        </Heading>
                    </SecondaryHeading>
                </header>
                <div className={styles.loan_terms_section__slider}>
                    <Slider {...settings}>
                        <TermsBlock title="Сумма" value={<><p>50 000 000</p><RubleSvg /></>}>
                            <MoneyImage />
                        </TermsBlock>
                        <TermsBlock title="Процентная ставка" value="18 - 33%">
                            <ChartImage />
                        </TermsBlock>
                        <TermsBlock title="Срок погашения" value="До 12 месяцев">
                            <ClockImage />
                        </TermsBlock>
                    </Slider>
                </div>
            </Container>
        </section>
    );
}

export default LoanTermsSection;
