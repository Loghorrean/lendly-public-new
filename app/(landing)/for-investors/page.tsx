"use client";

import {useRef} from "react";
import {useParallax} from "@/src/widgets/useParallax";
import HeroSection from "@/src/widgets/for-investors/HeroSection";
import ParallaxBlock from "@/src/shared/ui/layout/ParallaxBlock";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import WhereToInvestSection from "@/src/widgets/for-investors/WhereToInvestSection";
import DifferencesSection from "@/src/widgets/for-investors/DifferencesSection";
import FinancingSection from "@/src/widgets/landing/FinancingSection";
import styles from "./styles.module.scss";
import LoanRegisterSection from "@/src/widgets/for-investors/LoanRegisterSection";
import WantToInvestSection from "@/src/widgets/for-investors/WantToInvestSection";
import ClosedClubSection from "@/src/widgets/for-investors/ClosedClubSection";
import WhyInvestSection from "@/src/widgets/for-investors/WhyInvestSection";
import PersonalCabinetSection from "@/src/widgets/for-investors/PersonalCabinetSection";
import QuestionsSection from "@/src/widgets/for-investors/QuestionsSection/QuestionsSection";

export default function ForInvestors() {
    const heroRef = useRef<HTMLDivElement | null>(null);
    const parallaxRef = useRef<HTMLDivElement | null>(null);
    useParallax(heroRef, parallaxRef);
    return (
        <>
            <HeroSection ref={heroRef} />
            <ParallaxBlock ref={parallaxRef}>
                <CommonBlock first>
                    <WhereToInvestSection />
                    <DifferencesSection />
                </CommonBlock>
                <FinancingSection className={styles.financing_section} />
                <LoanRegisterSection />
                <WantToInvestSection />
                <ClosedClubSection />
                <WhyInvestSection />
                <PersonalCabinetSection />
                <QuestionsSection />
            </ParallaxBlock>
        </>
    );
}