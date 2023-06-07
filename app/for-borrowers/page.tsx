"use client";

import {useRef} from "react";
import {useParallax} from "@/src/widgets/useParallax";
import HeroSection from "@/src/widgets/for-borrowers/HeroSection";
import ParallaxBlock from "@/src/shared/ui/layout/ParallaxBlock";
import LoanForSection from "@/src/widgets/for-borrowers/LoanForSection";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import LoanTermsSection from "@/src/widgets/for-borrowers/LoanTermsSection";

export default function ForBorrowers() {
    const heroRef = useRef<HTMLDivElement | null>(null);
    const parallaxRef = useRef<HTMLDivElement | null>(null);
    useParallax(heroRef, parallaxRef);
    return (
        <>
            <HeroSection ref={heroRef} />
            <ParallaxBlock ref={parallaxRef}>
                <CommonBlock first>
                    <LoanForSection />
                    <LoanTermsSection />
                </CommonBlock>
            </ParallaxBlock>
        </>
    );
}
