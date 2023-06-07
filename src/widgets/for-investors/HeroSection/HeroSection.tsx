import React, {ForwardedRef} from "react";
import {BlockProps, cn} from "@/src/shared/utils";
import MainSection from "@/src/shared/ui/layout/MainSection";
import {Container} from "@/src/shared/ui/layout";
import styles from "./HeroSection.module.scss";
import PrimaryHeading from "@/src/shared/ui/typography/Heading/decorators/PrimaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import {ProjectLink} from "@/src/shared/ui/links";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";
import StatsSlider from "@/src/widgets/for-investors/StatsSlider";
import GreenText from "@/src/shared/ui/typography/GreenText";

const HeroSection = ({ ...props }: BlockProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <MainSection {...props} className={cn(styles.hero_section, props.className)} ref={ref}>
            <Container>
                <div className={styles.hero_section__container}>
                    <div>
                        <PrimaryHeading>
                            <Heading headingType={HEADING_TYPE.H1} className={styles.hero_section__heading}>
                                Получайте <GreenText>
                                    <span>пассивный доход</span>
                                </GreenText> от инвестиций в проекты и займы
                            </Heading>
                        </PrimaryHeading>
                        <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN} arrow>
                            <ProjectLink href="/auth/register" className={styles.hero_section__link}>
                                Стать инвестором
                                <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.WHITE} />
                            </ProjectLink>
                        </PrimaryButton>
                    </div>
                    <footer className={styles.hero_section__footer}>
                        <StatsSlider />
                    </footer>
                </div>
            </Container>
        </MainSection>
    );
}

export default React.forwardRef(HeroSection);
