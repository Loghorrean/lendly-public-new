"use client";

import HeroSection from "@/src/widgets/landing/HeroSection";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import WhatIsSection from "@/src/widgets/landing/WhatIsSection";
import InvestIntoSection from "@/src/widgets/landing/InvestIntoSection";
import FinancingSection from "@/src/widgets/landing/FinancingSection";
import ReturnedLoansSection from "@/src/widgets/landing/ReturnedLoansSection";
import {useEffect, useRef} from "react";
import LoanTermsSection from "@/src/widgets/landing/LoanTermsSection";
import ProjectSuggestionsSection from "@/src/widgets/landing/ProjectSuggestionsSection";
import NewsSection from "@/src/widgets/landing/NewsSection";
import QuestionsSection from "@/src/widgets/landing/QuestionsSection";
import ParallaxBlock from "@/src/shared/ui/layout/ParallaxBlock";
import {useParallax} from "@/src/widgets/useParallax";

export default function Home() {
    const heroRef = useRef<HTMLDivElement | null>(null);
    const parallaxRef = useRef<HTMLDivElement | null>(null);
    const isFixed = useParallax(heroRef, parallaxRef);
    return (
      <>
        <HeroSection isFixed={isFixed} ref={heroRef} />
        <ParallaxBlock ref={parallaxRef}>
            <CommonBlock first>
                <WhatIsSection />
                <InvestIntoSection />
                <FinancingSection />
            </CommonBlock>
            <ReturnedLoansSection />
            <LoanTermsSection />
            <ProjectSuggestionsSection />
            <NewsSection />
            <QuestionsSection />
        </ParallaxBlock>
      </>
  );
}
