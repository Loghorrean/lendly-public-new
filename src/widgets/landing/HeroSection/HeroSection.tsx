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
import React, {ForwardedRef, useCallback} from "react";
import {BlockProps, cn, isNotEmpty, resultIf} from "@/src/shared/utils";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";

type Props = BlockProps & {
    isFixed: boolean;
}

const HeroSection = ({ isFixed, ...props }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const videoRef = useCallback((node: HTMLVideoElement | null | undefined) => {
        if (isNotEmpty(node)) {
            node.play().catch(() => console.error("Could not play the video"));
        }
    }, []);
    return (
        <MainSection {...props} className={cn(styles.hero_section, props.className)} ref={ref}>
            <div className={cn(
                styles.hero_section__video_container,
                resultIf(!isFixed, styles.hero_section__video_container___unfixed)
            )}>
                <video
                    ref={videoRef}
                    muted
                    playsInline
                    loop
                    className={styles.hero_section__video}
                    poster="/images/landing/landing-background.png"
                >
                    <source src="/images/landing/lendly.mp4" type="video/mp4" />
                </video>
            </div>
            <Container>
                <div className={styles.hero_section__container}>
                    <SecondaryHeading>
                        <Heading headingType={HEADING_TYPE.H1} className={styles.hero_section__heading}>
                            Платформа для инвестиций в займы для бизнеса и проекты
                        </Heading>
                    </SecondaryHeading>
                    <div></div>
                    <footer className={styles.hero_section__footer}>
                        <div className={styles.hero_section__left}>
                            <ProjectImage src={blackLogo} alt="Black logo" className={styles.hero_section__logo} />
                            <StatsSlider />
                            <StatsSlider initial={2} className={styles.hero_section__second_slider} />
                        </div>
                        <div className={styles.hero_section__right}>
                            <TertiaryHeading>
                                <Heading headingType={HEADING_TYPE.H2} className={styles.hero_section__second_heading}>
                                    Платформа для инвестиций в займы для бизнеса и проекты, обеспеченные залогом недвижимости
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
