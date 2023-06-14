"use client";

import {useRef} from "react";
import {useParallax} from "@/src/widgets/useParallax";
import HeroSection from "@/src/widgets/about-us/HeroSection";
import ParallaxBlock from "@/src/shared/ui/layout/ParallaxBlock";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import WhatIsSection from "@/src/widgets/about-us/WhatIsSection";
import DevPointsSection from "@/src/widgets/about-us/DevPointsSection";
import TeamSection from "@/src/widgets/about-us/TeamSection";
import RequisitesSection from "@/src/widgets/about-us/RequisitesSection";
import DocumentsSection from "@/src/widgets/about-us/DocumentsSection";

export default function AboutUs() {
    const heroRef = useRef<HTMLDivElement | null>(null);
    const parallaxRef = useRef<HTMLDivElement | null>(null);
    useParallax(heroRef, parallaxRef);
    return (
        <>
            <HeroSection ref={heroRef} />
            <ParallaxBlock ref={parallaxRef}>
                <CommonBlock first>
                    <WhatIsSection />
                    <DevPointsSection />
                </CommonBlock>
                <TeamSection />
                <CommonBlock>
                    <RequisitesSection />
                    <DocumentsSection />
                </CommonBlock>
            </ParallaxBlock>
        </>
    );
}