"use client";

import {useRef} from "react";
import {useParallax} from "@/src/widgets/useParallax";
import HeroSection from "@/src/widgets/about-us/HeroSection";
import ParallaxBlock from "@/src/shared/ui/layout/ParallaxBlock";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import WhatIsSection from "@/src/widgets/about-us/WhatIsSection";
import DevPointsSection from "@/src/widgets/about-us/DevPointsSection";

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
            </ParallaxBlock>
        </>
    );
}