"use client";

import {useRef} from "react";
import {useParallax} from "@/src/widgets/useParallax";
import HeroSection from "@/src/widgets/for-investors/HeroSection";
import ParallaxBlock from "@/src/shared/ui/layout/ParallaxBlock";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import WhereToInvestSection from "@/src/widgets/for-investors/WhereToInvestSection";

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
                </CommonBlock>
            </ParallaxBlock>
        </>
    );
}