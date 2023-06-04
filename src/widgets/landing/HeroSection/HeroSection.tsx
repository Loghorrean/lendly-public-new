import MainSection from "@/src/shared/ui/layout/MainSection";
import styles from "./HeroSection.module.scss";
import blackLogo from "@/public/images/logo/landing-black-logo.png";
import {ProjectImage} from "@/src/shared/ui/images";
import TertiaryHeading from "@/src/shared/ui/typography/Heading/decorators/TertiaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";
import {Container} from "@/src/shared/ui/layout";
import {ProjectLink} from "@/src/shared/ui/links";
import StatsSlider from "@/src/widgets/landing/StatsSlider";
import React, {ForwardedRef} from "react";
import {BlockProps, cn} from "@/src/shared/utils";

const HeroSection = ({ ...props }: BlockProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <MainSection {...props} className={cn(styles.hero_section, props.className)} ref={ref}>
            <Container>
                <div className={styles.hero_section__container}>
                    <div></div>
                    <footer className={styles.hero_section__footer}>
                        <div className={styles.hero_section__left}>
                            <ProjectImage src={blackLogo} alt="Black logo" />
                            <StatsSlider />
                        </div>
                        <div className={styles.hero_section__right}>
                            <TertiaryHeading>
                                <Heading headingType={HEADING_TYPE.H2} className={styles.hero_section__second_heading}>
                                    Платформа для инвестиций в займы для бизнеса и проекты
                                </Heading>
                            </TertiaryHeading>
                            <div className={styles.hero_section__links}>
                                <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN} arrow>
                                    <ProjectLink href="/for-investors" className={styles.hero_section__link}>
                                        Стать инвестором
                                        <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.WHITE} />
                                    </ProjectLink>
                                </PrimaryButton>
                                <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE} arrow>
                                    <ProjectLink href="/for-borrowers" className={styles.hero_section__link}>
                                        Стать заемщиком
                                        <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.BLACK} />
                                    </ProjectLink>
                                </PrimaryButton>
                            </div>
                        </div>
                    </footer>
                </div>
            </Container>
        </MainSection>
    );
}

const ForwardedHeroSection = React.forwardRef(HeroSection);
const MemoizedHeroSection = React.memo(ForwardedHeroSection);

export default MemoizedHeroSection;
