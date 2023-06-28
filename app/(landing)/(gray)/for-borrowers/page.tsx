"use client";

import {useRef} from "react";
import {useParallax} from "@/src/widgets/useParallax";
import HeroSection from "@/src/widgets/for-borrowers/HeroSection";
import ParallaxBlock from "@/src/shared/ui/layout/ParallaxBlock";
import LoanForSection from "@/src/widgets/for-borrowers/LoanForSection";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import LoanTermsSection from "@/src/widgets/for-borrowers/LoanTermsSection";
import BorrowerRequirementsSection from "@/src/widgets/for-borrowers/BorrowerRequirementsSection";
import AvailableEstateSection from "@/src/widgets/for-borrowers/AvailableEstateSection";
import UnavailableEstateSection from "@/src/widgets/for-borrowers/UnavailableEstateSection";
import WhoCanSection from "@/src/widgets/for-borrowers/WhoCanSection";
import LoanRatingSection from "@/src/widgets/for-borrowers/LoanRatingSection";
import LoanDocumentSection from "@/src/widgets/for-borrowers/LoanDocumentSection";
import CallbackSection from "@/src/widgets/for-borrowers/CallbackSection";

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
                <BorrowerRequirementsSection />
                <AvailableEstateSection />
                <UnavailableEstateSection />
                <WhoCanSection />
                <LoanRatingSection />
                <LoanDocumentSection />
                <CallbackSection />
            </ParallaxBlock>
        </>
    );
}
