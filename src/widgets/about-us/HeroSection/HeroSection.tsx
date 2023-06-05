import MainSection from "@/src/shared/ui/layout/MainSection";
import styles from "./HeroSection.module.scss";
import {BlockProps, cn} from "@/src/shared/utils";
import React, {ForwardedRef} from "react";
import {Container} from "@/src/shared/ui/layout";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import PrimaryHeading from "@/src/shared/ui/typography/Heading/decorators/PrimaryHeading";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import {ProjectLink} from "@/src/shared/ui/links";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";

const HeroSection = ({ ...props }: BlockProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <MainSection {...props} className={cn(styles.hero_section, props.className)} ref={ref} style={{position: "initial"}}>
            <Container>
                <PrimaryHeading>
                    <Heading headingType={HEADING_TYPE.H1} className={styles.hero_section__heading}>
                        Сотни инвесторов уже <span className={styles.hero_section__green_text}>зарабатывают</span> вместе с Lendly
                    </Heading>
                </PrimaryHeading>
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN} arrow>
                    <ProjectLink href="/auth/register" className={styles.hero_section__link}>
                        Подробнее <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.WHITE} />
                    </ProjectLink>
                </PrimaryButton>
            </Container>
        </MainSection>
    );
}

export default React.forwardRef(HeroSection);